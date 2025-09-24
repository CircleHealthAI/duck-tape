import { NextRequest, NextResponse } from "next/server";

type FoodSuggestion = {
  title: string;
  description: string;
  ingredients: string[];
};

type SuggestionsResponse = {
  suggestions: FoodSuggestion[];
  model: string;
  source: "llm" | "mock";
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const prompt: string = (body?.prompt ?? "").toString().trim();

    if (!prompt) {
      return NextResponse.json(
        { error: "Missing 'prompt' in request body" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const baseUrl = "https://api.openai.com/v1"; // OpenAI provider
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    // If no API key is provided, return mock data so the app still works.
    if (!apiKey) {
      const mock: SuggestionsResponse = {
        model: "mock",
        source: "mock",
        suggestions: buildMockSuggestions(prompt),
      };
      return NextResponse.json(mock);
    }

    const systemPrompt = [
      "You are a helpful food recommendation assistant.",
      "Given a user's craving or preferences, suggest 3 diverse food options.",
      "Return STRICT JSON with the shape: { suggestions: [{ title, description, ingredients: string[] }] }.",
      "Be concise and avoid extra commentary outside JSON.",
    ].join(" ");

    // Try a JSON-mode style call. Fall back to parsing if needed.
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `Craving: ${prompt}. Return only the JSON object described.`,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      return NextResponse.json(
        { error: "Upstream LLM request failed", details: errorText },
        { status: 502 }
      );
    }

    const json = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = json?.choices?.[0]?.message?.content || "";
    const parsed = safeParseSuggestions(content);

    if (!parsed) {
      // If parsing fails, provide graceful mock fallback augmented with user prompt
      const fallback: SuggestionsResponse = {
        model,
        source: "mock",
        suggestions: buildMockSuggestions(prompt),
      };
      return NextResponse.json(fallback);
    }

    const result: SuggestionsResponse = {
      model,
      source: "llm",
      suggestions: parsed.suggestions.slice(0, 3).map((s) => ({
        title: s.title || "Untitled",
        description: s.description || "",
        ingredients: Array.isArray(s.ingredients) ? s.ingredients : [],
      })),
    };

    return NextResponse.json(result);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}

function safeParseSuggestions(content: string): { suggestions: FoodSuggestion[] } | null {
  try {
    // Extract the first JSON object in the content.
    const start = content.indexOf("{");
    const end = content.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) return null;
    const jsonStr = content.slice(start, end + 1);
    const data = JSON.parse(jsonStr);
    if (!data || !Array.isArray(data.suggestions)) return null;
    return { suggestions: data.suggestions };
  } catch {
    return null;
  }
}

function buildMockSuggestions(prompt: string): FoodSuggestion[] {
  const base = prompt || "something tasty";
  return [
    {
      title: "Mediterranean Grain Bowl",
      description: `A fresh, hearty bowl inspired by your craving for ${base}.`,
      ingredients: ["quinoa", "cherry tomatoes", "cucumbers", "feta", "olives", "lemon tahini"],
    },
    {
      title: "Spicy Tofu Stir-Fry",
      description: `Quick wok-tossed tofu and veggies with a chili-garlic glaze for ${base}.`,
      ingredients: ["tofu", "broccoli", "bell pepper", "garlic", "chili paste", "soy sauce"],
    },
    {
      title: "Herbed Chicken Wrap",
      description: `Grilled chicken, crisp greens, and yogurt sauce that satisfies ${base}.`,
      ingredients: ["chicken", "mixed greens", "tomato", "yogurt", "herbs", "flatbread"],
    },
  ];
}



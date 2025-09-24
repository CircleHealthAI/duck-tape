import { NextRequest, NextResponse } from "next/server";

// Skeleton API route. Candidate should implement:
// - Validate input
// - Call an LLM provider (e.g., OpenAI) OR return structured mock data
// - Return 3 suggestions: { title, description, ingredients: string[] }
// - Handle errors and non-200s

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const prompt: string = (body?.prompt ?? "").toString().trim();

  if (!prompt) {
    return NextResponse.json(
      { error: "Missing 'prompt' in request body" },
      { status: 400 }
    );
  }

  // TODO: Implement the API integration.
  // Tips:
  // - Use process.env for keys (see .env.example)
  // - Consider returning mock data if no key is present
  // - Ensure your response matches the expected shape consumed by the UI

  return NextResponse.json(
    { error: "Not implemented. Please implement this route." },
    { status: 501 }
  );
}

<<<<<<< Current (Your changes)
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

=======
>>>>>>> Incoming (Background Agent changes)


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



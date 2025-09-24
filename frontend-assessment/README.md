This folder contains the starter app for the Frontend + LLM Technical Assessment.

## What you will build (high level)

Create a simple interface where a user types what they are craving. When submitted, call an LLM API to generate 3 food suggestions, each with a short description and a list of ingredients. Display the results in an accessible, responsive UI.

This starter provides:
- A POST API route at `src/app/api/suggestions/route.ts` that calls an OpenAI-compatible API (or returns mock data if no API key is set)
- A basic page `src/app/page.tsx` with a form and rendering logic
- An `.env.example` you can copy for configuration

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing by modifying `src/app/page.tsx` and the API at `src/app/api/suggestions/route.ts`. The app auto-updates as you edit files.

Environment variables:

1) Copy `.env.example` to `.env.local`.
2) Set `OPENAI_API_KEY` to a valid key (or leave empty to use mock data).
3) Optionally adjust `OPENAI_BASE_URL` and `OPENAI_MODEL`.

## Learn More

To learn more about Next.js, take a look at:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


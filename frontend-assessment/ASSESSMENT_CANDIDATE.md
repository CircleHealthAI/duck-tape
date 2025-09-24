## Frontend + LLM Technical Assessment (Candidate)

### Goal
Build a small Next.js app that takes a user's craving as input and returns 3 food suggestions from an LLM. Each suggestion should include:
- Title
- Short description
- Ingredients list

The focus is on frontend quality (React + UI/UX) and integrating with an LLM API. Persistence is not required.

### Starter
- Use the provided starter in this folder (`frontend-assessment`).
- There's an API route at `src/app/api/suggestions/route.ts` that calls the OpenAI Chat Completions API (hardcoded base URL) or returns mock data when no key is set.
- The main page `src/app/page.tsx` contains a basic form and render logic you can improve.

### Requirements
- **Form**: A text input for the craving, and a submit action.
- **Results**: Render 3 suggestions with title, description, and ingredients.
- **UX**: Loading state, error state, and empty state.
- **Accessibility**: Reasonable semantic HTML and keyboard navigation.
- **Code quality**: Clear component structure and clean React code.

### Setup
1) Install dependencies and run the app:

```bash
npm install
npm run dev
```

2) Configure environment variables (optional for live LLMs):
- Copy `.env.example` to `.env.local`
- Set `OPENAI_API_KEY`, and optionally change `OPENAI_MODEL`

If you don't provide a key, the app returns mock results so you can still complete the UI.

### What we will look for
- Thoughtful UI/UX (layout, responsiveness, readability)
- Componentization and state management choices
- Error handling and loading feedback
- Safe handling of API responses
- Developer experience (readability, maintainability)

### Nice-to-haves (choose 1–3 if you have time)
- Structured output parsing with Zod or similar
- Allow user to adjust parameters (temperature, cuisine filters, dietary restrictions)
- Display images (e.g., from a recipe API) with proper loading/fallback
- Unit tests for a component or the API route
- Debounce or command+Enter to submit, focus management

### Delivery
- Commit your changes into this folder.
- Include a short note in this file describing your choices and any tradeoffs.


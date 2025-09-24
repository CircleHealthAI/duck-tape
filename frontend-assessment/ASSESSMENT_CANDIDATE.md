## Frontend + LLM Technical Assessment (Candidate)

### Goal
Build a small Next.js app that takes a user's craving as input and returns 3 food suggestions from an LLM. Each suggestion should include title, short description, and an ingredients list. Focus on frontend quality and robust API handling. No persistence required.

### What’s provided
- Minimal page at `src/app/page.tsx` with a form and TODOs.
- API route stub at `src/app/api/suggestions/route.ts` that returns 501 Not Implemented.
- Project scaffolding and scripts.

### Your tasks
1) Implement the API in `src/app/api/suggestions/route.ts`.
   - Validate input; handle errors.
   - Call an LLM provider (e.g., OpenAI) OR return structured mock data when no key is present.
   - Return exactly 3 suggestions with `{ title, description, ingredients: string[] }`.
2) Build the UI in `src/app/page.tsx` (or components you create):
   - Show loading, error, empty, and results states with accessible semantics.
   - Render the 3 suggestions clearly and responsively.
3) Keep code readable and componentized; avoid mixing complex logic in JSX.

### Setup
```bash
npm install
npm run dev
```

Environment:
- Copy `.env.example` to `.env.local` and set any needed keys (e.g., `OPENAI_API_KEY`).
- You may add other env vars if your approach requires it.

### Expectations
- UI/UX quality, accessibility, and responsiveness.
- Clean React code and reasonable state management.
- Safe API integration and parsing with fallbacks.
- Clear naming, small functions, and minimal complexity.

### Optional enhancements (choose a few)
- Stronger validation/parsing (e.g., Zod).
- User-adjustable parameters (e.g., temperature, dietary filters).
- Optimized images or media with proper loading/fallbacks.
- Basic tests for a key component or the API.
- Keyboard shortcuts and focus management.

### Delivery
<<<<<<< Current (Your changes)
- Commit your changes into this folder.
- Include a short note in this file describing your choices and any tradeoffs.


=======
- Commit your changes in this folder.
- Add a short note below describing your approach and tradeoffs.

---

Notes from you:

- Implementation summary:
- Tradeoffs/assumptions:
- If you had more time:
>>>>>>> Incoming (Background Agent changes)

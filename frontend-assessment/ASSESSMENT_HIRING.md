## Frontend + LLM Technical Assessment (Hiring Guide)

### Purpose
Evaluate a candidate's ability to build a small frontend experience and integrate with an LLM API. Emphasize React quality, accessibility, and reasonable API handling. No persistence is required.

### Expected scope (2–3 hours)
- Input form for "craving" and submission
- API call to LLM (or fallback to mock)
- Render 3 suggestions with title, description, ingredients
- Basic loading/error/empty states

### What to look for
- **UI/UX quality**: Clarity, responsiveness, accessible semantics
- **Code structure**: Separation of concerns; components; readability
- **State management**: Simplicity, correctness, and edge cases
- **API integration**: Error handling, parsing, safe defaults
- **DX**: Clear naming, small functions, minimal complexity

### Suggested rubric (weights)
- UI/UX polish and accessibility (30%)
- React code quality (30%)
- API integration robustness (20%)
- Error/loading/empty states (10%)
- Optional enhancements (10%)

### Red flags
- Blocks on lacking backend despite provided mock behavior
- Mixing concerns (complex logic in JSX, no components)
- Fragile parsing without fallbacks; unhandled promise rejections
- Ignoring keyboard navigation or obvious accessibility issues

### Discussion prompts
- How did you structure components and why?
- How would you scale the API layer or add more models/providers?
- What tradeoffs did you make around parsing structured outputs?
- If you had another hour, what would you improve first and why?

### Notes
- The API route `src/app/api/suggestions/route.ts` uses an OpenAI-compatible Chat Completions request and falls back to mock results without a key. Candidates may replace or enhance it.
- Any reasonable provider (OpenAI, OpenRouter, Together, etc.) is acceptable.


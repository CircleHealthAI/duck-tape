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
  - Clear visual hierarchy; responsive layout
  - Keyboard/focus semantics; labels; a11y attributes where appropriate
- React code quality (30%)
  - Componentization; small, readable functions; state colocated
  - Avoids mixing heavy logic in JSX; handles edge cases
- API integration robustness (20%)
  - Input validation; safe parsing; fallbacks when provider fails or key missing
  - Reasonable error messages and status codes
- Error/loading/empty states (10%)
  - Distinct, accessible states; no jank; disabled submit on loading
- Optional enhancements (10%)
  - Thoughtful extras that improve UX/dev experience without overengineering

### Red flags
- Blocks on lacking backend despite provided skeleton and guidance
- Mixing concerns (complex logic in JSX, no components)
- Fragile parsing without fallbacks; unhandled promise rejections
- Ignoring keyboard navigation or obvious accessibility issues

### Discussion prompts
- How did you structure components and why?
- How would you scale the API layer or add more models/providers?
- What tradeoffs did you make around parsing structured outputs?
- If you had another hour, what would you improve first and why?

### Notes
<<<<<<< Current (Your changes)
- The API route `src/app/api/suggestions/route.ts` uses the OpenAI Chat Completions API and falls back to mock results without a key. Candidates may replace or enhance it.
 - Provider is fixed to OpenAI for this assessment.
=======
- In this skeleton, the API route `src/app/api/suggestions/route.ts` returns 501. Candidates must implement the API (LLM call or mock fallback) and the rendering.
- Provider suggestions: OpenAI-compatible APIs are acceptable. Evaluate approach and safety rather than provider choice.

### Evaluation checklist (quick pass)
- Form UX
  - Label + input + submit wired correctly; Enter key works; button disabled on invalid/empty
  - Loading indicator present; no duplicate submissions
- Results rendering
  - Exactly 3 suggestions rendered with title, description, ingredients
  - Mobile-friendly layout; readable typography
- Accessibility
  - Proper labels, roles, focus order; semantic elements (`button`, `label`, `ul`/`li`)
- API and parsing
  - Validates `prompt`; handles 4xx/5xx; clear errors surfaced to UI
  - Safe parsing (e.g., guards/Zod); mock fallback or graceful degradation
- Code quality
  - Components extracted; minimal prop drilling; clear naming
  - No unnecessary complexity; comments explain “why” if non-obvious
- Extras (if present)
  - Sensible, small scope; does not compromise core requirements

### Scoring guide (out of 10)
- 9–10: Production-quality polish; resilient API; strong a11y; clear code
- 7–8: Solid implementation; minor gaps in a11y or parsing
- 5–6: Meets basics but rough edges in UX or API robustness
- <5: Significant missing states, brittle parsing, or unclear code structure
>>>>>>> Incoming (Background Agent changes)



This folder contains the skeleton app for the Frontend + LLM Technical Assessment.

## Overview

You will implement:
- API logic in `src/app/api/suggestions/route.ts` (currently returns 501 Not Implemented).
- UI rendering in `src/app/page.tsx` (contains a minimal form and TODOs).

Goal: When a user enters a craving and submits, display 3 suggestions (title, description, ingredients). Emphasize accessibility, clean React, and robust API handling.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and set any needed keys, e.g.:

```
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4o-mini
```

If you do not set a key, you may choose to implement a mock pathway in the API.

## Candidate Instructions

See `ASSESSMENT_CANDIDATE.md` for full requirements and guidelines.


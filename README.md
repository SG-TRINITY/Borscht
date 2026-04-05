# Borscht

**Borscht** is a brutalist web app for feeding résumés, cover letters, or other “evidence” into an AI-powered **review and roast** pipeline—think harsh feedback with personality, not a polite template. The UI leans industrial: heavy type, crimson accents, and copy that treats judgment like a system event.

This repo is the **front end** for that product: upload flow, roast intensity, and navigation scaffolding. Backend, models, and real scoring are **not wired up yet**; the current build is a polished shell you can grow into a full stack.

## What you’re building toward

| Area | Direction |
|------|-----------|
| **Core loop** | User drops a PDF or image → app runs analysis (structure, tone, clichés, gaps) → returns a readable verdict with optional “roast” intensity. |
| **Roast levels** | From mild notes to full **ATOMIC** mode—the slider in the UI is the UX for that dial. |
| **Privacy stance** | Treat uploads as high-signal data: prefer **local or ephemeral processing** where possible; avoid silent cloud retention (aligned with the “sovereignty” messaging in the UI). |
| **Future surface** | Nav items (**The Pot**, **Cringe Index**, **The Kitchen**, **Settings**) are placeholders for a richer app: history, trends, batch tools, and preferences. |

## What works today

- Vite + React 19 + TypeScript SPA with the Borscht visual system (logo, hero, upload zone, roast module, action buttons, footer).
- Client-side file pick for PDF/JPEG with size/name feedback; **no server upload or AI call** yet.
- Roast slider and primary actions update **local state and status text** only (demo behavior).

## Tech stack

- **Vite** — fast dev server and production build.
- **React 19** + **TypeScript** — UI and type-safe state.

Vite is a good fit while the app is mostly client UI. If you later need SSR, API routes, or file-based routing, migrating to **Next.js** (or adding a separate API) is a natural step.

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Why TypeScript

TypeScript catches mistakes in UI state and event handlers early. The project is set up for that from the start as features grow.

## License

Private project unless you add a public license.

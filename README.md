# Borscht

**Borscht** is a brutalist web app for feeding résumés, cover letters, or other “evidence” into an AI-powered **review and roast** pipeline—harsh feedback with personality, not a polite template. The UI is industrial: heavy type, crimson accents, and copy that treats judgment like a system event.

This repo is the **front end** for that product: upload flow, roast intensity, side navigation, and a **Taste Test** analysis log. Backend, models, and real scoring are **not wired up yet**; the current build is a polished shell you can grow into a full stack.

## What is Borscht?

Borscht lets you:

- **Feed the Pot** — Pick a PDF or image (résumé, cover letter, or similar); the app shows file name and size and updates intake status text.
- **Dial the heat** — A roast slider maps to pepper-themed tiers (Bell Pepper → Pure Capsaicin) so “how mean should this be?” is a first-class control.
- **Run the pipeline (demo)** — Primary actions update local state and status strings; there is no server upload or model call yet.
- **Have a Taste Test** — A dedicated view streams a mock analysis log (timestamps, severity tags, cringe detection lines) with clear buffer and export-style affordances.
- **Move through the kitchen** — Side nav includes **The Pot**, **Taste Test**, **The Kitchen**, and **Settings** as surfaces you can extend (history, batch tools, preferences).

It is built with **Vite**, **React 19**, and **TypeScript**: a single-page app with component-scoped CSS (`App.tsx`, `TasteTest.tsx`, `SideNav.tsx`, etc.) so the layout stays consistent and easy to extend.

## Getting started

### Prerequisites

- **Node.js** (current LTS is a good default)
- **npm** (comes with Node)

### Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Production build and preview:

```bash
npm run build
npm run preview
```

## UI design

There is no linked Figma file in this repo. The visual system lives in `src/App.css`, `src/index.css`, and the component stylesheets (`TasteTest.css`, `SideNav.css`, `Header.css`, `Footer.css`).

## For developers

### Layout and entry

- **Root UI**: `src/main.tsx` mounts `App`.
- **Shell**: `App.tsx` composes `Header`, `SideNav`, main content (upload / roast module or `TasteTest` when **TASTE TEST** is active), and `Footer`.
- **Navigation**: `SideNav.tsx` exports `NavId`; new sections should add an id, label, and route content in `App.tsx` from `activeNav`.

### State today

Roast index, selected file, upload status, and active nav are React state only—swap in API calls or a backend when you are ready.

## Future implementation

Rough order: finish empty nav areas in the UI, then add real services and hook those screens up to data.

1. **The Kitchen & Settings (frontend)** — Flesh out both nav views in React: layout, copy, empty states, and controls you know you will need (e.g. history list shell, settings sections). Use mock or local-only data until the API exists.
2. **Backend** — API for uploads (validate, store or pass-through), optional auth, and persistence so runs are not trapped in the browser tab.
3. **AI** — Call a model (or worker) with the roast tier, return structured or streamed findings; replace the mock Taste Test log with live output and errors that map to the same UI.
4. **Wire Kitchen & Settings** — Connect **The Kitchen** to real history (past documents or runs, reopen a verdict, maybe re-run at a new heat level) and **Settings** to saved preferences (defaults, privacy or processing mode, bring-your-own-key or org config if you add it).
5. **Hardening** — Rate limits, quotas, local-first or ephemeral modes where it fits the product story, and multi-tenant libraries if you outgrow a single shared account.

---

We love Borscht. \
@ 2019 Cult. of the Soup*

*Cult. is abbreviation for Culture

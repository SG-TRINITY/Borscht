# Borscht

Brutalist UI for the Borscht AI resume reviewer / roaster.

Stack: **Vite**, **React 19**, **TypeScript**.

## Why TypeScript now

The first iteration was plain HTML/CSS/JS so you could open a single file with zero tooling. For a real app, TypeScript catches UI state and prop mistakes early; this repo is set up that way going forward.

## Why Vite (not Next.js) for now

Next.js shines when you need routing, SSR, or API routes in the same project. Right now this is **visual UI only**; Vite gives a fast dev server and a simple production build without extra framework surface area. We can move to Next later if you want file-based routes or server features.

## Commands

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Open the URL Vite prints (usually `http://localhost:5173`).

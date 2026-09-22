# Show Up Nation — Front End

A real, deployable React app converted from the Show Up Nation Cowork Design canvas prototype. Built with Vite + React + React Router. Every screen from the original canvas (Hero, Sign In, Create Account, Dashboard, Resources, Members, Client workflows, Profile, etc.) has a matching page here, sharing one `Layout` component for the sidebar nav and account-menu popover.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (Vite defaults to http://localhost:5173).

To produce a production build:

```bash
npm run build
npm run preview   # serves the built dist/ folder locally, to double-check before deploying
```

## Push this to your own GitHub repo

This project was built in an isolated cloud workspace with no GitHub connection, so pushing it is a manual step on your end:

1. Download and unzip the project you received in this chat.
2. In a terminal, inside the unzipped folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Show Up Nation front end"
   ```
3. Create a new empty repository on GitHub (github.com → New repository — don't initialize it with a README, so it stays empty).
4. Connect and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

`node_modules/` and `dist/` are already excluded via `.gitignore`, so the push stays small.

## Connect it to Vercel

1. Go to vercel.com and sign in (Vercel can sign in with your GitHub account directly).
2. Click "Add New… → Project", then pick the GitHub repo you just pushed. If it's not listed, use "Adjust GitHub App Permissions" to grant Vercel access to that repo.
3. Vercel auto-detects Vite projects — the defaults it proposes should already be correct:
   - Framework Preset: Vite
   - Build Command: `npm run build` (or `vite build`)
   - Output Directory: `dist`
4. Click "Deploy". Vercel builds it and gives you a live `*.vercel.app` URL. From then on, every push to `main` auto-deploys.

## What's a faithful port vs. what changed

- Visual design, copy, colors, spacing, and mock data were preserved as closely as possible from the original canvas artboards.
- The sidebar navigation and the "Alex Rivera" account-menu popover — previously duplicated across 14 separate prototype files — are now one shared `src/components/Layout.jsx`, used by every logged-in page.
- Internal navigation (`href="X.dc.html"` links in the original) now use React Router (`<Link to="...">`); the filename → route mapping lives in `src/lib/routes.js`.
- The original's `{{binding}}` / `<sc-if>` / `<sc-for>` template syntax (specific to Claude's Cowork Design canvas format) was converted to plain React `useState` hooks, `{condition && ...}`, and `.map()`.
- This is still a front-end prototype: there's no real backend, auth, or database. All data is mocked in each page's source file, same as it was on the canvas. Wiring it to Modloc Core or any other real backend is a separate, later step.

## Project structure

```
src/
  main.jsx              – app entry point
  App.jsx                – route table (one route per canvas artboard)
  components/Layout.jsx  – shared sidebar nav + account-menu popover
  lib/routes.js          – filename → route path map, shared accent color
  styles/global.css      – fonts, resets, shared hover-state classes
  pages/                 – one .jsx file per original .dc.html artboard
```

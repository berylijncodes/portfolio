# Beryl Ilenwabor — Portfolio

Personal portfolio site, built as a single-page app with a terminal-inspired
dark theme.

**Stack:** Next.js 13 (App Router) · TypeScript · Tailwind CSS · Framer Motion
· JetBrains Mono · [Resend](https://resend.com) for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Environment variables

The contact form sends mail through Resend. Create a `.env.local` file
(gitignored) with:

```
RESEND_API_KEY=your_resend_api_key
```

Without this set, the form will show an error on submit — everything else on
the site works without it. The same variable needs to be set in the Vercel
project's environment variables for the contact form to work in production.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint the project |

## Project structure

- `app/` — root layout and the single page
- `components/` — one component per page section, plus shared pieces like
  `section-heading.tsx` and `section-label.tsx`
- `lib/data.ts` — all site content (nav links, experience, projects, skills)
- `actions/send-email.ts` — the contact form's server action
- `context/` — active-section tracking for the nav highlight

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a
production deploy; every pull request gets its own preview deployment.

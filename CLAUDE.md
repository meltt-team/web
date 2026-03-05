# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test runner is configured.

## Architecture

**Next.js 16 App Router** with TypeScript (strict mode), React 19, and Tailwind CSS v4.

This is a marketing/landing page app for **Meltt** with a waitlist signup flow backed by Supabase.

### Routing

All pages live under `src/app/[locale]/` using **next-intl** for i18n. Supported locales: `en` (default), `de`, `es`. Locale config is in `src/i18n/routing.ts`. The `localePrefix: 'as-needed'` setting means English URLs have no prefix.

Pages: landing (`/`), success, privacy-policy, terms, safety.

API route: `src/app/api/waitlist/route.ts` — POST endpoint for email signup with Zod validation.

### Component Structure (Atomic Design)

```
src/components/
├── atoms/       # Button, Input, Card, Flare
├── molecules/   # Header, Footer, Title, JoinTheWaitList, EmailSignup, FeatureCard
├── organisms/   # JoinForm (complex form with state)
└── templates/   # Page sections: HowItWorks, Story, Deck, Facts, Conversation
```

Templates are composed on the main landing page (`src/app/[locale]/page.tsx`).

### Key Integrations

- **Supabase**: Database (PostgreSQL via PostgREST). Admin client in `src/lib/supabase/admin.ts` (server-only, uses service role key). Browser client in `src/lib/supabase/client.ts`. Generated types in `src/lib/database.types.ts`.
- **Plausible Analytics**: Events defined in `src/lib/plausible/events.ts`. Provider in locale layout.
- **Framer Motion**: Used for animations in template components.

## Conventions

- **Path alias**: `@/*` maps to `./src/*`
- **Theme system**: CSS variables defined in `src/app/globals.css`, programmatic access via `src/theme.ts`. Use Tailwind classes (e.g., `bg-primary`, `text-brand`) — see `THEME_GUIDE.md` for full reference.
- **Translations**: JSON files in `messages/{en,de,es}.json`. Server components use `getTranslations()`, client components use `useTranslations()`. See `I18N_GUIDE.md`.
- **Server vs Client components**: Default to server components. Only add `'use client'` when interactivity is needed.
- **Supabase clients**: Use admin client (`src/lib/supabase/admin.ts`) in API routes/server actions. Use browser client for client-side operations.
- **Environment variables**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (server-only).

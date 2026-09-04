# Chatbot Dashboard

Responsive, read-only Facebook Messenger and Instagram chatbot history, built with Next.js App Router, TypeScript, Tailwind CSS, and Supabase.

## Run locally

1. Run `npm install`.
2. Copy `.env.example` to `.env.local`. Leave its values empty to use built-in demo data.
3. Run `npm run dev`, then open [http://localhost:3000](http://localhost:3000).

## Connect Supabase

1. Create a project at [Supabase](https://supabase.com/dashboard).
2. Open **SQL Editor → New query**, paste `supabase/schema.sql`, and click **Run**. It creates the tables, constraints, indexes, read policies, timestamp trigger, and Realtime configuration.
3. Optionally run `supabase/seed.sql` in a new query for sample data.
4. Open **Project Settings → API** and copy the **Project URL** and **anon/public key**.
5. Copy `.env.example` to `.env.local`, then add those values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
6. Stop and restart `npm run dev` so Next.js loads the environment variables.

The public read policies support this unauthenticated MVP. Add authentication and user-scoped policies before storing sensitive production data.

## Architecture

- `app/`: App Router page, layout, loading UI, and styles.
- `components/`: responsive sidebar, filters, conversation list, and chat history.
- `lib/data.ts`: ordered queries and Realtime subscription helpers; uses typed mock data when credentials are absent.
- `types/database.ts`: record and client types.
- `supabase/`: schema and optional seed data.

The dashboard subscribes to new messages and inserted/updated conversations. New messages appear in the open chat immediately, and recently changed conversations move to the top. This phase intentionally excludes authentication, manual replies, n8n, and social platform API connections.

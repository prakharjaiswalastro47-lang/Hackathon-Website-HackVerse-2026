# HackVerse 2026 — Hackathon Landing Page

A premium, fully-featured landing page for a fictional hackathon event, built with React, TypeScript, Tailwind CSS, and Supabase.

![HackVerse](https://img.shields.io/badge/HackVerse-2026-blueviolet)

## Features

### Core Sections
- **Hero** — Animated headline, live countdown timer, event stats, and call-to-action buttons
- **About** — Event overview with feature cards and key details (date, location, format)
- **Schedule** — Interactive 3-day timeline with day tabs and color-coded event tags
- **Prizes** — Tiered prize cards (1st/2nd/3rd) plus category prizes with perks lists
- **Sponsors** — Sponsors grid organized by tier (Platinum / Gold / Silver / Bronze)
- **Registration** — Full team registration form with live validation, connected to Supabase
- **Footer** — Quick links, social icons, contact info, and scroll-to-top button

### Bonus Features
- **Dark / Light Mode** — System-aware theme toggle with localStorage persistence
- **Live Countdown Timer** — Counts down to the event start date in real time
- **Scroll Animations** — Intersection Observer-based reveal animations (fade, slide left/right)
- **Sticky Navbar** — Background blur on scroll, active-section highlighting, mobile menu
- **Form Validation** — Inline field validation with friendly error messages
- **Interactive Timeline** — Day-tabbed schedule with alternating left/right cards
- **Responsive Design** — Optimized for mobile, tablet, and desktop viewports
- **Custom Cursor** — Smooth trailing cursor with hover states on interactive elements (desktop)
- **Supabase Integration** — Registrations persist to a Postgres database with Row Level Security

## Tech Stack

| Layer       | Technology                     |
| ----------- | ------------------------------ |
| Framework   | React 18 + TypeScript          |
| Build Tool  | Vite 5                         |
| Styling     | Tailwind CSS 3                 |
| Icons       | lucide-react                   |
| Backend     | Supabase (Postgres + RLS)      |
| Fonts       | Inter + Space Grotesk          |

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/hackverse-2026.git
cd hackverse-2026

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Environment Variables

The project uses Supabase for the registration form. Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these in your Supabase project dashboard under **Settings → API**.

## Available Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the Vite dev server                |
| `npm run build`    | Type-check and build for production      |
| `npm run preview`  | Preview the production build locally     |
| `npm run lint`     | Run ESLint                               |
| `npm run typecheck`| Run the TypeScript type checker          |

## Project Structure

```
hackverse-2026/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with theme toggle + mobile menu
│   │   ├── Hero.tsx            # Hero section with countdown timer
│   │   ├── About.tsx           # Event overview + feature cards
│   │   ├── Schedule.tsx        # Interactive 3-day timeline
│   │   ├── Prizes.tsx          # Prize tiers + category prizes
│   │   ├── Sponsors.tsx        # Sponsors grid by tier
│   │   ├── Registration.tsx    # Validated form → Supabase
│   │   ├── Footer.tsx          # Footer + scroll-to-top
│   │   └── CustomCursor.tsx    # Custom trailing cursor
│   ├── hooks/
│   │   └── index.ts            # useCountdown, useIntersectionObserver, useDarkMode
│   ├── lib/
│   │   └── supabase.ts         # Supabase client singleton
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind + custom styles
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── vercel.json                 # Vercel deployment config
├── netlify.toml                # Netlify deployment config
└── package.json
```

## Deployment

This project includes configuration files for both **Vercel** and **Netlify**. Pick one.

### Option A: Deploy to Vercel

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import your repository.
4. Vercel auto-detects Vite. Set the environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click **Deploy**. Your site will be live in ~1 minute.

A `vercel.json` is included with SPA rewrite rules so client-side routing works.

### Option B: Deploy to Netlify

1. Push your code to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
3. Click **Add new site → Import an existing project** and pick your repo.
4. Netlify reads `netlify.toml` automatically. Build command: `npm run build`, publish dir: `dist`.
5. Under **Site settings → Environment variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Click **Deploy site**.

### Option C: Deploy via CLI

**Vercel CLI:**
```bash
npm i -g vercel
vercel
```

**Netlify CLI:**
```bash
npm i -g netlify-cli
netlify deploy --build
```

## Database Schema

The `registrations` table stores hackathon team registrations:

| Column              | Type      | Description                          |
| ------------------- | --------- | ------------------------------------ |
| `id`                | uuid      | Primary key                          |
| `team_name`         | text      | Team name                            |
| `team_leader_name`  | text      | Leader's full name                   |
| `email`             | text      | Contact email                        |
| `phone`             | text      | Contact phone                        |
| `team_size`         | integer   | Number of members (1–6)              |
| `institution`       | text      | School / company                     |
| `experience_level`  | text      | beginner / intermediate / advanced   |
| `project_idea`      | text      | Optional project description         |
| `created_at`        | timestamptz | Auto timestamp                     |

Row Level Security is enabled with policies allowing public insert (registration)
and public read (roster count).

## License

MIT — free to use for your own hackathon or event.

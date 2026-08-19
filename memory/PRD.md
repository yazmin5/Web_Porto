# PRD — Data Analyst / BI Portfolio

## Original problem statement
"i want to make web portfolio as data analyst/business intelligence"

## User choices (2026-08-19)
- Full showcase: Hero, About, Skills, Projects with case studies, Experience timeline, Contact form
- Clean & light minimal theme, corporate-friendly (award-level execution requested)
- Working contact form saving messages to database
- Animated dashboard-style charts
- User will provide own content later — placeholder content lives in ONE file: `/app/frontend/src/content.js`

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (masked reveals, parallax) + Lenis smooth scroll + react-fast-marquee + Recharts (all charts black/white + International Orange #FF4F00)
- Backend: FastAPI + MongoDB (Motor). POST /api/contact saves messages; GET /api/ health
- Design system: Playfair Display (headlines), Manrope (body), JetBrains Mono (labels/data) — see /app/design_guidelines.json

## Implemented (2026-08-19)
- Kinetic hero: masked line-by-line headline reveal, parallax image + floating forecast chart card, animated stat counters
- Slow editorial marquee (light + inverted dark variants)
- About: numbered manifesto chapters, grayscale→color portrait with offset frame
- Skills: bento grid with animated bar chart, radar chart, area chart, stat tiles, toolbox chips
- Projects: 4 editorial case studies (Tetris grid), hover image zoom, full case-study dialog with embedded chart + metrics
- Experience: 1px vertical timeline with accent node for current role
- Contact: working form → POST /api/contact → MongoDB, sonner toast, form reset
- Footer with back-to-top (Lenis)

## Verified
- curl POST /api/contact returns saved message with id + created_at
- E2E: case study dialog opens/closes; contact form submits, toast shown, form resets

## Backlog
- P0: Replace placeholder content with user's real details (content.js)
- P1: Downloadable resume (PDF) button; admin view of contact messages; email notification on new message (Resend)
- P2: Blog/writing section; project filtering; dark mode toggle; SEO meta + OG image

## Next tasks
1. Collect user's real name, projects, links → update content.js
2. Add resume download
3. Email notification for contact form

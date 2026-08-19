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

## Implemented (2026-08-19, iteration 2 — real content)
- Full rebrand to Yasmin Lukman (Jakarta) from her CV: summary, skills, Indosat + Beiersdorf experience, IPB education (M.Sc. 3.8/4, B.Sc.), thesis projects
- Resume download: CV PDF at /Yasmin_Lukman_CV.pdf, buttons in nav + hero + mobile menu
- Email alerts: Resend via Emergent managed proxy — contact form triggers notification to work.yasmin.lukman@gmail.com (guardrail-gated template, server-side only)
- Playground section (id="playground"): 3 tabs —
  1. Sales Excel dashboard rebuilt live: KPIs ($2.45M rev, 2,000 orders), region + channel filters, monthly area chart, category bars, channel/region donuts (real data pre-aggregated to src/data/dashboardData.json)
  2. Infrastructure Finance dashboard: KPIs ($42.6M value, $2.1M savings), year filter, target vs actual bars, dept savings, status donut
  3. Maven Bank Tableau Public embed (iframe) + external link
- Case studies rewritten around her real work (sales dashboard, infra finance, Maven Bank Tableau link, PM2.5 thesis)

## Verified (iteration 2)
- curl POST /api/contact → saved + email 202 Accepted (id logged) to owner Gmail
- Resume PDF serves 200; playground filters recompute KPIs (East → $468K; 2023 → 17 projects); Tableau iframe renders live; case study dialog + Maven external link OK

## Implemented (2026-08-19, iteration 3 — user-requested edits)
1. Accent color changed orange #FF4F00 → blue #1a73e8 everywhere (tailwind, CSS vars, all charts, email template)
2. Hero KPI counters replaced with trait words: Data Enthusiast / Problem Solver / Continuous Learner
3. Photo upload in About: camera button on portrait → POST /api/profile-photo (Emergent object storage, 8MB max, images only) → GET /api/profile-photo serves latest; her graduation photo is live (bundled fallback: /yasmin-portrait.webp)
4. Skills dark tile now reads "Proficient in data analysis & visualization"
5. Sales + Infra project cards link to her OneDrive workbooks ("Download workbook", also inside dialogs)
6. New Research section (05): thesis title, description, link to JIKA journal article (journal.ipb.ac.id/jika/article/view/66577/32366); PM2.5 project card links there too
7. Full bilingual EN/ID: i18n.js (LanguageProvider + ui dict + pick), toggle in nav (persisted in localStorage), all content fields {en,id} in content.js, headings translated incl. hero

## Verified (iteration 3)
- Accent rgb(26,115,232) live; traits render; photo upload POST + GET 200 via external URL (object storage); OneDrive links present; research card links to JIKA; ID toggle switches whole site (hero "Mengubah data mentah menjadi keputusan", nav TENTANG/KARYA/KONTAK), EN switch-back works

## Backlog
- P0: —
- P1: SEO meta + OG image; admin view of contact messages
- P2: Blog/writing section; dark mode toggle; certifications section

## Next tasks
1. SEO/meta + share image
2. Contact messages admin view

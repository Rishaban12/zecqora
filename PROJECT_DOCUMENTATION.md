# Zecqora — Full Project Documentation

A React + Vite + Tailwind CSS v4 marketing website for **Zecqora**, a studio that engineers custom software and AI solutions for growing businesses, builds real projects with students, and runs hands-on tech/AI learning and resume/career services.

---

## 1. Tech stack

- **React** + **Vite** (client-rendered SPA)
- **Tailwind CSS v4** (`@theme` token system, no separate `tailwind.config` color scale needed for custom brand colors)
- **react-router-dom** for routing
- **framer-motion** for scroll reveals, page-hero parallax, margin/radius "zoom" transitions, and floating-card animations
- **GSAP + ScrollTrigger** for the scroll-scrubbed SVG line-drawing sequence on the Project Learning page
- **lucide-react** for icons
- A small `components/ui/` subfolder with shadcn-style primitives (avatar, badge, button, animated-beam, animated-testimonials, etc.)

---

## 2. Design system

### Color tokens (`src/index.css` `@theme` block)

| Token | Value | Use |
|---|---|---|
| `--color-bg` / `--color-surface` | `#f7f5ed` | Page background (warm off-white/cream) |
| `--color-card` | `rgba(16,42,36,0.04)` | Glassy card tint over the light background |
| `--color-ink` | `#102a24` | Primary text color and the "dark section" background (deep green-black) |
| `--color-ink-soft` | `#3f4354` | Secondary/body text |
| `--color-ink-faint` | `#6d7285` | Tertiary/muted text |
| `--color-line` / `--color-line-strong` | `rgba(16,42,36,0.1)` / `0.18` | Borders |
| `--color-yellow` | `#fed24f` | **The** brand accent — CTAs, highlights, badges, scribble marker |
| `--color-blue` | `#5b8cff` | Rare secondary accent |
| `--color-orange` | `#ff8a5c` | Rare secondary accent ("HOT" badges) |
| `--color-indigo` | `#8b6bff` | Rare secondary accent |
| `--color-green` | `#0b1715` | Rare secondary accent |
| `--color-pastel-violet/peach/cyan/aqua/pink` | — | Used for gradient backdrops (`GalaxyBackdrop`) and blog/decorative tile tints |

The palette reads as: **cream light background + deep ink-green as the "dark" color/primary text + lemon yellow as the single accent**, with a small family of pastel colors reserved for decorative gradients and card tints (also reused directly as Tailwind defaults like `bg-yellow-100`, `bg-cyan-100`, `bg-emerald-100`, `bg-violet-100`, `bg-pink-100` for light stat/info cards).

Site is **light-mode only** (`color-scheme: light`, no dark-mode toggle) — "dark" in this codebase always means a specific ink-green *section* (marked `data-nav-theme="dark"`), not a site-wide theme.

### Fonts

- `--font-display`: "Inter Tight" (headings, buttons, badges)
- `--font-sans`: "Inter" (body text)
- `--font-mono`: "JetBrains Mono" (terminal mock, tags)

### Key global classes

- `.hero-title` — the big page-title treatment (Inter, weight 400, `line-height: 1.08`, `letter-spacing: -1.5px`) used on every page's H1.
- `.font-display` — weight 400, slightly tight letter-spacing (`-0.015em`).
- `.btn-primary` — solid ink pill button, white uppercase text, 11px/600/0.14em tracking.
- `.btn-secondary` — outlined ink button, inverts on hover.
- `.btn-secondary-on-dark` — same but for use on dark sections.
- `.card` — glassy card (translucent ink tint, blur(20px), soft shadow, yellow-tinted glow + border darken on hover) — the standard card style across pricing, testimonials, feature grids.
- `.card-flush` — flat, no-blur variant of `.card`.
- `.page-hero-accent` — colors a highlighted word yellow.
- Custom scrollbar: 16px wide, black track, gray thumb.
- `::selection` — yellow highlight.

### Navbar theme switching

Sections can opt into a dark treatment by adding `data-nav-theme="dark"`. The `Navbar` polls which such section currently sits under the nav band and flips its own styling (text/background/border) between light and dark accordingly — this is how the same fixed navbar reads correctly over both cream and ink-green sections as the page scrolls.

---

## 3. Routes (`src/App.tsx`)

App shell: `Glow` (flat background layer) → `ScrollToTop` (scrolls to hash or top on route change) → `Navbar` (fixed, theme-switching) → `<Routes>` → `Footer` (always dark, always rendered).

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/careers` | Careers |
| `/services` | Services |
| `/services/project-learning` | ProjectLearning (explicit route, takes priority over the slug catch-all) |
| `/services/:slug` | ServiceDetail |
| `/blog` | Blog |
| `/blog/:slug` | BlogPost |
| `/learning` | Learning |
| `/manifesto` | Manifesto |
| `/resume` | Resume |
| `/contact` | Contact |
| `/wall-of-voices` | WallOfVoices |
| `*` | NotFound |

---

## 4. Pages

### Home (`/`)

1. **Hero** — full-viewport, left-aligned; fades/moves out on scroll. Headline highlights "engineer it" with the hand-drawn `ScribbleHighlight` marker. Two CTAs: "Start Your Project" (primary) / "Connect With Us" (secondary).
2. **Quick stats strip** — 5 stat/label pairs, light background, staggered fade-in.
3. **Dark promo band** ("AI Invasion & Adaptiveness") — ink background; scroll-linked "zoom in" effect (margins shrink from `12vw`→`0`, corners square off from `32px`→`0` as you scroll into it). Contains a fake terminal with a typing animation.
4. **Services showcase** — dark, full-screen; sticky left nav lists the 4 services, `IntersectionObserver` tracks which full-height panel is active and autoplays/pauses that panel's demo video.
5. **Process section** ("How it works") — dark; mirrors the same margin/radius trick in reverse as you *scroll past* it (a "zoom out" bookend). Shows the 4 process steps (Discover → Design → Build → Launch & Grow) as icon nodes around a central hub, connected by animated beam paths.
6. **Wall of Voices teaser** — light section, masonry layout of the first 4 testimonials, links out to `/wall-of-voices`.
7. **CTASection** — closing dark panel with an animated galaxy/nebula backdrop.

### About (`/about`)

- Hero with `FloatingStatCards` decoration — 5 pastel floating cards ("100% built around you", "Faster", "Scalable", "Any Business", "AI + Software") that continuously pulse between blurred and sharp on independent loops.
- Big statement paragraph with a `ScribbleHighlight` accent on "Advanced technology for every business."
- 3 founder cards (placeholder avatars + name/role).
- CTASection.

### Services (`/services`)

- Hero, no special decoration.
- **Business websites** (`#business`): feature checklist, screenshot, 3-tier pricing (Starter / Growth / Scale) — Growth is visually raised/highlighted with a giant faint ghost number behind it.
- **Student projects** (`#students`): mirrored layout, 4 price points, domain tag cloud, "what's included" checklist.
- CTASection with custom copy.

### Service detail (`/services/:slug`)

- Looks up the slug against the Services mega-menu data; renders a hero with the category as the eyebrow and the item as the title.
- **Special case**: any service under "AI & Automation" gets the tagline "Technologies keep moving. We move with it." as the big scribble-highlighted headline, with the actual service name shown as a smaller line underneath — other categories just highlight the service name directly.
- Falls back to a "Service not found" message + link back to `/services` for unknown slugs.
- CTASection.

### Careers (`/careers`)

- Hero: "Grow with Zecqora." (scribble-highlighted) + a "Careers" button in the hero's action slot.
- CTASection ("Don't see your role listed?").
- No literal job board — it's a lead-capture funnel toward Contact/About.

### Contact (`/contact`)

- Custom two-column layout (not built on the shared `PageHero`).
- Left: headline, "what to expect on the call" checklist, "studio across Bengaluru, Chennai, Thanjavur & Mannargudi" line.
- Right: full contact form (name, email, phone, interest dropdown, message). Submits to Web3Forms if an access key env var is set, otherwise falls back to a `mailto:zecqora@gmail.com` link. Has idle/sending/sent/error states with icon feedback.

### Blog (`/blog`)

- Category filter pills + live search (client-side).
- No real photography — each post gets a deterministic colored tile (hashed from its slug) with the title rendered in bold over the color, cycling through the site's pastel/ink palette.
- Page 1 shows the first two posts "featured" (large) plus the rest in a 4-column grid; later pages are a plain grid.
- Sticky pill-shaped pagination bar at the bottom when there's more than one page.

### Blog post (`/blog/:slug`)

- Category badge, title, byline (author · date · read time), body paragraphs, "Back to Blog" link, CTASection. Falls back to "Post not found."

### Learning (`/learning`)

- Hero.
- **Sticky-stacked cards** for the 4 learning tracks — each card scroll-pins and scales down slightly as the next one stacks on top of it.
- "Formats" 3-card grid (Live Cohorts / 1:1 Mentorship / College Workshops).
- Curriculum highlight banner: flagship "AI Invasion & Adaptiveness" curriculum grid + CTA on one side, an animated terminal mock on the other.
- CTASection (booking-a-workshop copy).

### Manifesto (`/manifesto`)

- Long-form editorial article — no hero component, just a plain `<article>` with the `.hero-title` H1 "Technology keeps moving. We move with it."
- Narrative: Before AI → Then came the cloud → Now comes intelligent engineering → This is where Zecqora comes in → Our mission.
- "We believe in" — numbered list (01–05) of core beliefs.
- "From complexity to capability" — 3-column comparison (Before / Today / Zecqora), each column a vertical step-flow with down-arrows between steps and its own light pastel tint.
- Closing: Our belief / Our purpose / Our direction.
- Entirely light — the only major page with **no** CTASection at the end.

### Project Learning (`/services/project-learning`)

The most visually elaborate page in the site:

1. **Hero** — dark theme, full-bleed background photo (a lakeside park-bench scene) with the plain title "Project Learning" (no scribble box).
2. **"Two ways to learn by building"** — two gently floating cards ("Custom Projects" in violet, "Pre-Built Projects" in blue). Clicking **either** card triggers a brief full-screen dark overlay with the white Zecqora "Z" mark, then smooth-scrolls down to the line-draw section below.
3. **Z line-draw section** — a tall (`220vh`) dark (`#102A24`) section containing a single hand-drawn-style SVG path shaped like a stretched "Z" (rounded corners, not sharp angles). As the user scrolls through it normally (no scroll-jacking/pin), GSAP + ScrollTrigger scrubs the path's `stroke-dashoffset` so the line draws itself in sync with scroll position — scrolling up retracts it. Five points along the path get a small dot "stamped" in place (never traveling) once the line reaches them, each revealing an adjacent light pastel info box (yellow/pink/cyan/emerald/violet) with content mirrored from the lifecycle section below it: **User Needs**, **User Answers**, **Communication**, **Document Generator**, **Dashboards**.
4. **Lifecycle section** ("How it works") — dark, with the same margin/radius "zoom" scroll effect used on Home, plus a giant Zecqora "Z" watermark that scales up and fades in as you scroll through it. Contains Step 1/2/3 cards (Tell us what you need / We confirm the details / We scope and build it) with the same field lists, questions, tracking features, and build stages referenced by the line-draw section's info boxes.
5. Final "Ready to start? Pick your path." CTA row + CTASection.

### Resume (`/resume`)

- Hero.
- 4-step process cards (Career Intake Call → Draft & ATS Pass → LinkedIn Alignment → Mock Interview).
- Two-column before/after: an animated live-rewrite demo (cycles between a "weak" resume state and a rewritten/ATS-ready state, with a scan-line sweep, an animated ATS-score counter, and animated skill bars) next to static before/after bullet lists.
- Pricing: 3 packages (Resume Refresh / Career Studio / Full Reposition), middle one highlighted.
- CTASection.

### Wall of Voices (`/wall-of-voices`)

- Entire page is dark (ink-green, full height).
- Header: "Wall of Voices" label + "Hear what our clients have to say." with a small rotated yellow heart icon.
- Masonry grid (CSS columns) of **every** testimonial (not just a teaser slice) in glassy translucent cards.

### 404 (`*`)

- Centered "404" in the yellow gradient-text style, "This page didn't ship yet" heading, and a button back to Home.

---

## 5. Reusable components (`src/components/`)

| Component | Purpose |
|---|---|
| `Navbar` | Fixed nav that shrinks into a floating pill on scroll and switches light/dark styling based on the section under it. Renders the Services mega-menu, Why-us/Resources dropdowns, and a mobile hamburger menu. |
| `Footer` | Always-dark, full-height footer: logo, contact icons, nav link columns, copyright bar, and a giant low-opacity "zecqora" wordmark stretched across the bottom. |
| `NavDropdown` | Generic hover/click dropdown for "Why us" / "Resources". |
| `ServicesMegaMenu` | Two-column mega-menu for "Services" — category list on the left, item list on the right, with optional "HOT" badges. |
| `PageHero` | Shared full-viewport hero: eyebrow, `.hero-title` heading, description, optional action buttons and background decoration; `navTheme="dark"` flips it to light text on a dark background. |
| `CTASection` | The recurring closing CTA block with an animated `GalaxyBackdrop`, used on almost every page. |
| `ScribbleHighlight` | Wraps text in a hand-drawn yellow marker-highlight SVG shape. |
| `GalaxyBackdrop` | Animated starfield/nebula canvas background (twinkling stars, occasional meteors, blurred color blobs), pauses when off-screen. |
| `FloatingStatCards` | 5 pastel floating cards with a continuous blur/opacity pulse loop; used behind the About page hero. |
| `ZLineDrawSection` | The GSAP-ScrollTrigger scroll-scrubbed SVG "Z" line drawing with 5 stamped dots and info boxes; used only on Project Learning. |
| `TreeGrowth` | Renders the 4 process steps as nodes around a central hub, connected by animated beam paths. |
| `StackedCards` | Scroll-driven sticky "card stack" effect for the Learning page's tracks. |
| `Terminal` | Fake terminal window with sequenced typing animation. |
| `ResumeStudioDemo` | Animated before/after resume-rewrite mock for the Resume page. |
| `Reveal` | Core scroll-reveal wrapper (fade + x/y slide-in on viewport entry) used throughout nearly every section on every page. |
| `SectionHeading` | Reusable eyebrow + heading + description block, light/dark variants. |
| `Marquee` | Infinite horizontal auto-scrolling ticker with fade-out edges. |
| `Counter` | Animated count-up number, triggers once in view. |
| `Magnetic` | Makes a child element subtly follow the cursor on hover. |
| `BrandIcons` | Hand-drawn stroke SVG icon set (GitHub/LinkedIn/Instagram). |
| `AnimatedGridPattern` | Generic animated dot/grid decorative background. |
| `RocketIllustration` | Decorative hand-drawn rocket illustration. |
| `ServiceCard` | Reusable service card primitive (icon, checklist, hover glow). |
| `ScrollToTop` | Router utility — scrolls to a hash target or the top on route change. |
| `Glow` | Flat fixed background color layer at the app root. |

---

## 6. Data (`src/lib/data.ts`)

- **`NAV_LINKS` / `WHY_US_MENU` / `RESOURCES_MENU`** — nav structure feeding the Navbar's top-level links and dropdown menus.
- **`SERVICES_MENU`** — the mega-menu's 4 categories (Rural Tech Empowerment, Software Solutions, AI & Automation, Consulting Services) and their items; also exports `slugifyService()` for generating `/services/:slug` URLs.
- **`SERVICES`** — 4 richer service entries (Websites, Student Projects, Learning Sessions, Career Studio) with headline, description, feature points, and a demo video path, feeding Home's services showcase.
- **`STATS`** — 5 label/value pairs for Home's quick-highlights strip.
- **`PROCESS`** — the 4 process steps (Discover, Design, Build, Launch & Grow) feeding `TreeGrowth`.
- **`TESTIMONIALS`** — 8 client quotes (name, role, company, quote, rating, avatar), sliced to 4 for Home's teaser and shown in full on Wall of Voices.
- **`LEARNING_TRACKS`** — 4 learning tracks feeding `StackedCards` on the Learning page.
- **`FORMATS`** — the 3 learning-format cards.
- **`BLOG_POSTS`** — 4 seeded articles powering the Blog listing/search and detail pages.

---

## 7. Business content

### Who we are

Zecqora engineers customized software and AI solutions that help businesses grow with secure, scalable, and intelligent technology. Two audiences, one standard — work people can actually launch, submit, and defend:

- **Businesses** that are growing and need a web presence, a product, or AI in their workflow.
- **Students** building mini, major, and final-year projects they genuinely understand.
- **Career switchers / job seekers** who need a resume, LinkedIn profile, and interview readiness matched to the skills they're adapting into.

Studio presence across **Bengaluru, Chennai, Thanjavur & Mannargudi**.

### Manifesto — "Technology keeps moving. We move with it."

- **Before AI**: building software required significant time and specialized teams — technology felt expensive and inaccessible for smaller, non-technical businesses.
- **Then came the cloud**: open-source tools and modern frameworks made software faster to build and more accessible.
- **Now comes intelligent engineering**: AI assists design, development, testing, and maintenance, freeing engineers to focus on the actual business problem.
- **This is where Zecqora comes in**: advanced intelligence + modern engineering + AI-powered development, turning business requirements into technology with less complexity and more efficiency.

> A business should not need to become a technology company just to benefit from technology.

- **Mission**: make modern software and AI accessible to every business — bringing advanced technology closer to businesses that have traditionally been left behind by the pace of technological change.
- **Belief**: you shouldn't need to understand the complexity of technology to benefit from it.
- **Purpose**: bring advanced technology to every business, wherever they are.
- **Direction**: from rural businesses to modern enterprises, help turn technology from a barrier into an opportunity.

**We believe in**: 01 Technology Without Boundaries · 02 Build Around the Need · 03 AI as a Capability · 04 Engineering with Purpose · 05 Continuous Adaptation.

### What we offer

1. **Websites for growing businesses** — custom design, mobile-first & SEO-ready, e-commerce/booking, analytics, self-edit CMS, 30-day post-launch support.
   - Starter ₹14,999 · Growth ₹34,999 (most popular) · Scale — custom.
2. **Student tech projects** — mini/major/final-year projects across Web, AI/ML, Mobile, IoT, Data Science, Cybersecurity, Blockchain, Cloud & DevOps, built alongside the student with mentorship and viva prep.
   - Mini from ₹2,999 · Major from ₹7,999 · Final Year from ₹14,999 · Research — custom.
3. **AI & Automation** — Generative AI Systems, AI Agents & Autonomous Systems, AI Automation & Intelligent Workflows, RAG & Knowledge Intelligence, Multimodal & Conversational AI, Computer Vision & Predictive Intelligence, Custom AI Solutions.
4. **Software Solutions** — Product & MVP Development, Web/Mobile Application Development, SaaS Product Development, Enterprise Software, Legacy System Modernization.
5. **Consulting Services** — AI Adoption Consulting, Technology Consulting, Software Consulting.
6. **Rural Tech Empowerment ("Katral" / Project Learning)** — bringing technology and learning access to rural and underserved communities.
7. **Learning Hub** — live, hands-on sessions on coding, AI adoption, and adaptiveness. Tracks: Coding Foundations, AI Invasion & Adaptiveness, Modern Web & Cloud, Campus & Team Workshops. Formats: live cohorts, 1:1 mentorship, campus workshops.
8. **Resume & Career Studio** — ATS-optimized resumes built around the skills a candidate is adapting into. Process: intake call → draft & ATS pass → LinkedIn alignment → mock interview.
   - Resume Refresh ₹1,499 · Career Studio ₹3,999 (most popular) · Full Reposition ₹7,499.

### How we work

Discover → Design → Build → Launch & Grow (weekly check-ins, modern maintainable stacks, post-launch support window).

### Track record

120+ projects delivered · 400+ students mentored · 80+ learning sessions run · 98% client satisfaction.

### Contact

- Email: zecqora@gmail.com
- Phone: +91 98765 43210
- Hours: Mon–Sat, 10am–7pm IST
- Presence: Bengaluru, Chennai, Thanjavur & Mannargudi

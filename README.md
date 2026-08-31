# Yatin Sanjeev Kanekar — Executive Portfolio

Official production repository for the personal and executive portfolio website of **Yatin Sanjeev Kanekar**, CEO & Founder of Infipre IT Services OPC Pvt Ltd based in Sanquelim, Goa, India.

- **Live Demo**: [`https://omkarg74.github.io/infi_portfolio/`](https://omkarg74.github.io/infi_portfolio/)

---

## Overview

This website is an executive-level personal portfolio and professional platform for **Yatin Sanjeev Kanekar**, covering:

- **Executive Leadership & Vision**: Business strategy, organizational scaling, team mentorship.
- **Entrepreneurship & Ventures**: 8 core business initiatives and digital product platforms.
- **Software Engineering & Technology**: Enterprise architecture, QA automation, agentic AI, resilient cloud systems.
- **Products & Platforms**: Purpose-built SaaS solutions for logistics, HR, sales automation, and learning management.
- **Speaking & Industry Engagement**: Conference keynotes, panel discussions, university workshops, and startup mentorship.
- **Thought Leadership & Research Essays**: In-depth essays on software design, AI, fatherhood, Indian classical philosophy, and networking.
- **Social Impact & Education**: Rural tech talent empowerment, skill development, and digital inclusion.
- **Strategic Engagement**: Direct contact and collaboration channels.

---

## Technology Stack

- **Markup**: Semantic HTML5 with accessibility attributes (`aria-*`, `role`).
- **Styling & Design System**: Custom CSS3 (`css/style.css`, `css/variables.css`, `assets/css/`) + Tailwind CSS CDN with inline custom theme configuration (`id="tailwind-config"`).
- **Typography & Icons**: Google Fonts (**Inter**, **Plus Jakarta Sans**, **JetBrains Mono**, **Material Symbols Outlined**).
- **Logic & Interactivity**: Lightweight Vanilla JavaScript (13.9 KB static footprint across `assets/js/mobile-nav.js`, `js/main.js`, `js/form.js`, `js/gallery.js`, `js/filters.js`, `js/carousel.js`).
- **Structured Data & SEO**: JSON-LD microdata (`Person`, `Organization`, `WebSite`, `BreadcrumbList`, `Article`), Open Graph metadata, Twitter Cards, Canonical HTTPS URLs, Favicon.
- **Deployment Platform**: Static Web Application hosted on **GitHub Pages**. (Zero dynamic build framework dependencies like React, Vite, Next.js, or Vue).
- **Deployment Note**: `robots.txt` and `sitemap.xml` have been intentionally removed for this GitHub Pages static demo deployment.

---

## Design System

The visual design system is derived directly from **`index.html`** (the primary Visual Source of Truth for the entire website):

- **Obsidian Dark Hero & Banner Sections**: Primary dark background `#0c1014` with `#161c24` gradients.
- **Warm Canvas Content Sections**: Warm neutral canvas background `#fcfaf7` with `#f8f6f2` card surfaces.
- **Executive Muted Gold Accents**: `#B0925A` used for section eyebrows, active navigation indicators, borders, metadata, and primary CTA accents.
- **Typography Hierarchy**:
  - Headings & Display: **Plus Jakarta Sans**
  - Body Copy: **Inter**
  - Monospace & Metadata: **JetBrains Mono**
- **Border & Card System**: Hairline borders (`#e8e4dc`) with subtle radius and restrained shadow.
- **Global Header & Footer**: Sticky executive glassmorphism navbar (64px) and dark obsidian 4-column footer across all pages.

---

## Navigation Architecture

The header enforces a **maximum 5-primary-tab navbar** with compact **subtext-free dropdown headings** (dropdown items intentionally contain ONLY title headings without secondary subtext):

```
[YK LOGO]   HOME   ABOUT YATIN ▾   VENTURES ▾   TECHNOLOGY ▾   INSIGHTS ▾   [ ● WORK WITH ME → ]
```

### Dropdown Hierarchy & Link Destinations
- **ABOUT YATIN ▾**:
  - **About Yatin** (`about.html`)
  - **My Journey** (`journey.html`)
  - **Leadership & Philosophy** (`leadership-philosophy.html`)
  - **Awards, Recognition & Credentials** (`awards.html`)
- **VENTURES ▾**:
  - **Entrepreneurship & Ventures** (`ventures.html`)
  - **Products & Solutions** (`products-solutions.html`)
- **TECHNOLOGY ▾**:
  - **Technology & Innovation** (`technology.html`)
  - **Speaking & Industry Engagement** (`speaking.html`)
- **INSIGHTS ▾**:
  - **Thought Leadership** (`thought-leadership.html`)
  - **Articles & Insights** (`insights.html`)
  - **Social Impact & Education** (`social-impact.html`)
  - **Media & Gallery** (`media-gallery.html`)
- **Primary Action CTA**: **Work With Me** (`work-with-me.html`)

---

## Page & File Classification

The repository contains **29 HTML files in total**, categorized by architectural role:

### 1. Core Public Portfolio Pages (15)
Main public navigation pages containing core executive portfolio content:
1. **`index.html`** — Executive Profile & Homepage (`/`)
2. **`about.html`** — About Yatin (Biography & Executive Values)
3. **`journey.html`** — My Journey (5-Phase Career Evolution & Milestones)
4. **`ventures.html`** — Entrepreneurship & Ventures (8 Core Business Ventures)
5. **`products-solutions.html`** — Products & Solutions (PowerFleet360, InfiSales360, MAYA HR, GoodyLMS)
6. **`technology.html`** — Technology & Innovation Architecture
7. **`leadership-philosophy.html`** — Leadership & Philosophy (*Lead with Clarity, Build with Responsibility*)
8. **`thought-leadership.html`** — Thought Leadership (*Ideas That Shape How I Build & Lead*)
9. **`insights.html`** — Articles & Insights Directory
10. **`speaking.html`** — Speaking & Industry Engagement
11. **`awards.html`** — Awards, Recognition & Credentials
12. **`social-impact.html`** — Social Impact & Education
13. **`media-gallery.html`** — Media & Gallery Archive
14. **`work-with-me.html`** — Work With Me (Collaboration & Partnerships)
15. **`contact.html`** — Direct Contact Channels

### 2. Official Original Article Detail Pages (7)
Dedicated article detail pages for the 7 official original articles migrated from the authoritative source:
16. **`article-fatherhood-software-design.html`** — *Why Being a Father Changed the Way I Design Software* (27 April 2026)
17. **`article-we-built-better-lives.html`** — *We Built Better Lives… But Are We Living Them?* (27 April 2026)
18. **`article-warehouse-worker-system-design.html`** — *The Day a Warehouse Worker Changed Our Entire System Design* (25 March 2026)
19. **`article-age-of-ai-and-cloud.html`** — *In the Age of AI and Cloud, Discipline—not Technology—Decides Who Wins* (01 January 2026)
20. **`article-unfinished-yet-unbroken.html`** — *Unfinished Yet Unbroken* (31 December 2025)
21. **`article-agentic-ai-revolution.html`** — *Not Just Smart — Autonomous: The Agentic AI Revolution in the Enterprise World* (20 December 2024)
22. **`article-from-panini-to-ai.html`** — *From Panini to AI: How India’s Ancient Wisdom Shapes Modern Technology* (13 November 2024)

### 3. Supporting & System Pages (2)
Legal and standard web error handling pages:
23. **`privacy-terms.html`** — Privacy Policy & Terms of Service
24. **`404.html`** — Custom Executive 404 Error Page (retained for GitHub Pages error routing)

### 4. Route Aliases / Redirects (4)
Client-side meta refresh redirect files provided for URL backwards compatibility:
25. **`leadership.html`** — Redirect Alias for `leadership-philosophy.html`
26. **`products.html`** — Redirect Alias for `products-solutions.html`
27. **`media.html`** — Redirect Alias for `media-gallery.html`
28. **`venture-details.html`** — Redirect Alias for `products-solutions.html`

### 5. Reusable Components (1)
Component snippet templates (not public pages):
29. **`components/footer.html`** — Reusable HTML Footer Component Template

---

## Content Breakdown

- **Executive Positioning**: Entrepreneur, Technology Leader, Innovator, Mentor, Thought Leader.
- **Core Metrics**: `10+ Years Leadership`, `75+ Successful Projects`, `Multiple Ventures`, `Global Client Presence`.
- **8 Core Ventures**:
  1. **Infipre IT Services**: Custom software development, digital transformation, testing, IT solutions.
  2. **Satpurush Enterprises**: Industrial distribution and business service initiatives.
  3. **MAYA HR Solutions**: HR solutions, recruitment services, talent enablement.
  4. **Mangalkaarya.com**: Matrimonial and community matchmaking platform.
  5. **InfiSales360**: Sales automation and CRM platform for lead tracking and sales growth.
  6. **Poocrafts**: Handcrafted products blending tradition with creative innovation.
  7. **PowerFleet360**: Fleet logistics ERP, equipment tracking, maintenance scheduling.
  8. **GoodyLMS**: Learning management system supporting training workflows.
- **Technology Domains**: Custom ERP Architecture, ISTQB QA & Test Automation, Agentic AI & RAG Loops, Resilient Cloud Systems.
- **Speaking & Impact Statistics**: `25+ Talks Delivered`, `100+ Panels & Conferences`, `30+ Institutions Engaged`, `50+ Startups Mentored`, `6+ Countries Reached`, `5000+ Impacted`.
- **Verified Contact Details**:
  - **Email**: `connect@yatinsanjeevkanekar.in`
  - **Phone / WhatsApp**: `+91 98907 07000`
  - **Location**: Sanquelim, Goa, India
  - **LinkedIn**: `linkedin.com/in/yatinskanekar`

---

## SEO & Metadata

- **Canonical Target Domain**: `https://yatinsanjeevkanekar.in/`
- **GitHub Pages Live Demo**: `https://omkarg74.github.io/infi_portfolio/`
- **Page Metadata**: Unique `<title>` and `<meta name="description">` on every page.
- **Social Cards**: Open Graph (`og:*`) and Twitter Cards (`twitter:*`) metadata.
- **JSON-LD Structured Data**: Microdata for `Person`, `Organization`, `WebSite`, `BreadcrumbList`, and `Article`.

---

## Accessibility

- Semantic HTML5 structural elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`).
- Single `<h1>` tag per canonical page.
- Descriptive `alt` attributes on all image elements.
- Keyboard navigation focus states (`focus:outline-none focus:ring-2`).
- Explicit `<label>` elements for interactive form elements in `contact.html` and `work-with-me.html`.
- Mobile-friendly touch targets (minimum 44x44px).

---

## Responsive Design

- Supported viewports: **320px to 1920px+**.
- Mobile navigation drawer toggled via `assets/js/mobile-nav.js`.
- Breakpoints: Tailwind CSS standard grid breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
- Prevented horizontal overflow on mobile screens.

---

## JavaScript Architecture

The project features a lightweight **13.9 KB static Vanilla JS footprint**:

- **`assets/js/mobile-nav.js`**: Handles mobile drawer navigation toggle and accessibility states.
- **`js/main.js`**: Manages sticky header scroll blur, active navigation link styling, and dropdown positioning.
- **`js/form.js`**: Handles client-side contact form validation and interactive state feedback.
- **`js/gallery.js`**: Modal viewer logic for media gallery assets.
- **`js/filters.js`**: Category filtering for venture cards and research essay listings.
- **`js/carousel.js`**: Lightweight slider logic for testimonial/media carousels.

---

## Project Structure

```
c:\wamp64\www\portfolio/
├── .gitignore
├── 404.html
├── README.md
├── about.html
├── article-age-of-ai-and-cloud.html
├── article-agentic-ai-revolution.html
├── article-fatherhood-software-design.html
├── article-from-panini-to-ai.html
├── article-unfinished-yet-unbroken.html
├── article-warehouse-worker-system-design.html
├── article-we-built-better-lives.html
├── awards.html
├── contact.html
├── index.html
├── insights.html
├── journey.html
├── leadership-philosophy.html
├── leadership.html
├── media-gallery.html
├── media.html
├── privacy-terms.html
├── products-solutions.html
├── products.html
├── social-impact.html
├── speaking.html
├── technology.html
├── thought-leadership.html
├── venture-details.html
├── ventures.html
├── work-with-me.html
├── assets/
│   ├── css/
│   │   ├── about.css
│   │   ├── articles.css
│   │   ├── awards.css
│   │   ├── components.css
│   │   ├── contact-form.css
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── insights.css
│   │   ├── journey.css
│   │   ├── leadership.css
│   │   ├── media-gallery.css
│   │   ├── products.css
│   │   ├── social-impact.css
│   │   ├── speaking.css
│   │   ├── technology.css
│   │   ├── variables.css
│   │   ├── ventures.css
│   │   └── work-with-me.css
│   ├── images/
│   │   ├── _originals/
│   │   ├── ventures/
│   │   ├── ai-graphic.png
│   │   ├── article-1.png
│   │   ├── article-2.png
│   │   ├── article-3.png
│   │   ├── evolution-landscape.png
│   │   ├── favicon.ico
│   │   ├── favicon.png
│   │   ├── global-banner-clean.png
│   │   ├── global-banner.png
│   │   ├── hero-skyline.png
│   │   ├── signature.png
│   │   ├── yatin-blazer-full.jpg
│   │   ├── yatin-casual.jpg
│   │   ├── yatin-footer-ref.png
│   │   ├── yatin-office.jpg
│   │   ├── yatin-portrait.jpg
│   │   ├── yatin-seated-cropped.jpg
│   │   ├── yk-logo.png
│   │   └── yk-logo1.png
│   └── js/
│       └── mobile-nav.js
├── components/
│   └── footer.html
├── css/
│   ├── style.css
│   └── variables.css
└── js/
    ├── carousel.js
    ├── filters.js
    ├── form.js
    ├── gallery.js
    └── main.js
```

---

## Deployment

- **Live Demo URL**: [`https://omkarg74.github.io/infi_portfolio/`](https://omkarg74.github.io/infi_portfolio/)
- **Hosting Environment**: GitHub Pages static website hosting.
- **Deployment Architecture**: Zero backend/build requirements; deployed directly from static web files.

---

## Content Governance

- **Strict Source of Truth**: All venture descriptions, metrics, awards, and historical milestones strictly reflect approved portfolio source copy.
- **Zero Hallucination Policy**: No fabricated awards, fictional conferences, unverified company names, or fake client logos exist in this codebase.
- **Visual Integrity**: `index.html` governs all visual design tokens, color variables, font stacks, and layout boundaries.

---

## Maintenance Guidelines

1. Maintain the canonical **5-tab header structure** across all HTML files.
2. Keep navbar dropdown items **heading-only (0 secondary subtext lines)**.
3. Enforce **exactly one `<h1>` per page**.
4. Keep `<title>`, `<meta name="description">`, and `<link rel="canonical">` tags unique per page.
5. Avoid introducing heavy JavaScript build frameworks; maintain lightweight Vanilla JS architecture.

---

## Final Project Status

- **Live Demo**: [`https://omkarg74.github.io/infi_portfolio/`](https://omkarg74.github.io/infi_portfolio/)
- **Core Public Portfolio Pages**: **15**
- **Official Article Detail Pages**: **7**
- **Supporting / System Pages**: **2**
- **Route Aliases**: **4**
- **Reusable HTML Components**: **1** (`components/footer.html`)
- **Total HTML Files**: **29**
- **Deployment Method**: GitHub Pages static web application
- **Architecture**: Static HTML / CSS / Vanilla JavaScript
- **SEO Directives**: No `robots.txt` or `sitemap.xml` (intentionally removed for demo deployment)
- **Primary Navbar Architecture**: 5 Primary Categories (`HOME`, `ABOUT YATIN ▾`, `VENTURES ▾`, `TECHNOLOGY ▾`, `INSIGHTS ▾`) + `WORK WITH ME →` CTA
# Unified Blog & Post Page Architecture

Standardize the structural layout, typography, and modular component hierarchy across all existing and future blog posts, creating a consistent, distraction-free reading experience for template formats, applications, and professional communication guides.

### User Review & Critical Decisions

> [!IMPORTANT]
> The architectural design has been successfully implemented across all 27 posts (and the sample post) and verified through deep audits across all 40 HTML files in the repository.

- **Confirmed Modular Components**: Every post consistently features:
  1. Standard copyable template box (`.template-box`) with document icon, title, and one-click copy feedback.
  2. Interactive FAQ accordion (`.faq-section`) using semantic `<details class="faq-item">` and `<summary class="faq-question">`.
  3. Author biography card (`.author-box`) with Hiam editorial credentials and avatar.
  4. Related guides and templates discovery grid (`.related-posts` with `.related-grid`).
  5. Responsive table overflow wrappers (`.table-wrapper`) on all tabular data.
- **Confirmed Layout Architecture**: Clean single-column focused reading container (`<main class="container reading-container">`, max-width `780px`) with uniform vertical padding (`2rem 0 4.5rem`).
- **Confirmed Breadcrumb Model**: In-container breadcrumb trail (`<nav class="breadcrumb" aria-label="ব্রেডক্রাম্ব">`) directly above the post header.

---

### 1. Overview & Core Concept

- **What It Does**: Establishes a singular, standardized HTML/CSS post template specification. Every article across all categories (Academic Applications, CV & Resume Templates, Office Letters & Notices, Professional Emails) adheres to the identical document object model (DOM) sequence and styling rules.
- **Target Audience / Persona**: Students, job applicants, office professionals, and job seekers looking for reliable, ready-to-copy Bengali and English formal document templates on desktop and mobile.
- **Key Value**: Eliminates layout jumps between different categories, ensures 100% mobile responsiveness (no overflowing tables or misaligned sidebars), and provides a consistent toolkit (copy buttons, FAQs, author credentials, related articles) on every single page.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Arrival & Context**: User lands via search or category hub; instantly sees clear breadcrumbs (`Home / Category / Current Article`) and article title with reading metadata (unboxed text separated by subtle dots).
  2. **Exploration & Reading**: User reads introductory guidance, formatting rules, and prerequisite checklists structured with relaxed line heights (1.8) and clear subheadings.
  3. **Action (Template Consumption)**: User reaches the primary letter/email/CV template enclosed in a crisp template box and clicks "Copy Template" with immediate visual confirmation ("Copied!").
  4. **Deep Dive (Data & FAQs)**: User reviews comparison tables safely wrapped in horizontal touch-scroll containers, then toggles accordion FAQ items for common questions.
  5. **Discovery & Trust**: User reviews author authority details in the author card, then navigates to related templates via a 2-column or 3-column discovery grid.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Institutional editorial clarity. Warm, clean alabaster/white surface contrast with deep slate ink typography and refined emerald/navy interactive accents.
  - *Color Palette & Mood*:
    - Canvas Background: Crisp neutral `#f8fafc` / `#ffffff`
    - Structural Surface: Card & template surface `#ffffff` with hairline border `rgba(0, 0, 0, 0.08)`
    - Primary Typography: Deep charcoal `#0f172a` (high contrast, WCAG AA compliant)
    - Muted Metadata & Dividers: Slate `#64748b` and hairline border `#e2e8f0`
    - Action Accent: Deep teal/emerald `#0f766e` for primary interactive states and copy confirmations
  - *Typography & Hierarchy*:
    - Display / Headings: Bold editorial sans/serif (`2rem`–`2.25rem` for H1, `1.5rem` for H2, `1.2rem` for H3) with balanced headline wrapping (`text-wrap: balance`).
    - Body Prose: Highly legible reading scale (`1.05rem` / `16.8px`, line-height `1.8`, maximum line measure `68ch`).
    - Metadata: Zero-pill discipline. Metadata rendered as unboxed inline text with typographic middle dots (`·`).
  - *Component Styling & Layout*:
    - Single elevation depth with subtle hairline borders and micro-shadows (`box-shadow: 0 1px 3px rgba(0,0,0,0.05)`).
    - No thick left accent borders (`border-l-4`), no pseudo-technical comment syntax (`//`), and no pulsing status dots.

---

### 3. Deep Audit & Verification Matrix

| Verification Dimension | Status | Verification Result |
| :--- | :---: | :--- |
| **HTML Tag Balance** | PASS | 0 mismatched or unclosed tags across all 40 HTML files. |
| **Reading Container Layout** | PASS | 27/27 posts use `<main class="container reading-container">`. |
| **In-Container Breadcrumbs** | PASS | 27/27 posts use `<nav class="breadcrumb" aria-label="ব্রেডক্রাম্ব">`. |
| **Zero-Pill Post Header** | PASS | 27/27 posts use `<header class="post-header">` with unboxed `.post-meta`. |
| **Responsive Table Wrappers** | PASS | 100% of tables wrapped in `<div class="table-wrapper">`. |
| **Interactive FAQ Accordion** | PASS | 27/27 posts have `<details class="faq-item">` accordions with CSS chevrons. |
| **Author Attribution Card** | PASS | 27/27 posts include the standardized Hiam author card. |
| **Related Guides Grid** | PASS | 27/27 posts include contextual related cards in `.related-grid`. |
| **Copy Button Target IDs** | PASS | 100% of `data-copy-target` buttons target existing DOM elements. |
| **Internal Hyperlinks** | PASS | 100% of internal links resolve to existing files and routes. |
| **Back to Top Affordance** | PASS | 40/40 HTML files include `#backToTopBtn`. |
| **Compilation & Dev Server** | PASS | TypeScript check passes; Dev server responds with HTTP 200 OK. |

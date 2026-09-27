# Website Redesign Spec — Enchanted Research Archive

**Target:** `https://loc110504.github.io/`  
**Current stack:** Jekyll + GitHub Pages  
**Primary goal:** keep the current academic content but turn the experience into a cinematic, mysterious, dark-academia personal site with magical motion and atmosphere.

## 1. Scope

Use the substantive content already present in **Home**, **Research**, and **CV** as the redesigned site's source material.

Keep:
- identity/profile
- affiliation and current bio
- contact/social links
- News
- Research narrative
- Selected Publications
- Education and Experience from CV, but in a compact academic-timeline form
- selected honors/awards or academic service from CV if they already exist and add clear value
- CV as a practical route/action

Remove from primary UX:
- the `Publications` nav item
- the full-publications call-to-action
- `(view all)` beside Selected Publications
- verbose CV job descriptions, duty bullets, project-by-project task lists, and long supervisor/advisor notes

The `_publications` collection must remain because it feeds the Selected Publications section.

## 2. What the current site already does well

The existing site is data-driven and easy to maintain: profile information lives in `_data/profile.yml`, the navbar in `_data/navigation.yml`, homepage switches in `_data/display.yml`, and publication/news entries are Jekyll collections. The homepage already filters publications to `selected: true`, so the redesign should retain that logic rather than rebuild content by hand.

The Research page already has the strongest narrative in the site: **From Prediction to Partnership**, progressing through data-efficient/explainable AI, contestable AI, and self-evolving AI. Keep this conceptual arc intact while replacing the current cyber-neon presentation with a warmer magical-academic visual language.

The CV/experience content should be treated as factual source material, not as a long resume dump. The public site currently exposes education and research/industry roles; the redesigned experience should summarize them at the level of **date + role/degree + institution + location**, without repeating detailed work bullets. The current public homepage, for example, lists a B.Sc. in Data Science and roles at Northwestern University, University of New Brunswick, North Carolina A&T State University, and FPT Software; the implementation must still inspect the actual current CV data before rendering so future changes stay data-driven.

## 3. Creative direction

### Concept name
**Enchanted Research Archive**

### Emotional target
A visitor should feel that they are entering a scholar's observatory/library at sunset: quiet, intelligent, slightly mysterious, warm, and alive.

### Not the goal
Do not build a literal Harry Potter fan page. Avoid official Hogwarts crests, house colors as the primary system, character likenesses, named spells, franchise logos, and novelty fonts.

The supplied castle-at-sunset image is the mood reference. Its useful traits are the huge atmospheric sky, warm gold light, dark foreground framing, distant academy silhouette, and strong sense of scale. Use it as reference; publish it directly only if the user confirms usage rights.

## 4. Final information architecture

### Navbar
`Home  |  Research  |  Selected Work  |  CV`

- Home -> `/`
- Research -> `/research`
- Selected Work -> `/#selected-publications`
- CV -> `/experience`

No Publications tab.

### Home page flow
1. Cinematic Hero / profile
2. News & Milestones
3. Selected Publications
4. Compact Academic Journey teaser from CV
5. Footer

The CV teaser must stay concise. Prefer 3–5 high-value rows and a `View CV` action rather than reproducing the complete CV.

### Research page flow
1. Research intro: From Prediction to Partnership
2. Phase 01 — Data-Efficient & Explainable AI
3. Phase 02 — Contestable AI
4. Phase 03 — Self-Evolving AI Systems
5. CTA -> `Selected Publications` on Home

### CV page flow
1. Small editorial header: `Academic Journey` / `Curriculum Vitae`
2. Education
3. Experience
4. Selected Honors / Awards, only if already present in the CV
5. Academic Service / Activities, only if already present and concise
6. Download/View full CV action if a PDF/link already exists

Do not reproduce detailed job responsibilities. The CV page is a fast chronological overview, not a full job-description page.

A later v2 may merge Research and the CV teaser into the homepage as one scrolling experience, but v1 should preserve the current routes to minimize risk.

## 5. Hero specification

### Composition
- Full-width, 90–100svh desktop.
- Original magical-academy landscape or licensed reference image as background.
- Dark vignette on left/bottom behind content.
- Name positioned center-left/lower-left.
- Affiliation directly underneath.
- Bio condensed to 2 short paragraphs max.
- Contact actions beneath.

### Visual
- deep charcoal top/left
- warm amber horizon
- antique-gold UI details
- very subtle film grain / paper texture
- 20–30 drifting dust/firefly motes desktop

### Motion
- background scale 1.035 -> 1.0 over ~1.8s
- title fade + rise
- staggered metadata/actions
- optional pointer lantern: warm radial glow following mouse with smoothing
- optional parallax <= 10px

No custom cursor replacement.

## 6. Visual system

### Palette
- Ink black `#09090B`
- Charcoal `#1A1718`
- Parchment `#EDE2C7`
- Antique gold `#D4AE69`
- Brass `#B99355`
- Muted emerald `#274B3B`
- Oxblood `#551D20`
- Moonlight `#F1EEE5`

### Typography
- `Cormorant Garamond`: hero and section display
- `Cinzel`: phase labels/small caps, sparingly
- `Spectral` or `Source Serif 4`: body/publication text
- retain a simple sans for compact utility UI if needed

### Surfaces
Replace white Bootstrap cards with translucent charcoal/parchment panels:
- warm 1px border
- restrained blur
- soft deep shadow
- subtle inner highlight

## 7. Home content treatment

### Profile
Keep current profile data from `_data/profile.yml`.
Do not duplicate those values in HTML.

### News & Milestones
Transform current News card into a vertical archival chronology:
- year marker
- date in muted gold
- thin line
- small seal/star marker
- milestone text

Keep it compact.

### Selected Publications
Keep Jekyll filter:

```liquid
{% assign pubs = site.publications | where: "selected", true | sort: "selected_order" %}
```

Mandatory UX changes:
- heading: `Selected Publications`
- remove `(view all)`
- no nav link to `/publications`
- keep title/authors/venue/PDF/DOI/Code easy to scan

Card interaction:
- hover lift 3px
- warm border glow
- no fantasy rename of paper titles or actions

### Compact Academic Journey
Use CV data, but compress it aggressively.

Recommended Home teaser:
- one Education row
- 2–4 most recent/relevant Experience rows
- each row contains only `date`, `role/degree`, `institution`, and optional `country/location`
- no task bullets
- no detailed research project descriptions
- no long supervisor/advisor names unless they are essential to identity and already part of the design
- end with `View CV` -> `/experience`

Do not hardcode the example institutions. Read the current CV data and render from the repository's source of truth.

## 8. Research experience

Keep the current scientific copy and three phases.

### Research intro
Title remains **From Prediction to Partnership**.
Use a centered editorial layout over a near-black background with a faint constellation/astronomical diagram texture.

### Research rail
Turn the current timeline into a gold-ink vertical pathway.
As the user scrolls, the rail fills and each chapter activates.

### Phase 01 — Foundation
**Data-Efficient & Explainable AI**

Visual metaphor: illuminated medical diagram / scan plate / annotated manuscript.

Keep current tags such as semi-supervised, weakly-supervised, domain adaptation, multimodal fusion, class imbalance, saliency, counterfactual explanations.

### Phase 02 — The Bridge
**Contestable AI**

Visual metaphor: two engraved nodes/orbits (AI and Clinician) connected by moving gold light.

Keep contestability, clinician-in-the-loop, uncertainty, disagreement-resolution wording.

### Phase 03 — Evolution
**Self-Evolving AI Systems**

Visual metaphor: engraved luminous infinity/feedback loop, with memory-like orbiting marks.

Keep continual learning, reinforcement learning, active learning, self-evolving pipelines.

### CTA
Replace `Explore my publications` linking to `/publications` with:
`Explore Selected Publications` -> `/#selected-publications`.

## 9. CV / Academic Journey treatment

The CV page should feel like a restrained scholarly chronicle, not a second dense resume.

### Education
Show:
- years
- degree
- institution
- country/location if present

Optional: one short line for thesis/topic only if it is already present and genuinely useful.

### Experience
For every role, show only:
- start/end date
- role title
- institution/company/lab
- location, if present

Do **not** show detailed responsibility bullets such as what models were developed, datasets used, technical subtasks, or project-level achievements. Those belong in Research/Selected Publications.

If the current CV stores supervisors/advisors, omit them from the default compact presentation or expose them only in a small secondary line when clearly useful.

### Honors / Awards
If present in the CV, show only selected/high-signal entries. Use year + title + organization/event. Do not turn the page into a complete award ledger.

### Academic Service / Activities
If present, render only short role + venue/year entries. Omit descriptive paragraphs.

### Visual layout
Use a single illuminated vertical timeline with alternating subtle markers, not separate white cards for every job. Keep dates easy to scan. On mobile, stack everything into one column.

## 10. Motion system

Use only 6 motion families:
1. hero reveal
2. pointer lantern
3. sparse ambient particles
4. scroll reveal
5. research/CV timeline progress
6. hover/focus microinteractions

Performance rules:
- transform + opacity only where possible
- one requestAnimationFrame loop for pointer/scroll effects
- IntersectionObserver for reveals
- no scroll hijacking
- no Three.js requirement

`prefers-reduced-motion` must disable parallax, particles, typewriter/repeated reveals, and pointer-follow effects.

## 11. Required repo changes

### `_data/navigation.yml`
Remove Publications. Add Selected Work anchor.

### `index.html`
Keep profile, news, and selected-publication logic. Add a compact CV/Academic Journey teaser only if it can reuse existing CV/profile data without duplication.

### `_includes/widgets/publication_card.html`
Remove `(view all)` link. Keep loop and `id="selected-publications"`.

### `_includes/widgets/research_focus.html`
Keep copy and interaction structure. Replace cyber palette with the new visual system. Move CSS/JS out of the include when practical. Change final CTA.

### `_includes/widgets/profile_card.html`
Rebuild as cinematic hero while keeping all Liquid data bindings.

### `_includes/widgets/news_card.html`
Restyle to chronology.

### CV / experience rendering
Inspect `experience.html` and the data it consumes before editing.
- preserve data-driven Education and Experience
- remove or suppress detailed task bullets in the default web rendering
- add a compact timeline treatment
- retain full factual data in the source if it is reused elsewhere; presentation should be concise rather than deleting useful source data
- if a downloadable CV exists, keep that action available

### `_includes/navbar.html`
Keep data loop and mobile behavior; restyle.

### `_layouts/default.html`
Load new fonts, `assets/css/mystic.css`, and `assets/js/mystic.js` after existing global assets.

### New assets
- `assets/css/mystic.css`
- `assets/js/mystic.js`
- optional `assets/css/research-mystic.css`
- optional `assets/js/research-mystic.js`
- licensed/original hero asset

### `publications.html`
Keep only as a legacy route if desired. Do not expose it in main navigation or CTAs.

## 12. Responsive behavior

### Desktop
- full cinematic hero
- gentle pointer lantern/parallax
- alternating research chapter composition
- CV timeline may use date rail + content column

### Tablet
- reduce background movement
- simplify ornaments
- two-column publication layout only if comfortable
- CV remains single readable timeline

### Mobile
- 78–90svh hero
- no pointer effects
- minimal particles
- single research rail
- single CV rail
- publication cards stacked
- no tiny decorative text
- no long responsibility bullets in CV

## 13. Accessibility

- preserve system pointer
- visible focus states in antique gold
- keyboard-operable nav/menu
- WCAG AA text contrast where practical
- semantic headings
- 44px touch targets
- reduced motion support
- decorative images ignored by screen readers
- dates and institutions in CV must remain understandable without relying on decorative timeline position

## 14. Performance budget

- hero desktop <= 800 KB, preferred <= 450 KB
- mobile hero <= 250 KB preferred
- new JS ideally <= 20–30 KB minified
- no large runtime framework for animation
- lazy-load publication covers/noncritical imagery

## 15. Definition of Done

The redesign is done when:
- the site still builds on GitHub Pages
- Home, Research, CV work
- Publications is absent from primary nav
- no user-facing `view all publications` link exists
- Selected Publications still renders from `selected: true`
- Research CTA lands on Selected Publications
- CV uses the current CV data but presents Experience/Education compactly
- CV experience entries do not expose detailed responsibility/task bullets by default
- hero, research, publications, and CV share one coherent mystical visual system
- mobile has no overflow
- reduced motion works
- keyboard focus is visible
- no JS console errors
- no franchise-specific unlicensed assets are introduced

## 16. Recommended implementation order

1. Navigation + publication link cleanup
2. Global tokens/fonts/background
3. Navbar
4. Hero/profile
5. News
6. Selected Publications
7. CV/Academic Journey compact rendering
8. Research restyle
9. Motion layer
10. Responsive/reduced-motion pass
11. Final QA and asset optimization

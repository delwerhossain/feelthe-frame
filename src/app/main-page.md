got it — here’s a **pixel-level design spec** for the homepage based on your screenshots + color tokens. it’s *design-only* (no code), with exact values you can hand to any dev.

---

# FeelTheFrame — Homepage Design Instructions (Next.js build)

## A) Global foundations

**Canvas**

* Page width: fluid. **Max content width: 1280px (desktop)**, 1100px for long text blocks.
* Section gutters: **64–96px** top/bottom (desktop), 48–64px (tablet), 32–48px (mobile).
* **Section curvature**: large rounded corners on section containers: **28–32px**.
* Background stack (top→bottom):

  1. Page base: **#211A1D**.
  2. Subtle page vignette: radial **#3B1A78 @ 6–8%** opacity fading to transparent, centered slightly below the fold.

**Color mapping (from your tokens)**

* Primary brand: **#6320EE**
* Primary hover: **#8B5CF6**
* Primary press/focus: **#4C1D95**
* Surfaces: **Base #211A1D**, **Elevated #2A2128**
* Text: **High 92% white**, **Muted 72% white**, **Subtle 56% white**
* Borders: **white @ 8%** (general), **brand @ 24%** (accent outlines)

**Type**

* Display: **Syne** (H1/H2, bold).
* UI/Body: **Poppins** (buttons, nav, paragraphs).
* Tracking: **-0.5 to -1.5** for large headings, **0** for body.

**Elevation**

* Card/base shadow: soft md (page tokens).
* “Hero CTA / glass” shadow: **shadow-purple** + faint outer glow.

**Motion grammar**

* **Standard duration**: 300–450ms
* **Hero & big reveals**: 600–800ms
* **Easing**: cubic-bezier(0.22, 1, 0.36, 1) (ease-out)
* **Stagger**: 60–120ms between siblings
* **Parallax range**: 4–8% of viewport height for background elements

**Smooth scroll**

* Anchor jumps (nav → sections): **600ms**, same easing as above.
* Offset target by **72px** to account for fixed navbar.

**Responsive breakpoints**

* **Mobile** < 640px, **Tablet** 640–1024px, **Desktop** ≥ 1024px, **Large** ≥ 1440px (increase max width to 1360px if needed).
* Radius stays large on all breakpoints; reduce gutters as noted.

---

## B) Navigation (glass pill bar)

**Container**

* Fixed at top, centered; **max width = content width**, **height 72px**, **corner radius 999px**.
* **Glass treatment**: background **rgba(255,255,255,0.12)** with **backdrop blur (strong)** look; inner border: **1px brand @ 24%**; outer drop: **shadow-purple** at 20–30% strength.

**Brand mark**

* Left-aligned; reserve **180px**.

**Links**

* Items evenly spaced. **Font**: Poppins 15–16px, **color**: white 72%.
* **Active**: pill chip (height 44px, radius 999px) with **1px brand outline**, inner glow (brand @ 18%), text white 92%.
* **Hover**: text to white 92% + faint brand underline (2px, 50% width).

**CTA (“Let’s Talk”)**

* Outline pill (height 44–48px). Stroke **brand 1.5px**; hover → filled **#4C1D95 → #6320EE** gradient, white 100%.

**Scroll behavior**

* On scroll > 64px: reduce bar opacity to **0.9**, compress height to **64px**, increase border contrast +1 step, animate in **180ms**.

---

## C) Hero (video + overlay + headline)

**Stage**

* Height **100vh** desktop (min 640px), **80vh** tablet, **70vh** mobile.
* Background **video**: 16:9, cover, autoplay, muted, loop.
* **Overlay A (readability)**: top-to-bottom gradient: **rgba(0,0,0,0.45) → rgba(0,0,0,0.15)**.
* **Overlay B (brand wash)**: subtle diagonal gradient **#6320EE → #8B5CF6 @ 10–15%** opacity, angle \~**135°**.

**Content block (left-bottom alignment on desktop)**

* H1: 56–72px (mobile 36–44px).

  * Color: white 92% with **two-tone emphasis**: last line or keywords carry **brand gradient clip**.
* Subhead: 18–20px, white 72%, **max width 640px**.
* Primary CTA group (Buy/Watch/Contact depending on your flow).
* **Scroll cue**: vertical “Scroll” label on left with 24px line; opacity 56% → 92% on hover.

**Hero motion**

* Video fades from 0 → 100% in **600ms**.
* Headline **slide-up 16–24px** + fade (**700ms**).
* Subhead + buttons stagger 80ms each.
* Parallax: video moves **-4%** on scroll; text remains pinned first 20% of scroll.

---

## D) “Our Story” (tabs + image)

**Section container**

* Dark surface: **#211A1D → #2A2128** vertical gradient, rounded **32px**.
* Top padding generous **96px** to clear nav.

**Tabs (Our Story / Our Mission / Our Promise)**

* Centered pill rail; gap 12–16px.
* Default chip: translucent surface (white 8% with blur), **1px brand outline**.
* Selected: **filled brand**; add inner shadow (subtle) for depth.

**Content layout**

* 2-column: Left = headline + body + CTA; Right = large photo (radius 24–28px).
* Headline “Our Story”: Syne 48–56px; white 100%.
* Body: white 72%, **line-length 60–70ch**.

**CTA “Start Your Project”**

* Outline pill (brand stroke); hover fill to **#4C1D95**; add **shadow-glow**.

**Reveal**

* Section fades up **24px** on enter; image skews/zooms subtly (scale 1.02 → 1.00). **600–700ms**.

---

## E) “Our Work” (carousel cards)

**Backdrop**

* Light gradient wash **#FFFFFF → #EDE7FF (brand tint) → transparent** top→bottom.
* Upper corner rounding on the container: **32px**.

**Track**

* 3 visible cards desktop; 1.2 cards mobile (peeking edges). **Gap 24–28px**.
* Snap points for each card.

**Card**

* Dimensions desktop **(w ≈ 560–640px, h ≈ 360–420px)**; **radius 28px**; overflow hidden.
* Background media: image/video.
* **Caption panel** (centered overlay):

  * Panel radius: **20px**, inner padding **24–28px**.
  * Fill: **brand gradient 135°** with **15–18% black overlay** for readability.
  * Border: **1px white 16%**.
  * Title: white 100%, 28–32px; blurb: white 80%, 16–18px.
  * Button: tiny outline pill (“Watch Project”), 1px brand; hover adds glow.

**Navigation**

* Arrow buttons: circular **48–56px**, filled brand, drop **shadow-purple**, white chevron icon.
* Positioned vertically centered to the card height; offset **-24px** outside the card edges.

**Motion**

* On hover: card scale to **1.02**, add **shadow-purple-lg**; caption panel rises **8px** (springy).
* On slide: 350–450ms, ease-out; overscroll 2% and snap back for life.

---

## F) “Services” (3×2 feature grid)

**Section**

* Dark gradient background with large vignette; top corners heavily rounded (**32–36px**).

**Cards**

* Grid: **3 columns** desktop, 2 tablet, 1 mobile.
* Each card: **elevated surface #2A2128**, border **1px white 8%**, **radius 24px**, padding **28–32px**.
* Title: 24–28px white 100%.
* Body: white 72%, **max width 60ch**.
* CTA row: small circular icon button + “Learn More” label.

**Hover**

* Lift **6–8px**, shadow-purple increases, border switches to **brand 24%**, background gains **brand wash @ 6%**.

**Entrance**

* Stagger per card **90ms**; motion **translate-up 16px + fade**.

---

## G) “Our Process” (timeline)

**Backdrop**

* Light gradient **#F7F5FF → #FFFFFF** with subtle purple mist top-left (radial **#8B5CF6 @ 10%**).
* Section title centered, Syne 44–52px black; intro paragraph gray-800.

**Timeline spine**

* Vertical spine centered; **2px brand line** running down the section.
* **Step markers**: circular chips **44px**, filled **#6320EE**, white number; each chip overlaps the spine; a **2px white ring @ 24%** adds definition.

**Step rows (3 steps)**

* Alternating layout left/right around spine.
* Media tile (image/video) radius **20–24px**, drop soft shadow.
* Text block:

  * Heading 28–32px black.
  * Body gray-700; bulleted checklist with small monochrome icons.
  * Accent links (e.g., “Concept Development”) in **brand**; hover underline.

**Motion**

* As section enters viewport:

  * Spine draws from top to bottom (mask reveal) **800ms**.
  * Step chip pops (scale 0.9 → 1, 250ms) sequentially 1→2→3.
  * Left/right blocks slide from their side by **24px** with fade, 400–500ms.

---

## H) “Creative Ideas” CTA banner

**Panel**

* Full-width container inside page gutters; **radius 28–32px**; **elevated surface**.
* **Brand outline** (1–2px) + **soft outer glow** (shadow-glow).
* Copy center aligned: large white headline (Syne 40–48px) + muted subline.

**Button**

* Outline pill (brand). Hover: fill with **#4C1D95 → #6320EE** gradient; subtle inner highlight; focus ring 3px brand-light.

---

## I) Footer

**Canvas**

* Darkest surface **#111827** with gentle inner top shadow so it “tucks under” the CTA banner.

**Grid**

* 3 columns desktop (Contact / Quick Links / Services), stack on mobile.
* Card-like blocks with **1px white 8%** borders and **16–20px** radius to match the rest.

**Details**

* Link hover: color shift to **brand** + underline.
* Social icons: white 72% → brand on hover.

---

## J) Micro-interactions & polish

* **Scroll-to anchors**: target settles with a tiny **10px “elastic”** bounce (translateY) to signal you arrived.
* **Focus states** (keyboard): 3px brand-light halo on buttons/links; do not rely on color alone.
* **Video controls (hero)**: small play/mute pills bottom-right; hover glow; icons white 92%.
* **Image overlays**: where text sits on media, ensure **contrast ratio ≥ 4.5:1** by adding an extra **10–15% black** layer if needed.
* **Loading feel**: while hero video buffers, show a blurred poster frame with brand gradient wash and shimmer on headline for ≤600ms.

---

## K) Spacing cheatsheet (desktop)

* Section top titles: **0 → 12px** eyebrow (if used) → **16px** title → **16px** divider/intro → **32–40px** content.
* Card internal: **24–28px** all sides.
* Between stacked components: **40–56px**.
* Carousel gutters to page edge: **24px** on mobile, **32–40px** tablet+, so peeking cards are visible.

---

## L) Accessibility & performance guardrails

* Maintain **14px min** text on mobile; body **16px** preferred.
* Reduce/disable heavy motion for **prefers-reduced-motion**: no parallax, no slide-ins; use fades only.
* Provide **caption or alt** for media.
* Keep the hero video under **6–8MB** (short loop), serve modern codec; lazy-load non-hero videos; defer heavy shadows offscreen.

---

## M) Quick acceptance checklist

* [ ] Nav glass pill matches screenshots (blur, outline, glow, active chip).
* [ ] Hero: video fills screen; headline readable with brand gradient accent; scroll cue visible.
* [ ] Story: tabbed pills, left text/right image, large radii.
* [ ] Work: carousel cards with centered gradient caption panel + outline; arrows on purple pills.
* [ ] Services: 3×2 grid, dark cards with brand outline on hover.
* [ ] Process: center spine, numbered chips, alternating blocks; animated draw on reveal.
* [ ] CTA banner: outlined/glowing panel, big centered copy.
* [ ] Footer: three blocks with borders, clear hierarchy.
* [ ] Smooth anchor scrolling feels 600ms/ease-out with 72px offset.
* [ ] All text meets contrast; motion respects reduced-motion.

---

if you want, i can also package this into a one-page **visual spec PDF** with swatches, spacing rulers, and motion timelines so your team can sign off quickly.

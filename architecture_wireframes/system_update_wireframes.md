# AURA SAFARIS — MAGAZINE-STYLE REDESIGN
## Architectural Wireframes v2.0 | Editorial-First Pivot

---

> **Design Rationale:** After deep research into Angama, Expert Africa, Singita, and &Beyond, a clear pattern emerges: **the world's finest safari brands don't sell trips — they publish stories.** Their websites function as luxury travel magazines where wildlife, experiences, and safaris are presented as editorial content. Pricing is always buried behind an enquiry wall. The user journeys through stories first, falls in love with the narrative, and only then considers booking. This pivot transforms Aura Safaris from a travel catalog into an editorial publication.

---

## TABLE OF CONTENTS

1. [Home — Curated Safari Vlog Snippets](#1-home-page)
2. [Experience Hub — The Magazine Index](#2-experience-hub-page)
3. [Experience Story — The Vlog Template](#3-experience-story-detail)
4. [Safaris Hub — Safari Collections (Blog Style)](#4-safaris-hub-page)
5. [Safari Story — The Safari Vlog Template](#5-safari-story-detail)
6. [Wildlife Hub — The Field Guide](#6-wildlife-hub-page)
7. [Wildlife Story — Species Profile Vlog](#7-wildlife-story-detail)
8. [Stories Hub — The Editorial Archive](#8-stories-hub-page)
9. [CMS Architecture Notes](#9-cms-architecture-notes)

---

## 1. HOME PAGE — CURATED SAFARI VLOG SNIPPETS

### Section 1.1: Hero (Unchanged — Cinematic Video)

```
+------------------------------------------------------------------+
| [Ambient Video: Slow pan across the Mara at dawn]                |
|                                                                  |
|  AURA SAFARIS            [LIVE: MARA 22C / SUNNY]               |
|                          [Search]         [Menu =]               |
|                                                                  |
|  I DREAM OF                                                      |
|  --------------------------------------------------------------- |
|  Journeys that                                                   |
|  leave you                                                       |
|  forever changed                                                 |
|                                                                  |
|  [ DESIGN MY SAFARI ]                                            |
|                                                                  |
|  [Scroll] | Current Migration: Northern Serengeti v              |
+------------------------------------------------------------------+
```

**Specs:** Same as v1 — full-viewport video, Instrument Serif 72px headline, DM Sans eyebrow.

---

### Section 1.2: The Philosophy (Unchanged — Editorial Split)

```
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+    +-----------------------------+   |
|  |                        |    |                             |   |
|  |  "We don't sell        |    |  [Image: Close-up of      |   |
|  |   safaris.             |    |   Maasai guide's hands     |   |
|  |   We craft             |    |   holding binoculars,      |   |
|  |   transformations."   |    |   shallow depth of field]  |   |
|  |                        |    |                             |   |
|  |  At Aura Safaris,      |    |                             |   |
|  |  every journey is      |    |                             |   |
|  |  designed around       |    |                             |   |
|  |  a single question:    |    |                             |   |
|  |  What will this        |    |                             |   |
|  |  trip change in you?   |    |                             |   |
|  |                        |    |                             |   |
|  |  [Read Our Story ->]   |    |                             |   |
|  |                        |    |                             |   |
|  +------------------------+    +-----------------------------+   |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
+------------------------------------------------------------------+
```

---

### Section 1.3: Featured Destinations (Unchanged — Horizontal Scroll)

```
+------------------------------------------------------------------+
|                                                                  |
|           WHERE THE WILD THINGS ARE                              |
|           Kenya's most extraordinary landscapes, curated for you |
|                                                                  |
|  +----------+  +----------+  +----------+  +----------+        |
|  | [Masai  |  |[Amboseli|  |[Samburu |  |[Lamu    |        |
|  |  Mara]  |  |  &      |  |  &      |  |  Island]|        |
|  |         |  |  Tsavo] |  |  Laikipia]|  |         |        |
|  |         |  |         |  |          |  |         |        |
|  |  MASAI  |  | AMBOSELI|  |  SAMBURU |  |  LAMU   |        |
|  |  MARA   |  |  & TSAVO|  |  & LAIK. |  |  ISLAND |        |
|  |  ------ |  | ------- |  | -------- |  |  ------ |        |
|  | 12 Saf. |  | 8 Saf.  |  | 6 Saf.   |  | 4 Saf.  |        |
|  +----------+  +----------+  +----------+  +----------+        |
|                                                                  |
|  <-  ->                                                          |
+------------------------------------------------------------------+
```

---

### Section 1.4: The Experience Promise (Unchanged — Three Pillars)

---

### Section 1.5: Immersive Video Break (Unchanged)

---

### Section 1.6: CURATED JOURNEYS — VLOG SNIPPETS (REDESIGNED)

**OLD:** Grid of 3 cards with image, title, duration, location count, and price.
**NEW:** Editorial magazine-style "vlog snippet" cards. NO PRICING. Story-first. Each card is a window into a safari story, not a product listing.

```
+------------------------------------------------------------------+
|                                                                  |
|              CURATED JOURNEYS                                    |
|              Stories that move you                               |
|                                                                  |
|  [All] [Fly-In] [Driving] [Family] [Honeymoon] [Photography]    |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  [FULL-BLEED IMAGE: Hot air balloon over Mara at dawn]   |  |
|  |                                                           |  |
|  |  FLY-IN SAFARI                                    12 MIN  |  |
|  |  The Great Migration: A Balloon's Eye View                |  |
|  |  -------------------------------------------------------   |  |
|  |  Drift silently above the Mara River as two million       |  |
|  |  wildebeest begin their ancient crossing. Our guide       |  |
|  |  Lemaalo shares what this spectacle means to the Maasai.  |  |
|  |                                                           |  |
|  |  [Watch the Story]    [Read the Journal]                  |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  +------------------------+  +-----------------------------+    |
|  |                        |  |                             |    |
|  |  [Image: Lion pride    |  |  [Image: Family around    |    |
|  |   in golden light]     |  |   campfire, kids laughing] |    |
|  |                        |  |                             |    |
|  |  WILDLIFE SAFARI  8MIN |  |  FAMILY JOURNEY    10MIN   |    |
|  |  The Big Five Classic  |  |  A Family's First Safari    |    |
|  |  --------------------- |  |  -------------------------  |    |
|  |  Follow ranger David   |  |  The Johnsons share what    |    |
|  |  as he tracks the      |  |  happened when their        |    |
|  |  Marsh Pride through   |  |  7-year-old met a Maasai    |    |
|  |  the golden hours.     |  |  warrior for the first time.|    |
|  |                        |  |                             |    |
|  |  [Watch the Story]     |  |  [Watch the Story]          |    |
|  |                        |  |                             |    |
|  +------------------------+  +-----------------------------+    |
|                                                                  |
|  +------------------------+  +-----------------------------+    |
|  |                        |  |                             |    |
|  |  [Image: Photographer  |  |  [Image: Couple on        |    |
|  |   with telephoto,      |  |   private sundowner]       |    |
|  |   cheetah in bg]       |  |                             |    |
|  |                        |  |                             |    |
|  |  PHOTOGRAPHY   15MIN   |  |  HONEYMOON       9MIN      |    |
|  |  Through the Lens      |  |  Love in the Wild           |    |
|  |  ----------------      |  |  -----------------          |    |
|  |  Award-winning         |  |  Sarah and Tom's story      |    |
|  |  photographer Andrew   |  |  of saying 'I do' beneath   |    |
|  |  shares his secrets.   |  |  the African stars.         |    |
|  |                        |  |                             |    |
|  |  [Watch the Story]     |  |  [Watch the Story]          |    |
|  +------------------------+  +-----------------------------+    |
|                                                                  |
|  [Explore All Journeys ->]                                       |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Featured Card (top):** Full-width, 16:9 cinematic image. Large serif headline. Two CTAs: "Watch the Story" (primary) and "Read the Journal" (secondary). Duration badge as micro-label. NO PRICE.
- **Secondary Cards:** 2-column grid, 4:5 portrait images. Same pattern — eyebrow category, serif headline, narrative excerpt (2-3 sentences), single "Watch the Story" CTA. NO PRICE.
- **Filter tabs:** DM Sans 13px uppercase. Active: `--sunset-ember` underline. Inactive: `--ink-editorial` at 50%.
- **Hover:** Image darkens 10%, headline shifts right 8px, "Watch the Story" arrow animates.
- **Cards are SORTABLE by category** but presented as editorial content, not e-commerce.

---

### Section 1.7: Journal Preview (REDESIGNED — More Editorial)

```
+------------------------------------------------------------------+
|                                                                  |
|  +---------------------------+  +----------------------------+  |
|  |                           |  |                            |  |
|  |   STORIES FROM            |  |  [Image: Guide writing in  |  |
|  |   THE WILD                |  |   journal by firelight,    |  |
|  |                           |  |   intimate crop, parallax] |  |
|  |   Dispatches from our     |  |                            |  |
|  |   guides, conservation    |  |                            |  |
|  |   updates, and the        |  |                            |  |
|  |   moments that make       |  |                            |  |
|  |   safari unforgettable.   |  |                            |  |
|  |                           |  |                            |  |
|  |   [Read All Stories ->]   |  |                            |  |
|  |                           |  |                            |  |
|  |   ----------------------- |  |                            |  |
|  |                           |  |                            |  |
|  |   THIS WEEK AT AURA #42   |  |                            |  |
|  |   "The leopard who hunts  |  |                            |  |
|  |   crocodiles"             |  |                            |  |
|  |   5 July 2026  |  8 min  |  |                            |  |
|  |                           |  |                            |  |
|  |   Why November is the     |  |                            |  |
|  |   Secret Season           |  |                            |  |
|  |   28 June 2026  |  6 min  |  |                            |  |
|  |                           |  |                            |  |
|  |   Conservation Report:    |  |                            |  |
|  |   The Last Black Rhinos   |  |                            |  |
|  |   15 June 2026  | 12 min  |  |                            |  |
|  |                           |  |                            |  |
|  +---------------------------+  +----------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** Left column sticky on scroll. Article list now shows **reading time** instead of prices. Dates + read duration only. Featured article has excerpt. Parallax image on right.

---

### Section 1.8: Final CTA (Unchanged)

---

## 2. EXPERIENCE HUB PAGE — THE MAGAZINE INDEX

**Concept:** This is NOT a category grid. It is a luxury travel magazine's "Experiences" section — a curated editorial index where each experience is a cover story. Clicking any experience opens a full "vlog story" page (Section 3).

```
+------------------------------------------------------------------+
|                                                                  |
|  [Video: First-person safari vehicle, slow drive through        |
|   acacia woodland, dappled light, 70vh]                        |
|                                                                  |
|  EXPERIENCES                                                     |
|  ----------------------------------------------------------      |
|  Every Aura journey is designed around what moves you            |
|                                                                  |
|  [All] [Wildlife] [Cultural] [Adventure] [Wellness] [Photography]|
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** Hero video reduced to 70vh (not full viewport) — signals this is a content page, not a landing page. Filter tabs below headline.

---

### Section 2.2: Featured Experience — Cover Story

```
+------------------------------------------------------------------+
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |        [FULL-BLEED CINEMATIC IMAGE: Lion portrait,        |  |
|  |         shallow depth of field, golden hour]              |  |
|  |                                                           |  |
|  |        WILDLIFE ENCOUNTER          18 MIN READ              |  |
|  |                                                           |  |
|  |        In the Company of Lions                              |  |
|  |        ------------------------------------------------     |  |
|  |        Ranger David Ochieng has tracked the Marsh Pride    |  |
|  |        for eleven years. In this story, he takes us        |  |
|  |        through a morning that changed everything.          |  |
|  |                                                           |  |
|  |        [Read the Full Story ->]                           |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** Cover story takes full width. 21:9 ultra-wide image. Category eyebrow + reading time. Large serif headline (48px). Narrative excerpt (3-4 sentences). Single CTA. This is the "hero article" of the issue.

---

### Section 2.3: Experience Stories — Editorial Grid

```
+------------------------------------------------------------------+
|                                                                  |
|  +----------------------+  +----------------------+            |
|  |                      |  |                      |            |
|  |  [Image: Maasai      |  |  [Image: Hot air     |            |
|  |   warrior in red     |  |   balloon over       |            |
|  |   shuka, jumping]    |  |   Mara river at      |            |
|  |                      |  |   sunrise]           |            |
|  |                      |  |                      |            |
|  |  CULTURAL        12MIN  |  ADVENTURE       15MIN |            |
|  |  The Jumping Dance      |  Balloons Over the Mara |            |
|  |  -------------------    |  ---------------------  |            |
|  |  Meet the Maasai        |  There's nothing quite  |            |
|  |  warriors preserving    |  like watching the      |            |
|  |  tradition in the       |  sunrise from 1,000     |            |
|  |  modern Mara.           |  feet above the plains. |            |
|  |                         |                         |            |
|  |  [Read Story]           |  [Read Story]           |            |
|  +----------------------+  +----------------------+            |
|                                                                  |
|  +----------------------+  +----------------------+            |
|  |                      |  |                      |            |
|  |  [Image: Open-air    |  |  [Image: Photographer|            |
|  |   massage table,     |  |   with camera,       |            |
|  |   savanna view]      |  |   leopard in bg]     |            |
|  |                      |  |                      |            |
|  |  WELLNESS        10MIN  |  PHOTOGRAPHY     20MIN |            |
|  |  The Bush Spa           |  Capturing the Wild     |            |
|  |  --------------         |  ------------------     |            |
|  |  Reconnect with         |  Tips from our in-house |            |
|  |  yourself as the        |  photographic guide on  |            |
|  |  savanna stretches      |  getting the shot.      |            |
|  |  to the horizon.        |                         |            |
|  |                         |  [Read Story]           |            |
|  |  [Read Story]           |                         |            |
|  +----------------------+  +----------------------+            |
|                                                                  |
|  +----------------------+  +----------------------+            |
|  |                      |  |                      |            |
|  |  [Image: Night sky,  |  |  [Image: Walking     |            |
|  |   stars, campfire]   |  |   safari, tracker    |            |
|  |                      |  |   reading signs]       |            |
|  |  ADVENTURE       14MIN  |  WILDLIFE        16MIN |            |
|  |  Sleep Under the Stars  |  The Art of Tracking    |            |
|  |  --------------------   |  -------------------    |            |
|  |  Our fly-camping        |  Learn to read the      |            |
|  |  experience under       |  bush like a master     |            |
|  |  African skies.         |  tracker.               |            |
|  |                         |                         |            |
|  |  [Read Story]           |  [Read Story]           |            |
|  +----------------------+  +----------------------+            |
|                                                                  |
|  [Load More Stories]                                             |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **2-column editorial grid.** NOT masonry — clean, magazine-style rows.
- **Each card:** 4:5 image, category eyebrow (DM Sans 12px uppercase), reading time badge, serif headline (28px), narrative excerpt (3 sentences max), "Read Story" text link with arrow.
- **NO PRICING anywhere.** Each card is a story entry point.
- **Hover:** Image scales 1.03, headline color shifts to `--sunset-ember`, arrow translates right.
- **Infinite scroll or "Load More"** — magazine pagination style.

---

### Section 2.4: Newsletter CTA

```
+------------------------------------------------------------------+
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |     Never miss a story from the wild                      |  |
|  |                                                         |  |
|  |     Subscribe to our weekly dispatches and receive        |  |
|  |     guides, wildlife reports, and conservation updates.   |  |
|  |                                                         |  |
|  |     [Email: ______________________]  [SUBSCRIBE]         |  |
|  |                                                         |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

---

## 3. EXPERIENCE STORY — THE VLOG TEMPLATE

**Concept:** When a user clicks any experience from the Hub, they enter a full-screen "vlog story" — a long-form editorial page that reads like a National Geographic article meets a travel blog. This is the heart of the magazine pivot. Pricing NEVER appears on this page. The only CTA is "Enquire About This Experience" at the bottom.

```
+------------------------------------------------------------------+
|                                                                  |
|  [FULL-VIEWPORT VIDEO: Slow-motion lion approach,              |
|   ranger narration overlay, ambient bush sounds]               |
|                                                                  |
|  AURA SAFARIS                              [X] Close Story    |
|                                                                  |
|                                                                  |
|              WILDLIFE ENCOUNTER                                  |
|                                                                  |
|              In the Company of Lions                             |
|                                                                  |
|              By David Ochieng  |  18 min read  |  Mara North  |
|                                                                  |
|              [Scroll to begin v]                                 |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 3.2: Story Content — Long-Form Editorial

```
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+    +-----------------------------+   |
|  |                        |    |                             |   |
|  |  The first light is    |    |  [Pull Quote:               |   |
|  |  different in the      |    |                             |   |
|  |  Mara. Not the harsh   |    |   "Every morning, the bush  |   |
|  |  white of city dawn,   |    |    gives you a test. Will   |   |
|  |  but a liquid gold     |    |    you pay attention?"      |   |
|  |  that seems to rise    |    |                             |   |
|  |  from the grass        |    |   — David Ochieng           |   |
|  |  itself.               |    |                             |   |
|  |                        |    +-----------------------------+   |
|  |  I've been tracking    |                                    |
|  |  the Marsh Pride for   |    +-----------------------------+   |
|  |  eleven years now.     |    |                             |   |
|  |  Every morning, the    |    |  [Image: David in safari    |   |
|  |  bush gives you a      |    |   vehicle, tracking,        |   |
|  |  test. Will you pay    |    |   golden light]             |   |
|  |  attention?            |    |                             |   |
|  |                        |    |  Ranger David tracking the  |   |
|  |  This morning, the     |    |  Marsh Pride, June 2026     |   |
|  |  answer was yes.       |    |                             |   |
|  |                        |    +-----------------------------+   |
|  +------------------------+                                    |
|                                                                  |
|  +-----------------------------+   +------------------------+   |
|  |                             |   |                        |   |
|  |  [FULL-WIDTH IMAGE: Lion    |   |  The pride had made    |   |
|  |   cubs playing, soft light] |   |  a kill overnight.     |   |
|  |                             |   |  We found them at      |   |
|  |                             |   |  the edge of the       |   |
|  |                             |   |  marsh, nine lions     |   |
|  |  Caption: Cubs of the       |   |  strong, feeding on    |   |
|  |  Marsh Pride, photographed  |   |  a buffalo. The        |   |
|  |  in June 2026               |   |  cubs were already     |   |
|  |                             |   |  practicing their      |   |
|  +-----------------------------+   |  stalking technique    |   |
|                                     |  on each other...      |   |
|                                     |                        |   |
|                                     +------------------------+   |
|                                                                  |
|  +------------------------+    +-----------------------------+   |
|  |                        |    |                             |   |
|  |  [VIDEO EMBED: 30-sec  |    |  The sun was high now.     |   |
|  |   clip of lion walk    |    |  We parked in the shade    |   |
|  |   toward vehicle]      |    |  of an acacia and waited.  |   |
|  |                        |    |  That's the thing about    |   |
|  |  [Play button overlay] |    |  safari — the waiting...   |   |
|  |                        |    |                             |   |
|  +------------------------+    +-----------------------------+   |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
|  WHAT TO EXPECT                                                  |
|                                                                  |
|  +--------------+  +--------------+  +--------------+          |
|  | [Icon: Sun]  |  | [Icon: Group]|  | [Icon: Binoc]|          |
|  |              |  |              |  |              |          |
|  | Early        |  | Small        |  | Expert       |          |
|  | Morning      |  | Groups       |  | Guide        |          |
|  | Starts       |  | Max 6        |  | Included     |          |
|  +--------------+  +--------------+  +--------------+          |
|                                                                  |
|  +--------------+  +--------------+  +--------------+          |
|  | [Icon: Meal] |  | [Icon: Cam]  |  | [Icon: Clock]|          |
|  |              |  |              |  |              |          |
|  | Bush         |  | Photography  |  | 4-5 Hours    |          |
|  | Breakfast    |  | Tips         |  | Duration     |          |
|  | Included     |  | Shared       |  |              |          |
|  +--------------+  +--------------+  +--------------+          |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
|  YOU MAY ALSO LIKE                                               |
|                                                                  |
|  +------------------+  +------------------+  +----------------+ |
|  | [Image]          |  | [Image]          |  | [Image]        | |
|  | Balloons Over    |  | The Art of       |  | The Jumping    | |
|  | the Mara         |  | Tracking         |  | Dance          | |
|  +------------------+  +------------------+  +----------------+ |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
|              Ready to experience this for yourself?              |
|                                                                  |
|              [ PLAN THIS EXPERIENCE ]                            |
|              Or call us: +254 724 428 867                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Hero:** Full-viewport video with auto-playing cinematic intro. "Close Story" button top-right (returns to Experience Hub).
- **Content:** Single-column narrative text (max-width 680px) with inline images, pull quotes, and video embeds. This is the CMS-powered long-form content.
- **Pull Quotes:** Instrument Serif Italic 36px, `--ink-editorial`, left border accent in `--sunset-ember`.
- **Images:** Full-width bleeds alternate with text. Each has a caption in DM Sans 12px.
- **Video Embeds:** 16:9, play button overlay, lazy-loaded.
- **What to Expect:** 6-icon grid showing practical details — NOT pricing. Practical info only (duration, group size, inclusions).
- **Related Stories:** 3-card horizontal row at bottom.
- **CTA:** Single "Plan This Experience" button (ghost style) + phone number. NO PRICE.

---

## 4. SAFARIS HUB PAGE — SAFARI COLLECTIONS (BLOG STYLE)

**Concept:** Inspired by Expert Africa's "Safari Collections" page. Safaris are organized into **collections** — Beach Holidays, Wildlife Safaris, Family Journeys, etc. Each collection is a story card. Clicking leads to a Safari Story page (Section 5). NO PRICING on cards.

```
+------------------------------------------------------------------+
|                                                                  |
|  [Image: Safari vehicle at sunrise, golden light, wide angle]   |
|                                                                  |
|  SAFARI COLLECTIONS                                              |
|  ----------------------------------------------------------      |
|  Journeys curated by passion, not by price                       |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 4.2: Collections Grid — Editorial Magazine Style

```
+------------------------------------------------------------------+
|                                                                  |
|  BROWSE BY COLLECTION                                            |
|                                                                  |
|  [All] [Wildlife] [Beach & Bush] [Family] [Honeymoon]           |
|  [Photography] [Cultural] [Walking] [Fly-In] [Conservation]     |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  [FULL-WIDTH IMAGE: Wildebeest crossing Mara River,       |  |
|  |   dramatic splash, golden light]                          |  |
|  |                                                           |  |
|  |  WILDLIFE SAFARI        10 DAYS  |  4 LOCATIONS            |  |
|  |  The Great Migration Expedition                           |  |
|  |  -----------------------------------------------------     |  |
|  |  Follow the ancient path of two million wildebeest        |  |
|  |  as they cross the Mara River. This is the journey        |  |
|  |  that defines Africa — raw, dramatic, and unforgettable.  |  |
|  |                                                           |  |
|  |  Highlights: Mara North, Serengeti, Ngorongoro, Grumeti   |  |
|  |  Best Time: June - October                                |  |
|  |                                                           |  |
|  |  [Read the Full Story ->]                                 |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  +------------------------+  +-----------------------------+    |
|  |                        |  |                             |    |
|  |  [Image: Family at     |  |  [Image: Couple on        |    |
|  |   bush breakfast,      |  |   private beach,           |    |
|  |   kids smiling]        |  |   turquoise water]         |    |
|  |                        |  |                             |    |
|  |  FAMILY JOURNEY        |  |  BEACH & BUSH              |    |
|  |  8 DAYS | 3 LOCATIONS  |  |  12 DAYS | 5 LOCATIONS    |    |
|  |                        |  |                             |    |
|  |  A Family's Safari     |  |  Mara & Beach Escape       |    |
|  |  Adventure             |  |                             |    |
|  |  -------------------   |  |  ---------------------     |    |
|  |  Designed for families |  |  The perfect combination   |    |
|  |  with children 6-16.   |  |  of Big Five thrills and   |    |
|  |  Child-friendly lodges,|  |  Indian Ocean relaxation.  |    |
|  |  private guides, and   |  |  Begin in the Mara, end    |    |
|  |  flexible pacing.      |  |  on the white sands of     |    |
|  |                        |  |  Diani Beach.              |    |
|  |  Highlights: Mara,     |  |                             |    |
|  |  Amboseli, Nairobi     |  |  Highlights: Mara, Diani,  |    |
|  |  Best Time: Year-round |  |  Watamu, Lamu              |    |
|  |                        |  |  Best Time: Year-round     |    |
|  |  [Read the Story]      |  |  [Read the Story]          |    |
|  +------------------------+  +-----------------------------+    |
|                                                                  |
|  +------------------------+  +-----------------------------+    |
|  |                        |  |                             |    |
|  |  [Image: Elephant      |  |  [Image: Hot air balloon   |    |
|  |   with Kilimanjaro     |  |   over savanna, people      |    |
|  |   backdrop]            |  |   in basket]               |    |
|  |                        |  |                             |    |
|  |  WILDLIFE SAFARI       |  |  FLY-IN SAFARI             |    |
|  |  7 DAYS | 3 LOCATIONS  |  |  6 DAYS | 3 LOCATIONS      |    |
|  |                        |  |                             |    |
|  |  The Big Five Classic  |  |  The Sky Safari            |    |
|  |  --------------------- |  |  ----------------          |    |
|  |  The essential Kenya   |  |  Skip the drives. Fly      |    |
|  |  safari: Mara,         |  |  between Kenya's finest    |    |
|  |  Amboseli, and         |  |  parks in a private        |    |
|  |  Samburu. Iconic       |  |  aircraft, landing on      |    |
|  |  wildlife, iconic      |  |  airstrips in the bush.    |    |
|  |  landscapes.           |  |                            |    |
|  |                        |  |                            |    |
|  |  Highlights: Mara,     |  |  Highlights: Mara,         |    |
|  |  Amboseli, Samburu     |  |  Amboseli, Laikipia        |    |
|  |  Best Time: Year-round |  |  Best Time: Year-round     |    |
|  |                        |  |                            |    |
|  |  [Read the Story]      |  |  [Read the Story]          |    |
|  +------------------------+  +-----------------------------+    |
|                                                                  |
|  [Load More Collections]                                         |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Featured Card (top):** Full-width with ultra-wide 21:9 image. Duration + location count as meta. Highlights list + best time. NO PRICE.
- **Secondary Cards:** 2-column grid. 4:5 image. Category eyebrow, duration/locations meta (DM Sans 12px), serif headline (28px), narrative excerpt (4 sentences), highlights list, best time tag. NO PRICE.
- **Filter tabs:** All collection categories. DM Sans 13px uppercase.
- **Hover:** Image darkens, headline shifts right, arrow animates.

---

### Section 4.3: Why Book With Us

```
+------------------------------------------------------------------+
|                                                                  |
|  THE AURA DIFFERENCE                                             |
|                                                                  |
|  +--------------+  +--------------+  +--------------+          |
|  | [Icon]       |  | [Icon]       |  | [Icon]       |          |
|  | Tailor-Made  |  | Expert       |  | Conservation |          |
|  |              |  | Guides       |  | Partner      |          |
|  | Every safari |  | 20+ years    |  | 5% of every  |          |
|  | is designed  |  | experience   |  | booking to   |          |
|  | from scratch |  | per guide    |  | local projects|         |
|  | around YOU.  |  |              |  |              |          |
|  +--------------+  +--------------+  +--------------+          |
|                                                                  |
|  [Design My Safari]                                              |
|                                                                  |
+------------------------------------------------------------------+
```

---

## 5. SAFARI STORY — THE SAFARI VLOG TEMPLATE

**Concept:** When a user clicks a safari collection, they enter a long-form "safari vlog" — an immersive story that walks them through the journey day by day. Pricing ONLY appears at the very bottom after the full story, behind a "Request a Quote" CTA.

```
+------------------------------------------------------------------+
|                                                                  |
|  [FULL-VIEWPORT VIDEO: Aerial shot of migration crossing,      |
|   dramatic music, title card overlay]                          |
|                                                                  |
|  AURA SAFARIS                              [X] Close           |
|                                                                  |
|                                                                  |
|  WILDLIFE SAFARI        10 DAYS  |  4 LOCATIONS                 |
|                                                                  |
|  The Great Migration Expedition                                  |
|                                                                  |
|  Follow the ancient path of two million wildebeest              |
|  across the Serengeti-Mara ecosystem.                           |
|                                                                  |
|  [Scroll to begin the journey v]                                 |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 5.2: Story Introduction

```
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+    +-----------------------------+   |
|  |                        |    |                             |   |
|  |  This is not a         |    |  [Map: Route visualization  |   |
|  |  holiday. It is a      |    |   showing 4 locations       |   |
|  |  pilgrimage — one      |    |   connected by dotted line] |   |
|  |  that has been         |    |                             |   |
|  |  repeated for two      |    |  Your Journey               |   |
|  |  million years.        |    |                             |   |
|  |                        |    |  Nairobi -> Mara North     |   |
|  |  The Great Migration   |    |  -> Serengeti -> Ngorongoro|   |
|  |  is the largest        |    |                             |   |
|  |  overland mammal       |    |  10 Days  |  4 Locations   |   |
|  |  migration on Earth.   |    |  Flights: 2 included        |   |
|  |  Two million           |    |                             |   |
|  |  wildebeest, hundreds  |    |  [Download Full Itinerary]  |   |
|  |  of thousands of       |    |                             |   |
|  |  zebra, and a cast of  |    +-----------------------------+   |
|  |  predators following   |                                    |
|  |  in their wake.        |                                    |
|  |                        |                                    |
|  |  Our expedition        |                                    |
|  |  follows their path    |                                    |
|  |  across four of East   |                                    |
|  |  Africa's most iconic  |                                    |
|  |  wilderness areas.     |                                    |
|  |                        |                                    |
|  +------------------------+                                    |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 5.3: Day-by-Day Story (Scrollable Vlog)

```
+------------------------------------------------------------------+
|                                                                  |
|  THE JOURNEY                                                     |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |  DAY 1                                                    |  |
|  |  =====                                                    |  |
|  |                                                           |  |
|  |  +---------------------+  +---------------------------+   |  |
|  |  |                     |  |                           |   |  |
|  |  | [Image: Nairobi    |  |  Arrival in Nairobi       |   |  |
|  |  |  skyline, giraffe   |  |                           |   |  |
|  |  |  centre]            |  |  Your journey begins at   |   |  |
|  |  |                     |  |  Giraffe Manor, where     |   |  |
|  |  |                     |  |  you'll share breakfast   |   |  |
|  |  |                     |  |  with endangered Rothschild|  |  |
|  |  |                     |  |  giraffes...              |   |  |
|  |  |                     |  |                           |   |  |
|  |  +---------------------+  +---------------------------+   |  |
|  |                                                           |  |
|  |  Accommodation: Giraffe Manor                             |  |
|  |  Meals: Dinner included                                   |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |  DAY 2-4                                                  |  |
|  |  ========                                                 |  |
|  |                                                           |  |
|  |  +---------------------------+  +---------------------+   |  |
|  |  |                           |  |                     |   |  |
|  |  |  The Heart of the Mara    |  | [Image: Lion pride  |   |  |
|  |  |                           |  |  on rocks, wide     |   |  |
|  |  |  Fly north to the Mara,   |  |  savanna behind]    |   |  |
|  |  |  where the great plains   |  |                     |   |  |
|  |  |  unfold before you.       |  |                     |   |  |
|  |  |  Three days of game       |  |                     |   |  |
|  |  |  drives, bush walks,      |  |                     |   |  |
|  |  |  and sundowners...        |  |                     |   |  |
|  |  |                           |  |                     |   |  |
|  |  +---------------------------+  +---------------------+   |  |
|  |                                                           |  |
|  |  Accommodation: Mara Plains Camp                          |  |
|  |  Meals: All inclusive                                     |  |
|  |  Activities: Game drives, bush walks, night drives        |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |  DAY 5-7                                                  |  |
|  |  ========                                                 |  |
|  |                                                           |  |
|  |  [FULL-WIDTH IMAGE: Wildebeest crossing, dramatic]        |  |
|  |                                                           |  |
|  |  Following the Migration                                  |  |
|  |                                                           |  |
|  |  Cross into the Serengeti, where the migration            |  |
|  |  unfolds in its full, thundering glory...                 |  |
|  |                                                           |  |
|  |  Accommodation: Singita Sabora                            |  |
|  |  Meals: All inclusive                                     |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  [Days 8-10 continue similarly...]                               |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 5.4: What's Included

```
+------------------------------------------------------------------+
|                                                                  |
|  WHAT'S INCLUDED                                                 |
|                                                                  |
|  +----------------+  +----------------+  +----------------+     |
|  | [Check]        |  | [Check]        |  | [Check]        |     |
|  | All flights    |  | All accommodation|  | All meals &    |     |
|  | within Kenya   |  | (luxury camps) |  | drinks         |     |
|  | & Tanzania     |  |                |  |                |     |
|  +----------------+  +----------------+  +----------------+     |
|                                                                  |
|  +----------------+  +----------------+  +----------------+     |
|  | [Check]        |  | [Check]        |  | [Check]        |     |
|  | Private 4x4    |  | Expert guide   |  | Park fees &    |     |
|  | vehicle        |  | throughout     |  | conservancy    |     |
|  |                |  |                |  | fees           |     |
|  +----------------+  +----------------+  +----------------+     |
|                                                                  |
|  +----------------+  +----------------+  +----------------+     |
|  | [Check]        |  | [Check]        |  | [Check]        |     |
|  | 24/7 support   |  | Airport        |  | Bottled water  |     |
|  |                |  | transfers      |  | & refreshments |     |
|  +----------------+  +----------------+  +----------------+     |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 5.5: The Story Conclusion + Pricing Reveal

```
+------------------------------------------------------------------+
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  [FULL-WIDTH IMAGE: Sundowner drinks, golden hour,        |  |
|  |   silhouette of acacia tree]                              |  |
|  |                                                           |  |
|  |  This is a journey that will recalibrate your             |  |
|  |  sense of wonder. Ten days, four wilderness areas,        |  |
|  |  and moments that will live in your memory forever.       |  |
|  |                                                           |  |
|  |  Every Aura safari is tailor-made. The journey above      |  |
|  |  is a starting point — we craft each expedition           |  |
|  |  around your rhythm, your interests, and your dreams.     |  |
|  |                                                           |  |
|  |  - - - - - - - - - - - - - - - - - - - - - - - - - -   |  |
|  |                                                           |  |
|  |  INVESTMENT                                               |  |
|  |                                                           |  |
|  |  From $8,500 USD per person sharing                       |  |
|  |  Based on 2 travellers                                    |  |
|  |                                                           |  |
|  |  [REQUEST A PERSONALISED QUOTE]                           |  |
|  |                                                           |  |
|  |  Or speak to our team: +254 724 428 867                   |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Pricing ONLY appears at the bottom** of the story, after the user has read the full journey.
- "Investment" not "Price" — reframing.
- "From $X,XXX USD per person sharing" — clear but not prominent.
- CTA is "Request a Personalised Quote" — not "Book Now." This leads to the Enquiry form.
- Phone number always available.

---

## 6. WILDLIFE HUB PAGE — THE FIELD GUIDE

**Concept:** Inspired by Expert Africa's Wildlife section. This is a **field guide disguised as a magazine** — each animal has a story profile, not just facts. The page feels like opening a beautiful wildlife encyclopedia. Clicking a species leads to a Wildlife Story page (Section 7).

```
+------------------------------------------------------------------+
|                                                                  |
|  [Video: Slow-motion cheetah sprint, dust trail, 70vh]         |
|                                                                  |
|  WILDLIFE                                                        |
|  ----------------------------------------------------------      |
|  The characters that make every safari unforgettable             |
|                                                                  |
|  [Search wildlife...]  [All] [Big Five] [Cats] [Elephants]      |
|  [Birds] [Predators] [Prey] [Endangered] [Nocturnal]            |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 6.2: Featured Species — Cover Story

```
+------------------------------------------------------------------+
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  [FULL-BLEED IMAGE: Lion portrait, dramatic side-light]   |  |
|  |                                                           |  |
|  |  THE BIG FIVE                                               |  |
|  |                                                           |  |
|  |  Lion — Panthera leo                                      |  |
|  |  -----------------------------------------------------     |  |
|  |                                                           |  |
|  |  The Marsh Pride has called the Mara North home for       |  |
|  |  three generations. Ranger David knows each lioness       |  |
|  |  by name, each cub by personality. Their story is the     |  |
|  |  story of the Mara itself.                                |  |
|  |                                                           |  |
|  |  [Read Their Story ->]    [Watch: A Morning with Lions]   |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 6.3: Species Grid — The Field Guide

```
+------------------------------------------------------------------+
|                                                                  |
|  THE BIG FIVE                                                    |
|                                                                  |
|  +----------------+  +----------------+  +----------------+     |
|  |                |  |                |  |                |     |
|  | [Line drawing  |  | [Image:        |  | [Image:        |     |
|  |  or artistic   |  |  Elephant      |  |  Buffalo herd, |     |
|  |  portrait:     |  |  portrait,     |  |  dramatic      |     |
|  |  Lion]         |  |  tusks,        |  |  close-up]     |     |
|  |                |  |  Kilimanjaro   |  |                |     |
|  |                |  |  bg]           |  |                |     |
|  |  LION          |  |  ELEPHANT      |  |  BUFFALO       |     |
|  |  Panthera leo  |  |  Loxodonta     |  |  Syncerus      |     |
|  |                |  |  africana      |  |  caffer        |     |
|  |  Seen: 95%     |  |  Seen: 98%     |  |  Seen: 92%     |     |
|  |  of safaris    |  |  of safaris    |  |  of safaris    |     |
|  |                |  |                |  |                |     |
|  |  [Read Story]  |  |  [Read Story]  |  |  [Read Story]  |     |
|  +----------------+  +----------------+  +----------------+     |
|                                                                  |
|  +----------------+  +----------------+                          |
|  |                |  |                |                          |
|  | [Image:        |  | [Image:        |                          |
|  |  Leopard in    |  |  Rhino with    |                          |
|  |  tree,         |  |  calf,         |                          |
|  |  golden light] |  |  sunset]       |                          |
|  |                |  |                |                          |
|  |  LEOPARD       |  |  RHINO         |                          |
|  |  Panthera      |  |  Diceros/      |                          |
|  |  pardus        |  |  Ceratotherium |                          |
|  |                |  |                |                          |
|  |  Seen: 85%     |  |  Seen: 90%     |                          |
|  |  of safaris    |  |  of safaris    |                          |
|  |                |  |                |                          |
|  |  [Read Story]  |  |  [Read Story]  |                          |
|  +----------------+  +----------------+                          |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
|  THE CAT FAMILY                                                  |
|                                                                  |
|  +----------------+  +----------------+  +----------------+     |
|  |                |  |                |  |                |     |
|  | [Image:        |  | [Image:        |  | [Image:        |     |
|  |  Cheetah on    |  |  Serval in     |  |  Caracal at    |     |
|  |  termite mound]|  |  tall grass]   |  |  dusk]         |     |
|  |                |  |                |  |                |     |
|  |  CHEETAH       |  |  SERVAL        |  |  CARACAL       |     |
|  |  Acinonyx      |  |  Leptailurus   |  |  Caracal       |     |
|  |  jubatus       |  |  serval        |  |  caracal       |     |
|  |                |  |                |  |                |     |
|  |  Seen: 70%     |  |  Seen: 40%     |  |  Seen: 25%     |     |
|  |  of safaris    |  |  of safaris    |  |  of safaris    |     |
|  |                |  |                |  |                |     |
|  |  [Read Story]  |  |  [Read Story]  |  |  [Read Story]  |     |
|  +----------------+  +----------------+  +----------------+     |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
|  [More categories: Elephants, Giraffes, Birds, Predators,       |
|   Prey, Endangered, Nocturnal...]                               |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Species Cards:** 3-column grid. 1:1 square image (artistic/illustrated style preferred over tourist photos). Common name in Instrument Serif 24px. Scientific name in DM Sans 14px italic, `--dust-gray`. Sighting frequency percentage. "Read Story" text link.
- **Cards grouped by family/category** with section dividers.
- **NO dry facts.** Each card is an invitation to a story.
- **Art style:** Mix of artistic illustrations (like Expert Africa's line drawings) and premium photography. Consistent warm desaturation.
- **Search + Filter:** Search bar at top + category filter pills.

---

### Section 6.4: Wildlife Calendar

```
+------------------------------------------------------------------+
|                                                                  |
|  WHEN TO SEE WHAT                                                |
|                                                                  |
|  [Interactive calendar — months across top, species down side]   |
|                                                                  |
|              Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct   |
|              ---  ---  ---  ---  ---  ---  ---  ---  ---  ---   |
|  Great       |||| |||| ||||                          |||| ||||  |
|  Migration        |||| |||| |||| |||| |||| |||| |||| ||||       |
|  ----------------------------------------------------------------|
|  Calving                   |||| ||||                            |
|  Season                         |||| |||| ||||                   |
|  ----------------------------------------------------------------|
|  Predator                              |||| |||| |||| ||||      |
|  Action                                     |||| |||| |||| ||||  |
|  ----------------------------------------------------------------|
|  Elephant    |||| |||| |||| |||| |||| |||| |||| |||| |||| ||||  |
|  ----------------------------------------------------------------|
|  Cats        |||| |||| |||| |||| |||| |||| |||| |||| |||| ||||  |
|  ----------------------------------------------------------------|
|  Wildebeest  |||| |||| |||| |||| |||| |||| |||| |||| |||| ||||  |
|                                                                  |
|  Click any highlighted month to see recommended safaris          |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** CSS Grid-based calendar. Each cell is a colored block indicating sighting quality (█ = excellent, ░ = good, blank = unlikely). Clicking a month filters safari recommendations. Clean, minimal — NOT a data table. More like a visual timeline.

---

## 7. WILDLIFE STORY — SPECIES PROFILE VLOG

**Concept:** Clicking any species opens a long-form "species story" — a magazine article about that animal in the context of Aura's safaris. Mixes natural history with personal ranger stories. Related safaris appear at the bottom.

```
+------------------------------------------------------------------+
|                                                                  |
|  [FULL-VIEWPORT IMAGE: Lion portrait, extreme close-up,        |
|   every whisker visible, golden rim light]                     |
|                                                                  |
|  AURA SAFARIS                              [X] Close           |
|                                                                  |
|                                                                  |
|  THE BIG FIVE                                                    |
|                                                                  |
|  Lion                                                            |
|  Panthera leo                                                    |
|                                                                  |
|  [Scroll to read v]                                              |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 7.2: Species Story Content

```
+------------------------------------------------------------------+
|                                                                  |
|  +------------------------+    +-----------------------------+   |
|  |                        |    |                             |   |
|  |  The lion is not the   |    |  [FACT CARD]                |   |
|  |  king of the jungle.   |    |                             |   |
|  |  He is the king of     |    |  Weight: 150-250kg          |   |
|  |  the savanna — and     |    |  Lifespan: 10-14 years      |   |
|  |  even that title       |    |  Diet: Carnivore            |   |
|  |  flatters him.         |    |  Status: Vulnerable         |   |
|  |                        |    |  Best seen: Mara North      |   |
|  |  The truth is, lions   |    |                             |   |
|  |  sleep twenty hours    |    |  [IUCN: Vulnerable badge]   |   |
|  |  a day. They are       |    |                             |   |
|  |  bullies at the        |    +-----------------------------+   |
|  |  dinner table,         |                                    |
|  |  thieves of other      |    +-----------------------------+   |
|  |  hunters' kills. But   |    |                             |   |
|  |  when they choose to   |    |  [Audio: Lion roar]         |   |
|  |  be magnificent —      |    |  [Play button]              |   |
|  |  when the pride        |    |  Listen to a lion's roar    |   |
|  |  moves at dawn, when   |    |                             |   |
|  |  the males roar at     |    +-----------------------------+   |
|  |  dusk — there is       |                                    |
|  |  nothing on Earth      |                                    |
|  |  that compares.        |                                    |
|  |                        |                                    |
|  +------------------------+                                    |
|                                                                  |
|  +-----------------------------+                                |
|  |                             |                                |
|  |  [FULL-WIDTH IMAGE: Pride   |                                |
|  |   of lions walking across   |                                |
|  |   savanna at dawn]          |                                |
|  |                             |                                |
|  |  The Marsh Pride: 3         |                                |
|  |  generations of lions       |                                |
|  |  in the Mara North          |                                |
|  +-----------------------------+                                |
|                                                                  |
|  +------------------------+    +-----------------------------+   |
|  |                        |    |                             |   |
|  |  At Aura, we know      |    |  [RANGER PROFILE]           |   |
|  |  lions. Not from       |    |                             |   |
|  |  documentaries —       |    |  [Photo: David Ochieng]     |   |
|  |  from mornings.        |    |                             |   |
|  |  Hundreds of mornings  |    |  "I've watched the Marsh    |   |
|  |  shared with the       |    |   Pride for eleven years.   |   |
|  |  Marsh Pride in the    |    |   I know which cub will be  |   |
|  |  Mara North.           |    |   trouble. I know which     |   |
|  |                        |    |   lioness is the best       |   |
|  |  Ranger David Ochieng  |    |   hunter."                  |   |
|  |  has tracked this      |    |                             |   |
|  |  pride for eleven      |    |  — David Ochieng,           |   |
|  |  years. He knows       |    |    Lead Ranger              |   |
|  |  which cub will be     |    |                             |   |
|  |  trouble. He knows     |    |  [Read David's Story]       |   |
|  |  which lioness is      |    |                             |   |
|  |  the best hunter.      |    +-----------------------------+   |
|  |                        |                                    |
|  |  When you travel       |                                    |
|  |  with Aura, you don't  |                                    |
|  |  just see lions. You   |                                    |
|  |  meet them.            |                                    |
|  |                        |                                    |
|  +------------------------+                                    |
|                                                                  |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                  |
|  WHERE TO SEE LIONS WITH AURA                                    |
|                                                                  |
|  +------------------+  +------------------+  +----------------+ |
|  | [Image]          |  | [Image]          |  | [Image]        | |
|  | The Big Five     |  | The Great        |  | Family Safari  | |
|  | Classic          |  | Migration        |  | Adventure      | |
|  +------------------+  +------------------+  +----------------+ |
|  | 7 Days | 3 Parks |  | 10 Days | 4 Parks |  | 8 Days | 3 Parks| |
|  +------------------+  +------------------+  +----------------+ |
|  | [View Safari]    |  | [View Safari]    |  | [View Safari]  | |
|  +------------------+  +------------------+  +----------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Hero:** Full-viewport artistic photograph. Common name (large serif). Scientific name (DM Sans italic, smaller).
- **Content:** Single-column narrative (max-width 680px) with fact cards, audio embeds (lion roar!), ranger profiles, and full-width images.
- **Fact Card:** Right-aligned sticky card with key facts. IUCN status badge.
- **Ranger Profile:** Card with photo, quote, name, title.
- **Where to See:** Related safaris at bottom — duration + parks count only. NO PRICING.

---

## 8. STORIES HUB — THE EDITORIAL ARCHIVE

**Concept:** A complete editorial archive — all blog posts, wildlife reports, conservation updates, and guide dispatches. This is the "back catalog" of the Aura magazine. Filterable by category and contributor (like Angama's blog).

```
+------------------------------------------------------------------+
|                                                                  |
|  [Image: Guide writing in journal by firelight, intimate]       |
|                                                                  |
|  STORIES                                                         |
|  ----------------------------------------------------------      |
|  Dispatches from the field                                       |
|                                                                  |
|  [Search stories...]                                             |
|                                                                  |
|  Category: [All V]  Author: [All V]  [Reset]                    |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 8.2: Featured Story — Latest Issue

```
+------------------------------------------------------------------+
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |  LATEST STORY                                             |  |
|  |                                                           |  |
|  |  +---------------------+  +---------------------------+   |  |
|  |  |                     |  |                           |   |  |
|  |  | [Large image:       |  |  THIS WEEK AT AURA #42    |   |  |
|  |  |  Wildebeest herd    |  |                           |   |  |
|  |  |  at sunrise,        |  |  The Migration Has        |   |  |
|  |  |  dramatic]          |  |  Arrived                  |   |  |
|  |  |                     |  |                           |   |  |
|  |  |                     |  |  5 July 2026  |  8 min    |   |  |
|  |  |                     |  |  By David Ochieng         |   |  |
|  |  |                     |  |                           |   |  |
|  |  |                     |  |  Two million wildebeest   |   |  |
|  |  |                     |  |  have crossed the Sand    |   |  |
|  |  |                     |  |  River. The Mara is       |   |  |
|  |  |                     |  |  alive with predator      |   |  |
|  |  |                     |  |  action...                |   |  |
|  |  |                     |  |                           |   |  |
|  |  |                     |  |  [Read the Full Story ->] |   |  |
|  |  |                     |  |                           |   |  |
|  |  +---------------------+  +---------------------------+   |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Section 8.3: Stories Archive — Editorial Grid

```
+------------------------------------------------------------------+
|                                                                  |
|  RECENT STORIES                                                  |
|                                                                  |
|  +------------------+  +------------------+  +----------------+ |
|  |                  |  |                  |  |                | |
|  | [Image]          |  | [Image]          |  | [Image]        | |
|  |                  |  |                  |  |                | |
|  | WILDLIFE         |  | CONSERVATION     |  | GUIDE STORY    | |
|  | 28 Jun  | 6min  |  | 20 Jun  | 12min |  | 15 Jun  | 8min | |
|  |                  |  |                  |  |                | |
|  | Why November is  |  | The Last Black   |  | A Day in the   | |
|  | the Secret Season|  | Rhinos of Tsavo  |  | Life of a      | |
|  |                  |  |                  |  | Safari Guide   | |
|  | Everyone talks   |  | A decade of      |  | 4:45 AM. The   | |
|  | about July and   |  | protection, and  |  | alarm doesn't  | |
|  | October. But the |  | the numbers are  |  | go off — I was | |
|  | real magic       |  | finally turning. |  | already awake, | |
|  | happens in the   |  | Meet the rangers |  | listening to   | |
|  | quiet months.    |  | who risk         |  | lions...       | |
|  |                  |  | everything.      |  |                | |
|  | [Read Story]     |  | [Read Story]     |  | [Read Story]   | |
|  +------------------+  +------------------+  +----------------+ |
|                                                                  |
|  +------------------+  +------------------+  +----------------+ |
|  |                  |  |                  |  |                | |
|  | [Image]          |  | [Image]          |  | [Image]        | |
|  |                  |  |                  |  |                | |
|  | GUEST STORY      |  | WILDLIFE         |  | FIELD GUIDE    | |
|  | 10 Jun  | 10min |  | 5 Jun  | 7min   |  | 1 Jun  | 15min | |
|  |                  |  |                  |  |                | |
|  | "We Came for     |  | The Leopard Who  |  | Identifying    | |
|  | the Animals,     |  | Hunts Crocodiles |  | Big Cat Tracks | |
|  | Stayed for the   |  |                  |  |                | |
|  | People"          |  | A sighting that  |  | A field guide  | |
|  |                  |  | left even our    |  | to reading     | |
|  | The Johnsons'    |  | most experienced |  | spoor, scat,   | |
|  | first safari     |  | guides           |  | and signs in   | |
|  | changed          |  | speechless.      |  | the bush.      | |
|  | everything.      |  |                  |  |                | |
|  |                  |  | [Read Story]     |  | [Read Story]   | |
|  | [Read Story]     |  |                  |  |                | |
|  +------------------+  +------------------+  +----------------+ |
|                                                                  |
|  [Load More Stories]                                             |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **3-column editorial grid.** NOT 2-column — more density for archive feel.
- **Each card:** 4:3 landscape image. Category eyebrow (DM Sans 12px uppercase). Date + reading time meta. Serif headline (22px). Narrative excerpt (3 sentences). "Read Story" text link.
- **Filter:** Category dropdown + Author dropdown (like Angama's blog). Shows the breadth of content.
- **Infinite scroll** for archive feel.

---

## 9. CMS ARCHITECTURE NOTES

### Why Sanity CMS (or similar headless CMS) is essential:

| Content Type | CMS Schema | Frequency |
|---|---|---|
| Experience Stories | `experience` (title, category, heroVideo, body [portable text], readingTime, whatToExpect [array], relatedExperiences) | ~20 items |
| Safari Collections | `safari` (title, collection, heroVideo, intro, days [array of day objects], included [array], investment, relatedSafaris) | ~15 items |
| Wildlife Species | `wildlife` (commonName, scientificName, category, heroImage, body, facts [key-value], audioFile, iucnStatus, rangerQuote, relatedSafaris) | ~30-50 items |
| Stories/Blog | `story` (title, category, author, heroImage, body [portable text], readingTime, publishedAt) | Weekly |
| Rangers/Guides | `ranger` (name, role, bio, photo, yearsExperience, favoriteQuote) | ~8 items |

### Content Relationships:
```
Experience Story --> related to --> Experience Story (reciprocal)
Safari Story --> related to --> Wildlife Species (which animals you'll see)
Wildlife Story --> related to --> Safari Story (which safaris feature this animal)
Story/Blog --> tagged with --> Wildlife, Experience, or Safari
```

### Editorial Workflow:
1. **Stories** published weekly (Monday dispatch)
2. **Wildlife** updated seasonally (migration reports, new sightings)
3. **Safaris** updated as collections evolve
4. **Experiences** updated as new activities are added

### Key Design Principles:
1. **NEVER show pricing on listing pages.** Only at the bottom of Safari Story pages.
2. **Every piece of content is a story first.** Facts support the narrative; they don't replace it.
3. **Reading time, not price.** Meta information is always "8 min read" or "12 min watch" — never "$X,XXX."
4. **Rangers are characters.** Every story has a human voice — not just a company voice.
5. **Visuals are editorial, not stock.** Images feel like National Geographic, not Shutterstock.

---

## SUMMARY: WHAT CHANGED FROM V1

| Element | V1 (Old) | V2 (New Magazine Style) |
|---|---|---|
| **Curated Safaris (Home)** | 3-card grid with prices | Story vlog snippets, NO prices, "Watch the Story" CTAs |
| **Safaris Page** | Filterable product grid with "$X,XXX USD" | Editorial collections grid, story cards, NO prices |
| **Safari Detail** | Side-drawer with itinerary + price | Full-page vlog story, day-by-day narrative, price at bottom |
| **Experience Page** | Masonry category grid | Magazine index with cover story + editorial grid |
| **Experience Detail** | Did not exist | Full vlog story page with narrative, video, what to expect |
| **Wildlife Page** | Big Five icons + calendar | Field guide with species stories, blog-style profiles |
| **Wildlife Detail** | Did not exist | Species vlog with facts, ranger profile, audio, related safaris |
| **Stories Page** | Basic article grid | Full editorial archive with filters, featured story, 3-col grid |
| **Pricing Strategy** | "From $X,XXX USD" on every card | Price only at bottom of Safari Story, "Request Quote" CTA |
| **Content Model** | Static pages | Sanity CMS: experiences, safaris, wildlife, stories |

---

*End of Wireframes v2.0 — Magazine-First Pivot*

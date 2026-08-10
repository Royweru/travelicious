## 1. COMPLETE SITE ARCHITECTURE

Mermaid

Fullscreen

Download

Copy

CodePreview

HOMEEXPERIENCEGALLERYABOUTSAFARISWILDLIFEENQUIRESTORIESDestination: Kenya

---

## 2. HOME PAGE: THE &BEYOND-INSPIRED LANDING

### Hero Section (Full Viewport, Cinematic)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Video Background: Slow aerial of Masai Mara at golden hour]  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  AURA                                                   │   │
│  │  SAFARIS              [Search]        [Menu ≡]          │   │
│  │  ──────────────                                         │   │
│  │                                                         │   │
│  │                                                         │   │
│  │  I DREAM OF                                             │   │
│  │  ─────────────────────────────────────────────────────    │   │
│  │  Journeys that                                          │   │
│  │  leave you                                              │   │
│  │  forever changed                                        │   │
│  │                                                         │   │
│  │  ┌─────────────────────┐                              │   │
│  │  │  START YOUR JOURNEY  │                              │   │
│  │  └─────────────────────┘                              │   │
│  │                                                         │   │
│  │                              ↓  [Scroll indicator]    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Video:** 15-20 second loop, compressed to <5MB, muted, autoplay, `playsinline`
    
- **Overlay:** Subtle gradient from bottom (`linear-gradient(to top, rgba(0,0,0,0.3), transparent 60%)`)
    
- **Navigation:** Transparent initially, transitions to `backdrop-blur-md bg-white/5 border-b border-white/10` on scroll
    
- **Logo:** Custom wordmark, white, tracking wide (`letter-spacing: 0.2em`)
    
- **Headline:** "Journeys that leave you forever changed" — **Instrument Serif**, 72px, white, `font-weight: 400`, `line-height: 1.1`
    
- **Eyebrow:** "I DREAM OF" — **DM Sans**, 14px, uppercase, `letter-spacing: 0.2em`, white at 70%
    
- **CTA:** Ghost button, 1px white border, white text, uppercase, `letter-spacing: 0.15em`. Hover: background fills white, text turns dark
    

**Animation:**

TypeScript

Copy

```typescript
// Framer Motion variant
const heroText = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      ease: [0.25, 1, 0.5, 1], // Custom cubic bezier — slow, luxurious
      duration: 1.4,
      staggerChildren: 0.15
    }
  }
}
```

---

### Section 2: The Philosophy (Editorial Split)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌────────────────────────┐    ┌─────────────────────────────┐   │
│  │                        │    │                             │   │
│  │   "We don't sell       │    │   [Image: Close-up of      │   │
│  │    safaris.            │    │    Maasai guide's hands     │   │
│  │    We craft            │    │    holding binoculars,      │   │
│  │    transformations."  │    │    shallow depth of field]  │   │
│  │                        │    │                             │   │
│  │   At Aura Safaris,     │    │                             │   │
│  │   every journey is      │    │                             │   │
│  │   designed around       │    │                             │   │
│  │   a single question:    │    │                             │   │
│  │   What will this        │    │                             │   │
│  │   trip change in you?   │    │                             │   │
│  │                        │    │                             │   │
│  │   [Read Our Story →]    │    │                             │   │
│  │                        │    │                             │   │
│  └────────────────────────┘    └─────────────────────────────┘   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────   │
│  • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Layout:** 45/55 split, text left, image right. Image bleeds to right edge (no container padding)
    
- **Quote:** Instrument Serif Italic, 42px, `--ink-editorial`
    
- **Body:** Inter, 18px, `line-height: 1.7`, `--ink-editorial` at 80%
    
- **Link:** "Read Our Story →" — DM Sans, 14px, uppercase, `letter-spacing: 0.1em`. Arrow animates right on hover
    
- **Divider:** Dotted line, `--dust-gray`, centered, 40% width
    

---

### Section 3: Featured Destinations (Horizontal Scroll Gallery)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│           WHERE THE WILD THINGS ARE                             │
│                                                                 │
│   Kenya's most extraordinary landscapes, curated for you        │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐  │
│  │            │  │            │  │            │  │          │  │
│  │ [Masai    │  │ [Amboseli  │  │ [Samburu   │  │ [Lamu    │  │
│  │  Mara]    │  │  &         │  │  &         │  │  Island] │  │
│  │            │  │  Tsavo]    │  │  Laikipia] │  │          │  │
│  │            │  │            │  │            │  │          │  │
│  │  MASAI    │  │  AMBOSELI  │  │  SAMBURU   │  │  LAMU    │  │
│  │  MARA     │  │  & TSAVO   │  │  & LAIKIPIA│  │  ISLAND  │  │
│  │  ──────── │  │  ───────── │  │  ───────── │  │  ─────── │  │
│  │  12 Safaris│  │  8 Safaris │  │  6 Safaris │  │  4 Safaris│  │
│  └────────────┘  └────────────┘  └────────────┘  └──────────┘  │
│                                                                 │
│   ←  →  [Custom thin arrows, no default carousel dots]          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Cards:** 4:5 aspect ratio, `border-radius: 0` (sharp, editorial), no shadow
    
- **Image treatment:** Slight desaturation (`filter: saturate(0.9)`), warm overlay on hover
    
- **Title:** Bottom-left, white, Instrument Serif, 28px
    
- **Meta:** Bottom-left, below title, DM Sans, 12px, uppercase, `letter-spacing: 0.15em`
    
- **Hover:** Image scales 1.03, title shifts up 8px, "Explore →" fades in
    
- **Scroll:** Horizontal drag (Framer Motion `drag="x"`), momentum-based, snap to card
    

**Animation:**

TypeScript

Copy

```typescript
const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { ease: [0.25, 1, 0.5, 1], duration: 0.6 }
  }
}
```

---

### Section 4: The Experience Promise (Three Pillars)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              THE AURA DIFFERENCE                                │
│                                                                 │
│   Three principles that define every journey we craft           │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │             │  │             │  │             │             │
│  │   [Icon:    │  │   [Icon:    │  │   [Icon:    │             │
│  │    Compass] │  │    Eye]     │  │    Heart]   │             │
│  │             │  │             │  │             │             │
│  │   EXPERT    │  │   INTIMATE  │  │   LASTING   │             │
│  │   GUIDANCE  │  │   ENCOUNTERS│  │   IMPACT    │             │
│  │             │  │             │  │             │             │
│  │   Local     │  │   Small     │  │   We partner│             │
│  │   guides    │  │   groups,   │  │   with      │             │
│  │   with      │  │   exclusive │  │   conserva- │             │
│  │   decades   │  │   access,   │  │   tion      │             │
│  │   of        │  │   no        │  │   projects  │             │
│  │   knowledge │  │   crowds    │  │   that      │             │
│  │             │  │             │  │   matter    │             │
│  │             │  │             │  │             │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Icons:** Custom line-drawn SVGs (not Lucide — too generic). Think: compass rose, eye with lashes, heart with roots
    
- **Titles:** DM Sans, 14px, uppercase, `letter-spacing: 0.2em`, `--ink-editorial`
    
- **Body:** Inter, 16px, `--ink-editorial` at 70%, centered, max-width 280px per column
    
- **Layout:** Three equal columns, generous padding (80px vertical)
    
- **Background:** `--savannah-cream`
    

---

### Section 5: Immersive Video Break

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Full-bleed video: Slow-motion wildebeest crossing,          │
│   dust rising, golden light. No overlay, pure image.]           │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Height:** 70vh
    
- **Video:** Autoplay, loop, muted, no controls visible
    
- **No text overlay** — this is a breathing moment. Pure atmosphere.
    
- **Transition:** Soft fade from previous section, soft fade to next
    

---

### Section 6: Curated Safaris (Filterable Grid)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              CURATED JOURNEYS                                   │
│                                                                 │
│   [All] [Fly-In] [Driving] [Family] [Honeymoon] [Photography]  │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                │
│  │ [Image]    │  │ [Image]    │  │ [Image]    │                │
│  │            │  │            │  │            │                │
│  │ FLY-IN     │  │ DRIVING    │  │ FLY-IN     │                │
│  │ ────────── │  │ ────────── │  │ ────────── │                │
│  │            │  │            │  │            │                │
│  │ The Great  │  │ Big Five   │  │ Mara &     │                │
│  │ Migration  │  │ Classic    │  │ Beach      │                │
│  │ Expedition │  │ Safari     │  │ Escape     │                │
│  │            │  │            │  │            │                │
│  │ 10 Days ·  │  │ 7 Days ·   │  │ 12 Days ·  │                │
│  │ 4 Locations│  │ 3 Locations│  │ 5 Locations│                │
│  │            │  │            │  │            │                │
│  │ From $4,200│  │ From $2,800│  │ From $5,500│                │
│  │            │  │            │  │            │                │
│  │ [♡] [View] │  │ [♡] [View] │  │ [♡] [View] │                │
│  └────────────┘  └────────────┘  └────────────┘                │
│                                                                 │
│   Showing 1-6 of 18    [1] [2] [3]  →                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Filter tabs:** DM Sans, 13px, uppercase, `letter-spacing: 0.1em`. Active: `--sunset-ember` underline. Inactive: `--ink-editorial` at 50%
    
- **Cards:** White background, no border-radius, subtle shadow on hover (`shadow-lg`)
    
- **Badge:** Top-left, `--fly-in-lavender` background, white text, small flag icon
    
- **Heart:** Top-right, circle outline, fills on click (Framer Motion `scale` spring)
    
- **Price:** Instrument Serif, 24px, `--sunset-ember`
    
- **Grid:** CSS Grid, `grid-template-columns: repeat(3, 1fr)`, gap 32px
    

---

### Section 7: Journal Preview (Stories Teaser)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────┐  ┌──────────────────┐  │
│  │                                     │  │                  │  │
│  │   STORIES FROM                      │  │  [Image:         │  │
│  │   THE WILD                          │  │   Giraffe close- │  │
│  │                                     │  │   up, editorial  │  │
│  │   Dispatches from our guides,       │  │   crop]          │  │
│  │   conservation updates, and         │  │                  │  │
│  │   the moments that make             │  │                  │  │
│  │   safari unforgettable.             │  │                  │  │
│  │                                     │  │                  │  │
│  │   [Read All Stories →]              │  │                  │  │
│  │                                     │  │                  │  │
│  │   ─────────────────────────────     │  │                  │  │
│  │                                     │  │                  │  │
│  │   The Great Migration:              │  │                  │  │
│  │   A Photographer's Diary            │  │                  │  │
│  │   October 12, 2025                  │  │                  │  │
│  │                                     │  │                  │  │
│  │   Why November is the               │  │                  │  │
│  │   Secret Season                     │  │                  │  │
│  │   September 28, 2025              │  │                  │  │
│  │                                     │  │                  │  │
│  └─────────────────────────────────────┘  └──────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Left column:** Sticky on scroll (until section ends)
    
- **Article list:** Minimal, title + date only. Hover: title shifts right 8px, `--sunset-ember` color
    
- **Right image:** 4:5 ratio, parallax scroll (moves slower than page)
    

---

### Section 8: Final CTA (Angama-Inspired)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Background: Full-bleed image of Kilimanjaro at dawn,          │
│   elephant silhouettes in foreground]                          │
│                                                                 │
│                                                                 │
│                                                                 │
│           Your journey begins                                   │
│           with a conversation                                   │
│                                                                 │
│           ┌─────────────────────────┐                          │
│           │   START YOUR ENQUIRY    │                          │
│           └─────────────────────────┘                          │
│                                                                 │
│           Or call us: +254 724 428 867                          │
│                                                                 │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Headline:** Instrument Serif Italic, 56px, white, centered
    
- **Button:** Solid `--sunset-ember`, white text, no border-radius, generous padding (20px 48px)
    
- **Phone:** DM Sans, 14px, uppercase, `letter-spacing: 0.1em`, white at 80%
    
- **Overlay:** Dark gradient from center outward (vignette effect)
    

---

### Footer

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────┐ │
│  │  AURA       │  │ DESTINATIONS│  │ EXPERIENCES │  │ CONNECT│ │
│  │  SAFARIS    │  │ Kenya       │  │ Safari      │  │ Instagram│
│  │             │  │ Tanzania    │  │ Photography │  │ Facebook │
│  │  Tailor-made│  │ Uganda      │  │ Family      │  │ Twitter  │
│  │  African    │  │ Rwanda      │  │ Honeymoon   │  │ YouTube  │
│  │  journeys.  │  │             │  │ Conservation│  │          │
│  │             │  │             │  │             │  │ Newsletter│
│  │  © 2025     │  │             │  │             │  │ [Email___]│
│  │             │  │             │  │             │  │ [Subscribe]│
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────┘ │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│  Terms · Privacy · Cookies · Sitemap                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. EXPERIENCE PAGE

### Hero

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Video: First-person view from safari vehicle, slow drive      │
│   through acacia woodland, dappled light]                     │
│                                                                 │
│  EXPERIENCES                                                    │
│  ─────────                                                      │
│  Every Aura journey is designed around what moves you           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 2: Experience Categories (Masonry Grid)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌────────────┐  ┌────────────────┐  ┌────────────┐            │
│  │            │  │                │  │            │            │
│  │  WILDLIFE  │  │   CULTURAL     │  │  LANDSCAPE │            │
│  │  ENCOUNTERS│  │   IMMERSION    │  │  & LIGHT   │            │
│  │            │  │                │  │            │            │
│  │  [Lion     │  │   [Maasai      │  │  [Hot air  │            │
│  │   portrait]│  │    ceremony]   │  │   balloon  │            │
│  │            │  │                │  │   over Mara]│            │
│  └────────────┘  └────────────────┘  └────────────┘            │
│                                                                 │
│  ┌────────────────┐  ┌────────────┐  ┌────────────────┐        │
│  │   CONSERVATION │  │  PHOTOGRAPHY │  │   WELLNESS     │        │
│  │   & COMMUNITY  │  │  SAFARIS     │  │   & RETREAT    │        │
│  │                │  │              │  │                │        │
│  └────────────────┘  └────────────┘  └────────────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Masonry:** Uneven heights, organic feel
    
- **Hover:** Image darkens, title appears from bottom, "Discover →" fades in
    
- **Typography:** Category name in Instrument Serif, 32px, white
    

---

## 4. GALLERY PAGE

### Hero

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Full-bleed slideshow: 5-second crossfades between           │
│   curated images, no controls visible, just pure image]       │
│                                                                 │
│  GALLERY                                                        │
│  Moments that words cannot capture                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 2: Filterable Masonry Gallery

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [All] [Wildlife] [Landscapes] [People] [Aerial] [Black & White]│
│                                                                 │
│  ┌────┐ ┌────────┐ ┌────┐ ┌────────┐ ┌────┐                   │
│  │    │ │        │ │    │ │        │ │    │                   │
│  │    │ │        │ │    │ │        │ │    │                   │
│  └────┘ │        │ └────┘ │        │ └────┘                   │
│  ┌────────┐ └────┘ ┌────────┐ └────┘                         │
│  │        │ ┌────┐ │        │ ┌────┐                         │
│  │        │ │    │ │        │ │    │                         │
│  └────────┘ └────┘ └────────┘ └────┘                         │
│                                                                 │
│  [Load More] — ghost button, centered                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- **Lightbox:** Click opens full-screen, dark background, image scales from thumbnail position
    
- **Filter:** Smooth masonry reflow (Framer Motion `layout` prop)
    
- **Images:** High-res, `quality={95}`, `placeholder="blur"`
    

---

## 5. ABOUT PAGE

### Hero

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Image: Founders or team in safari vehicle, candid moment]     │
│                                                                 │
│  ABOUT AURA                                                     │
│  ───────────                                                    │
│  Born from a love of Kenya's wild places                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 2: Story Timeline (Vertical Scroll)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  2018 ── Founded by two Kenyan guides with a                    │
│          shared vision                                          │
│                                                                 │
│  2019 ── First conservation partnership with                    │
│          Mara Elephant Project                                  │
│                                                                 │
│  2021 ── Expanded to Tanzania and Uganda                        │
│                                                                 │
│  2023 ── Recognized as Kenya's Leading Safari                  │
│          Operator (World Travel Awards)                         │
│                                                                 │
│  2025 ── 1,000th guest, 12,000 acres protected                 │
│                                                                 │
│  [Image alongside each milestone, alternating left/right]       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 3: Team Grid

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE PEOPLE BEHIND THE JOURNEYS                                 │
│                                                                 │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐              │
│  │ [Photo]│  │ [Photo]│  │ [Photo]│  │ [Photo]│              │
│  │        │  │        │  │        │  │        │              │
│  │ John   │  │ Sarah  │  │ David  │  │ Grace  │              │
│  │ Founder│  │ Head   │  │ Lead   │  │ Conser-│              │
│  │        │  │ Guide  │  │ Guide  │  │ vation │              │
│  │        │  │        │  │        │  │ Manager│              │
│  │ "I grew│  │ "Every │  │ "The   │  │ "We    │              │
│  │  up     │  │  trail │  │  Mara  │  │  don't │              │
│  │  tracking│  │  has a │  │  never │  │  just  │              │
│  │  lions" │  │  story"│  │  sleeps"│  │  take, │              │
│  │         │  │        │  │        │  │  we give"│             │
│  └────────┘  └────────┘  └────────┘  └────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. SAFARIS PAGE (Expert Africa-Inspired Information Architecture)

### Hero

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Image: Safari vehicle at sunrise, golden light, wide angle]   │
│                                                                 │
│  SAFARIS                                                        │
│  ───────                                                        │
│  Every journey, tailored to your rhythm                         │
│                                                                 │
│  [Kenya ▼] [Tanzania ▼] [Uganda ▼] [All Durations ▼]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 2: Package Grid (Same as Home Section 6, but full page)

### Section 3: Safari Collections (Horizontal Scroll)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  SAFARI COLLECTIONS                                             │
│                                                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│  │[Beach] │ │[Bird]  │ │[Cultural│ │[Family] │ │[Honey- │      │
│  │        │ │watching│ │        │ │        │ │ moon]  │      │
│  │        │ │        │ │        │ │        │ │        │      │
│  │ BEACH  │ │ BIRD-  │ │CULTURAL│ │ FAMILY │ │HONEY-  │      │
│  │HOLIDAYS│ │WATCHING│ │EXPERI- │ │SAFARIS │ │MOONS   │      │
│  │        │ │SAFARIS │ │ENCES   │ │        │ │        │      │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘      │
│                                                                 │
│   ←  →                                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. WILDLIFE PAGE

### Hero

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Video: Slow-motion cheetah sprint, dust trail]              │
│                                                                 │
│  WILDLIFE                                                       │
│  ───────                                                        │
│  The characters that make every safari unforgettable            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 2: The Big Five (Expert Africa-Style Illustrations)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE BIG FIVE                                                   │
│                                                                 │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │[Line   │  │[Line   │  │[Line   │  │[Line   │  │[Line   │   │
│  │ drawing│  │ drawing│  │ drawing│  │ drawing│  │ drawing│   │
│  │ of     │  │ of     │  │ of     │  │ of     │  │ of     │   │
│  │ lion]  │  │elephant│  │buffalo │  │ leopard│  │ rhino] │   │
│  │        │  │        │  │        │  │        │  │        │   │
│  │ LION   │  │ELEPHANT│  │BUFFALO │  │LEOPARD │  │RHINO   │   │
│  │ 95%    │  │ 98%    │  │ 92%    │  │ 85%    │  │ 90%    │   │
│  │ success│  │ success│  │ success│  │ success│  │ success│   │
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘   │
│                                                                 │
│  [Custom line-drawn illustrations, not photos — editorial feel] │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 3: Wildlife Calendar (When to See What)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  WHEN TO VISIT                                                  │
│                                                                 │
│  [Interactive calendar: Months across top, species down side]   │
│                                                                 │
│  Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec   │
│  ────────────────────────────────────────────────────────────   │
│  Great    ████ ████ ████                                      │
│  Migration     ████ ████ ████ ████ ████                        │
│  ────────────────────────────────────────────────────────────   │
│  Calving       ████ ████                                        │
│  Season           ████ ████                                    │
│  ────────────────────────────────────────────────────────────   │
│  Predator                   ████ ████ ████ ████              │
│  Action                          ████ ████ ████ ████          │
│                                                                 │
│  [Click month to see recommended safaris]                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. ENQUIRE PAGE (Singita-Inspired Multi-Step)

### Full-Screen Overlay (like Singita's search)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Close ✕                                                │   │
│  │                                                         │   │
│  │  Plan Your Journey                                      │   │
│  │                                                         │   │
│  │  Step 1 of 5                                            │   │
│  │  ────────                                               │   │
│  │  Step 2  Step 3  Step 4  Step 5                         │   │
│  │                                                         │   │
│  │  WHERE WOULD YOU LIKE TO GO?                            │   │
│  │                                                         │   │
│  │  ○ Masai Mara                                           │   │
│  │  ○ Amboseli & Tsavo                                     │   │
│  │  ○ Samburu & Laikipia                                   │   │
│  │  ○ Lamu Island                                          │   │
│  │  ○ Not sure — inspire me                                │   │
│  │                                                         │   │
│  │              ┌─────────────┐                            │   │
│  │              │  Continue → │                            │   │
│  │              └─────────────┘                            │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [Background: Subtle, slow-moving aerial of Kenyan landscape]   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Step 2: When**

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  WHEN ARE YOU TRAVELLING?                                       │
│                                                                 │
│  [Calendar picker: Shows migration patterns, green = best time] │
│                                                                 │
│  Flexible dates? [Toggle]                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Step 3: Who**

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  WHO IS TRAVELLING?                                             │
│                                                                 │
│  Adults: [−] 2 [+]    Children: [−] 0 [+]                       │
│                                                                 │
│  [ ] First-time safari    [ ] Returning guest                  │
│  [ ] Photography focus    [ ] Family-friendly                  │
│  [ ] Honeymoon            [ ] Solo traveller                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Step 4: Experience**

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  WHAT EXPERIENCE ARE YOU SEEKING?                               │
│                                                                 │
│  [Cards: Fly-in Safari] [Driving Safari] [Walking Safari]       │
│  [Beach Extension] [Cultural Immersion] [Photography Focus]       │
│                                                                 │
│  Budget range: [Slider: $2,000 — $15,000+]                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Step 5: Contact**

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  LET'S START THE CONVERSATION                                   │
│                                                                 │
│  Name:    [________________]                                      │
│  Email:   [________________]                                      │
│  Phone:   [________________]                                      │
│  Notes:   [________________]                                      │
│           [Any specific requests, dietary needs,                  │
│            dream sightings...]                                    │
│                                                                 │
│  [Submit Enquiry]                                                 │
│                                                                 │
│  Or call us directly: +254 724 428 867                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. STORIES PAGE (Journal/Editorial)

### Hero

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  [Image: Guide writing in journal, firelight, intimate]         │
│                                                                 │
│  STORIES                                                        │
│  ──────                                                         │
│  Dispatches from the field                                      │
│                                                                 │
│  [Search...]  [All] [Wildlife] [Conservation] [Guides] [Guests] │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 2: Featured Article (Hero Card)

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  [Full-width image: Dramatic, cinematic]                │   │
│  │                                                         │   │
│  │  CONSERVATION                                           │   │
│  │  ───────────                                            │   │
│  │  The Last Black Rhinos of Tsavo                         │   │
│  │                                                         │   │
│  │  A decade of protection, and the numbers are finally      │   │
│  │  turning. Meet the rangers who risk everything.         │   │
│  │                                                         │   │
│  │  By David Ochieng · October 3, 2025 · 8 min read        │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Section 3: Article Grid

plain

Copy

```plain
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                │
│  │ [Image]    │  │ [Image]    │  │ [Image]    │                │
│  │            │  │            │  │            │                │
│  │ WILDLIFE   │  │ GUIDE      │  │ GUEST      │                │
│  │ ─────────  │  │ STORY      │  │ STORY      │                │
│  │            │  │ ─────────  │  │ ─────────  │                │
│  │ Leopard    │  │ A Day in   │  │ "We Came   │                │
│  │ Spotting   │  │ the Life   │  │  for the   │                │
│  │ 101        │  │ of a       │  │  Animals,  │                │
│  │            │  │ Safari     │  │  Stayed    │                │
│  │            │  │ Guide      │  │  for the   │                │
│  │            │  │            │  │  People"   │                │
│  │ Sep 28     │  │ Sep 15     │  │ Sep 1      │                │
│  └────────────┘  └────────────┘  └────────────┘                │
│                                                                 │
│  [Load More]                                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. FIGMA SETUP: YOUR STARTING FRAMEWORK

### File Structure

plain

Copy



### Frame Setup

Table

Copy

|Breakpoint|Width|Grid|
|:--|:--|:--|
|Desktop|1440px|12-col, 80px gutter, 120px margin|
|Tablet|768px|8-col, 40px gutter, 60px margin|
|Mobile|375px|4-col, 20px gutter, 24px margin|

### Color Styles (Figma)

Table

Copy

|Name|Hex|Usage|
|:--|:--|:--|
|Sunset Ember|`#C75B2E`|Primary CTA, active states, prices|
|Acacia Green|`#2D4A3E`|Secondary, nature accents|
|Savannah Cream|`#F5F0EB`|Section backgrounds, paper feel|
|Ink Editorial|`#1C1917`|Primary text, headlines|
|Dust Gray|`#D4CFC8`|Borders, dividers, inactive|
|Fly-In Lavender|`#8B7F9E`|Badges, tags, secondary accents|
|Kilimanjaro Mist|`#6B7B6E`|Tertiary text, subtle elements|

### Text Styles (Figma)

Table

Copy

|Name|Font|Size|Weight|Line-Height|Letter-Spacing|
|:--|:--|:--|:--|:--|:--|
|Display|Instrument Serif|72px|400|1.1|-0.02em|
|H1|Instrument Serif|48px|400|1.2|-0.01em|
|H2|Instrument Serif|36px|400|1.3|0|
|H3|Instrument serif|24px|500|1.4|0.05em|
|Body Large|Inter|18px|400|1.7|0|
|Body|Inter|16px|400|1.7|0|
|Caption|DM Sans|14px|500|1.5|0.15em|
|Micro|DM Sans|12px|500|1.5|0.2em|
|Script Accent|Instrument Serif Italic|24px|400|1.4|0|

---

## 11. NEXT.JS COMPONENT ARCHITECTURE

plain

Copy

```plain
app/
├── (routes)/
│   ├── (marketing)/
│   │   ├── page.tsx              // HOME: Mounts dynamic hero, horizontal grids.
│   │   ├── about/page.tsx        // ABOUT: Mounts timeline and team UI.
│   │   └── stories/page.tsx      // STORIES: Mounts editorial masonry grid.
│   ├── (booking)/
│   │   └── enquire/page.tsx      // ENQUIRE: Mounts Zustand-backed multi-step form.
│   └── (catalog)/
│       ├── destinations/page.tsx // DESTINATIONS: Mounts vector map interaction.
│       └── safaris/
│           ├── page.tsx          // SAFARIS: 2-column grid and Side Drawer trigger.
│           └── [slug]/page.tsx   // DETAIL: Deep-linkable itinerary view.
├── layout.tsx                    // Root layout for global providers (Lenis, Motion).
├── globals.css                   // Tailwind directives.
│
features/                         // Domain-driven logic
├── safaris/
│   ├── components/               // PackageGrid, ItineraryDrawer
│   └── api/                      // getSafaris (FastAPI hooks)
├── booking/
│   ├── components/               // MultiStepForm, DatePicker
│   └── store.ts                  // Zustand state for conversion tracking
└── editorial/
│
components/
├── ui/                           // Dumb elements: Button, Sheet, Dialog
├── layout/                       // SiteHeader, SiteFooter
└── motion/                       // FadeInUp, ParallaxImage, HorizontalScroll
```

---

## 12. ANIMATION SYSTEM (The "Quiet Luxury" Motion Language)

TypeScript

Copy

```typescript
// lib/animations.ts

export const transitions = {
  luxury: {
    ease: [0.25, 1, 0.5, 1],    // Slow start, smooth deceleration
    duration: 1.2
  },
  quick: {
    ease: [0.4, 0, 0.2, 1],     // Standard material
    duration: 0.4
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 20
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.luxury
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { ...transitions.luxury, duration: 1.5 }
  }
};

export const horizontalScroll = {
  drag: "x" as const,
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 0.1
};
```
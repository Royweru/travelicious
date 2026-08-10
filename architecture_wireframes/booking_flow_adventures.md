# AURA SAFARIS — BOOKING & INQUIRY FLOW SYSTEM
## Architectural Wireframes v3.0 | 10X Designer + System Engineer Approach

---

> **Research Summary:** After dissecting the booking flows of Singita (5-step modal overlay), Angama (multi-step page with image-rich selections), Expert Africa (call-first + email form), and &Beyond (multi-step dedicated page with budget slider), a clear pattern emerges: **luxury safari brands don't offer instant online booking.** Instead, they use a sophisticated *inquiry → consultation → provisional hold → confirmation* pipeline. The UX goal is to make the inquiry feel effortless while capturing maximum intent signals. This document designs a dual-flow system: **Quick Inquiry** (modal) for casual browsers and **Plan Your Safari** (dedicated journey) for committed travellers — with an advanced **Direct Booking** layer for future growth.

---

## TABLE OF CONTENTS

1. [Philosophy: Inquiry vs Booking vs Reservation](#1-philosophy)
2. [Entry Points — Where Users Trigger the Flow](#2-entry-points)
3. [Flow A: Quick Inquiry Modal (5-Step Overlay)](#3-quick-inquiry-modal)
4. [Flow B: Plan Your Safari (Dedicated Journey Page)](#4-plan-your-safari-page)
5. [Flow C: Direct Booking with Payment (Advanced)](#5-direct-booking-advanced)
6. [Post-Submit Experience](#6-post-submit-experience)
7. [Admin Dashboard & CRM Integration](#7-admin-dashboard)
8. [Technical Architecture Notes](#8-technical-architecture)

---

## 1. PHILOSOPHY: INQUIRY vs BOOKING vs RESERVATION

### The Luxury Safari Sales Funnel

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   DISCOVER          INQUIRE           PLAN            CONFIRM   │
│   ────────          ───────           ────            ───────   │
│                                                                 │
│   [Read Story]  →  [Tell Us More]  →  [Review Quote]  →  [Pay] │
│        │                │                  │              │     │
│        ▼                ▼                  ▼              ▼     │
│   Safari Blog      Lead Captured      Itinerary        Booking  │
│   Wildlife Story   (24h response)    (Provisional)    Confirmed │
│   Experience                                │              │     │
│   Vlog                                      ▼              ▼     │
│                                    [Deposit Paid]    [Full Pay] │
│                                                                 │
│   ─────────────────────────────────────────────────────────────  │
│   FLOW A: Quick Inquiry (Modal) — 2 min, casual, soft CTA      │
│   FLOW B: Plan Your Safari (Page) — 5 min, committed, detailed │
│   FLOW C: Direct Booking (Advanced) — real-time availability    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Why Three Flows?

| Flow | User Mindset | Time | Commitment | Business Value |
|---|---|---|---|---|
| **A. Quick Inquiry** | "I'm interested, tell me more" | 1-2 min | Low — just a conversation starter | Lead capture at scale |
| **B. Plan Your Safari** | "I'm serious, help me plan" | 5-8 min | Medium — detailed requirements | Qualified lead with preferences |
| **C. Direct Booking** | "I know what I want, let me book" | 10-15 min | High — deposit/payment | Revenue capture, reduced friction |

### Key Insight from Research

**Singita** uses a 5-step modal — smooth, minimal, never leaves the page.
**Angama** uses a multi-step page with large images — immersive, emotional.
**Expert Africa** pushes you to CALL — human-first, high-touch.
**&Beyond** uses a dedicated multi-step page with budget slider — data-rich, segmented (traveller vs trade).

**Aura's approach:** Combine the best — Singita's modal smoothness + Angama's visual richness + &Beyond's data capture + Expert Africa's human touch. All flows feed a single CRM pipeline.

---

## 2. ENTRY POINTS — WHERE USERS TRIGGER THE FLOW

### Entry Point 2.1: Global Navigation (Always Visible)

```
+------------------------------------------------------------------+
|                                                                  |
|  AURA SAFARIS          [Destinations] [Experiences] [Safaris]   |
|                        [Wildlife] [Stories]                     |
|                                                                  |
|                        [PLAN YOUR SAFARI]  ← Primary CTA        |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** "Plan Your Safari" is the primary nav CTA — ghost button style, `--sunset-ember` border, appears on every page. Clicking opens Flow A (Quick Inquiry modal) or Flow B (dedicated page) based on user journey depth.

---

### Entry Point 2.2: Safari Story Page (Bottom CTA)

```
+------------------------------------------------------------------+
|                                                                  |
|              [FULL-WIDTH IMAGE: Sundowner silhouette]            |
|                                                                  |
|              Ready to experience this journey?                   |
|                                                                  |
|              [ PLAN THIS SAFARI ]                                |
|              Or speak to us: +254 724 428 867                    |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** "Plan This Safari" pre-fills the inquiry modal with the specific safari collection. One-click intent capture.

---

### Entry Point 2.3: Experience Story Page (Bottom CTA)

```
+------------------------------------------------------------------+
|                                                                  |
|              Ready to experience this for yourself?              |
|                                                                  |
|              [ REQUEST THIS EXPERIENCE ]                         |
|              Or call us: +254 724 428 867                        |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** "Request This Experience" pre-fills the experience name. Same modal, different context.

---

### Entry Point 2.4: Floating Action Button (Mobile)

```
+----------------------------------------------------------+
|                                                          |
|                                  +--------------------+  |
|                                  |     PLAN YOUR      |  |
|                                  |      SAFARI        |  |
|                                  +--------------------+  |
|                                                          |
+----------------------------------------------------------+
```

**Specs:** FAB on mobile only, bottom-right, `--sunset-ember` fill, white text. Fixed position. Slides up when user scrolls down content pages.

---

### Entry Point 2.5: Sticky Smart Prompt (Context-Aware)

```
+------------------------------------------------------------------+
|                                                                  |
|  [After 60s on Safari page, or scroll past 70% of content]       |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |  Interested in The Great Migration Expedition?            |  |
|  |  Our safari designers can tailor this journey for you.    |  |
|  |                                                           |  |
|  |  [Quick Inquiry (2 min)]    [Plan in Detail (5 min)]     |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:** Slide-up toast at bottom. Dismissible. Shows after 60s or 70% scroll. References the specific content the user was viewing. Two buttons: "Quick Inquiry" (opens Flow A modal) or "Plan in Detail" (navigates to Flow B page).

---

## 3. FLOW A: QUICK INQUIRY MODAL (5-Step Overlay)

**Concept:** Inspired by Singita's modal — a full-screen overlay that slides up from the bottom. Progress indicator at top. Each step is one question. Previous/Next navigation. The user never leaves the page. This is the **default flow** for most entry points.

---

### Modal Shell

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  [1]──[2]──[3]──[4]──[5]                                        |
|   ●    ○    ○    ○    ○    ← Progress dots                      |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |                    [STEP CONTENT]                         |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|              [Back]              [Continue]                     |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Overlay:** Full-screen, white background (`--paper-cream`), z-index above all content.
- **Header:** "Plan Your Safari" in DM Sans 18px. Close X top-right.
- **Progress:** 5 dots, connected by lines. Active step: filled circle in `--sunset-ember`. Completed: filled in `--ink-editorial`. Upcoming: outlined in `--dust-gray`.
- **Content area:** Max-width 640px, centered. Single question per step for focus.
- **Footer:** "Back" (text link, left) + "Continue" (filled button, right). Back hidden on Step 1.
- **Animation:** Steps transition with horizontal slide (left on next, right on back). 300ms ease.
- **Keyboard:** Tab cycles fields, Enter submits step, Escape closes modal.

---

### Step 1: Choose Your Journey

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  [●]──[○]──[○]──[○]──[○]                                        |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  What brings you to Aura?                                 |  |
|  |  ─────────────────────────                                |  |
|  |  Select one to get started                                |  |
|  |                                                           |  |
|  |  +------------------+  +------------------+              |  |
|  |  |                  |  |                  |              |  |
|  |  |  [Icon: Compass] |  |  [Icon: Heart]   |              |  |
|  |  |                  |  |                  |              |  |
|  |  |  I'm interested  |  |  I have a        |              |  |
|  |  |  in a specific   |  |  general idea    |              |  |
|  |  |  safari or       |  |  but need help   |              |  |
|  |  |  experience      |  |  planning        |              |  |
|  |  |                  |  |                  |              |  |
|  |  |  (Recommended)   |  |                  |              |  |
|  |  +------------------+  +------------------+              |  |
|  |                                                           |  |
|  |  +------------------+  +------------------+              |  |
|  |  |                  |  |                  |              |  |
|  |  |  [Icon: Calendar]|  |  [Icon: Phone]   |              |  |
|  |  |                  |  |                  |              |  |
|  |  |  I have dates    |  |  I'd prefer to   |              |  |
|  |  |  and I'm ready   |  |  speak to        |              |  |
|  |  |  to book         |  |  someone         |              |  |
|  |  |                  |  |                  |              |  |
|  |  +------------------+  +------------------+              |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|                                         [Continue]              |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Question:** "What brings you to Aura?" — Instrument Serif 36px.
- **Options:** 4 large selectable cards, 2x2 grid. Each has icon + 2-line description.
- **Selection:** Card gets `--sunset-ember` border on select, subtle scale(1.02).
- **Pre-fill:** If user clicked "Plan This Safari" from a specific story, the relevant option is pre-selected (e.g., "I'm interested in a specific safari" pre-selected with the safari name shown).
- **Continue:** Disabled until selection made.

---

### Step 2: Safari or Experience Selection

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  [●]──[●]──[○]──[○]──[○]                                        |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  Which journey interests you?                             |  |
|  |  ─────────────────────────────                            |  |
|  |  (If you chose "specific safari" in Step 1)               |  |
|  |                                                           |  |
|  |  [Search journeys...]                                     |  |
|  |                                                           |  |
|  |  +------------------------+  +------------------------+   |  |
|  |  | [Image: Migration]     |  | [Image: Big Five]      |   |  |
|  |  |                        |  |                        |   |  |
|  |  | The Great Migration    |  | The Big Five Classic   |   |  |
|  |  | Expedition             |  |                        |   |  |
|  |  | 10 Days | 4 Locations  |  | 7 Days | 3 Locations   |   |  |
|  |  +------------------------+  +------------------------+   |  |
|  |                                                           |  |
|  |  +------------------------+  +------------------------+   |  |
|  |  | [Image: Family]        |  | [Image: Beach]         |   |  |
|  |  |                        |  |                        |   |  |
|  |  | A Family's Safari      |  | Mara & Beach Escape    |   |  |
|  |  | Adventure              |  |                        |   |  |
|  |  | 8 Days | 3 Locations   |  | 12 Days | 5 Locations  |   |  |
|  |  +------------------------+  +------------------------+   |  |
|  |                                                           |  |
|  |  [I'm not sure yet — I'd like recommendations]            |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  [Back]                              [Continue]                 |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Cards:** 2-column grid, 4:3 images. Safari name + duration/locations meta.
- **Search:** DM Sans 14px input, filters cards in real-time.
- **"I'm not sure yet":** Text link below cards. Skips to Step 3 with "unspecified" tag.
- **Pre-fill:** If triggered from a specific safari story, that card is pre-selected.

---

### Step 3: When & Who

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  [●]──[●]──[●]──[○]──[○]                                        |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  When are you thinking of travelling?                     |  |
|  |  ─────────────────────────────────────                    |  |
|  |                                                           |  |
|  |  [Travel dates (flexible is fine)]                        |  |
|  |                                                           |  |
|  |  [        Date Picker (inline calendar)         ]         |  |
|  |                                                           |  |
|  |  [x] My dates are flexible                                |  |
|  |                                                           |  |
|  |  ─────────────────────────────────────────────────────    |  |
|  |                                                           |  |
|  |  Who's travelling?                                        |  |
|  |  ─────────────────                                        |  |
|  |                                                           |  |
|  |  Adults (18+)          Teens (13-17)     Children (7-12)  |  |
|  |  [ 2 ]                 [ 0 ]             [ 0 ]            |  |
|  |  [-] [+]               [-] [+]           [-] [+]          |  |
|  |                                                           |  |
|  |  [x] This is a special occasion                           |  |
|  |       [Honeymoon V] [Anniversary V] [Birthday V] [Other V]|  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  [Back]                              [Continue]                 |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Date picker:** Inline calendar (not dropdown). Two-month view. Default: no selection. "My dates are flexible" checkbox below.
- **Guest counters:** Three rows, +/- buttons. Default: 2 Adults, 0 others. Min 1 adult.
- **Special occasion:** Checkbox reveals dropdown with options (Honeymoon, Anniversary, Birthday, Family reunion, Other).
- **Angama-inspired:** Clean, spacious, each field has generous whitespace.

---

### Step 4: Tell Us About Your Dream Safari

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  [●]──[●]──[●]──[●]──[○]                                        |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  What matters most to you?                                |  |
|  |  ─────────────────────────                                |  |
|  |  Select all that apply                                    |  |
|  |                                                           |  |
|  |  [x] Wildlife viewing          [x] Photography           |  |
|  |  [ ] Cultural experiences      [ ] Beach extension       |  |
|  |  [ ] Walking safari            [ ] Hot air balloon       |  |
|  |  [ ] Fly-in between parks      [ ] Family-friendly       |  |
|  |  [ ] Conservation focus        [ ] Luxury accommodation  |  |
|  |                                                           |  |
|  |  ─────────────────────────────────────────────────────    |  |
|  |                                                           |  |
|  |  Your budget per person (USD)                             |  |
|  |  ─────────────────────────────                            |  |
|  |                                                           |  |
|  |  $1,000 ←══════════════════════════════→ $15,000+        |  |
|  |  [==========●===========]                                 |  |
|  |                                                           |  |
|  |  Selected: $4,500 per person                              |  |
|  |  [I'm not sure — let's discuss]                           |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  [Back]                              [Continue]                 |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Interests:** Checkbox grid, 2 columns. 10 common options. DM Sans 14px.
- **Budget slider:** &Beyond-inspired. Range $1,000 — $15,000+. Custom styled track in `--sand-beige`, filled portion in `--sunset-ember`, thumb in `--ink-editorial`. Shows selected value below. "Let's discuss" checkbox to skip.
- **Data value:** This step captures crucial lead qualification data for the sales team.

---

### Step 5: Your Details

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  [●]──[●]──[●]──[●]──[●]                                        |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  Almost there. How can we reach you?                      |  |
|  |  ───────────────────────────────────                      |  |
|  |                                                           |  |
|  |  First Name *                                             |  |
|  |  [____________________]                                   |  |
|  |                                                           |  |
|  |  Last Name *                                              |  |
|  |  [____________________]                                   |  |
|  |                                                           |  |
|  |  Email Address *                                          |  |
|  |  [____________________]                                   |  |
|  |                                                           |  |
|  |  Phone Number (with country code)                         |  |
|  |  [+254 ___________________]                               |  |
|  |                                                           |  |
|  |  Country of Residence                                     |  |
|  |  [Select country...                    v]                 |  |
|  |                                                           |  |
|  |  [x] I'd like to receive Aura's monthly                   |  |
|  |       stories and wildlife dispatches                     |  |
|  |                                                           |  |
|  |  [x] I'd prefer to be contacted by WhatsApp               |  |
|  |                                                           |  |
|  |  Anything else you'd like us to know?                     |  |
|  |  [                                                     ]  |  |
|  |  [                                                     ]  |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  [Back]                              [Send My Inquiry]          |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Fields:** First Name*, Last Name*, Email*, Phone (optional but recommended), Country (dropdown).
- **Phone:** Country code auto-detected from IP, editable. International format validation.
- **Newsletter opt-in:** Pre-checked. DM Sans 13px.
- **WhatsApp preference:** Checkbox. Signals communication preference.
- **Notes:** Textarea, 2 rows, placeholder: "e.g., dietary requirements, mobility considerations, celebrating something special..."
- **Submit button:** "Send My Inquiry" — filled `--sunset-ember`. Disabled until required fields valid.
- **Privacy:** Small text below submit: "Your details are safe with us. We never share your information. [Privacy Policy]"

---

### Post-Submit State (Inside Modal)

```
+------------------------------------------------------------------+
|                                                                  |
|  Plan Your Safari                                    [Close X]  |
|  ─────────────────────────────────────────────────────────────  |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |              [Animated checkmark: green]                  |  |
|  |                                                           |  |
|  |              Your inquiry has been sent                   |  |
|  |              ─────────────────────────                    |  |
|  |                                                           |  |
|  |              Thank you, [First Name].                     |  |
|  |                                                           |  |
|  |              One of our safari designers will             |  |
|  |              be in touch within 24 hours.                 |  |
|  |                                                           |  |
|  |              In the meantime, explore more stories:       |  |
|  |                                                           |  |
|  |              [Read Wildlife Stories]  [Browse Safaris]   |  |
|  |                                                           |  |
|  |              ─────────────────────────────────────        |  |
|  |                                                           |  |
|  |              Your reference: AUR-2026-7842                |  |
|  |              Save this for your records.                  |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Success animation:** Animated SVG checkmark. 2-second celebration.
- **Personalized:** Uses first name from form.
- **24h commitment:** Sets clear expectation (like Expert Africa's "reply within two working days" but faster).
- **Reference number:** Auto-generated, persistent. User can screenshot.
- **CTAs:** Two ghost buttons to keep browsing. Modal auto-closes after 30s if user doesn't interact.

---

## 4. FLOW B: PLAN YOUR SAFARI (Dedicated Journey Page)

**Concept:** For users who click "Plan in Detail" from the smart prompt, or the "Plan Your Safari" nav CTA on desktop. This is a full-page, immersive multi-step form — like Angama's enquiry page but with more visual richness and data capture. This flow is for **committed travellers** who want to provide detailed requirements.

---

### Page Shell

```
+------------------------------------------------------------------+
|                                                                  |
|  AURA SAFARIS                                          [Menu]   |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |                             | |
|  |   PLAN YOUR SAFARI        |  |  [Image: Safari vehicle at  | |
|  |   ────────────────        |  |   sunrise, cinematic,       | |
|  |                           |  |   slow-changing slideshow]  | |
|  |   Tell us about your      |  |                             | |
|  |   dream journey. We'll    |  |                             | |
|  |   craft it for you.       |  |                             | |
|  |                           |  |                             | |
|  |   Step X of 7             |  |                             | |
|  |   [Progress bar]          |  |                             | |
|  |                           |  |                             | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Layout:** 2-column on desktop (45% form / 55% image), stacked on mobile.
- **Left column:** Form content. Sticky header with step indicator.
- **Right column:** Full-height cinematic image that changes based on step context (e.g., wildlife image for "Interests" step, lodge image for "Accommodation" step).
- **Progress bar:** Horizontal bar, `--sunset-ember` fill, animates between steps.
- **Step label:** "Step X of 7" in DM Sans 13px uppercase.

---

### Step 1: Choose Your Starting Point

```
+------------------------------------------------------------------+
|                                                                  |
|  PLAN YOUR SAFARI                                                |
|  Tell us about your dream journey                                |
|  Step 1 of 7  [====>                                    ]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |                             | |
|  |  Where would you like to  |  |  [Image: Aerial view of    | |
|  |  go?                      |  |   Mara River, golden light] | |
|  |  ──────────────────────── |  |                             | |
|  |                           |  |                             | |
|  |  [x] Masai Mara           |  |                             | |
|  |  [ ] Amboseli & Tsavo     |  |                             | |
|  |  [ ] Samburu & Laikipia   |  |                             | |
|  |  [ ] Lamu Island          |  |                             | |
|  |  [ ] Multi-destination    |  |                             | |
|  |  [ ] Not sure — recommend |  |                             | |
|  |                           |  |                             | |
|  |  Or select a specific     |  |                             | |
|  |  safari:                  |  |                             | |
|  |                           |  |                             | |
|  |  [The Great Migration     |  |                             | |
|  |   Expedition    >]        |  |                             | |
|  |  [The Big Five Classic   >]|  |                             | |
|  |  [Mara & Beach Escape    >]|  |                             | |
|  |  [Family Safari Adventure>]|  |                             | |
|  |                           |  |                             | |
|  |              [Continue to Step 2]                           | |
|  |                           |  |                             | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Destination checkboxes:** 6 options. Multiple select.
- **Specific safari shortcuts:** List of popular safaris as clickable rows. Selecting one auto-checks relevant destinations.
- **Right image:** Changes to match selected destination (dynamic image swap on checkbox click).

---

### Step 2: When & Duration

```
+------------------------------------------------------------------+
|                                                                  |
|  Step 2 of 7  [========>                               ]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |                             | |
|  |  When would you like to   |  |  [Image: Sundowner with    | |
|  |  travel?                  |  |   silhouette of acacia]     | |
|  |  ──────────────────────── |  |                             | |
|  |                           |  |                             | |
|  |  [     Inline Calendar     ]                              | |
|  |  (Shows high/low/green    |  |                             | |
|  |   season indicators)      |  |                             | |
|  |                           |  |                             | |
|  |  [x] My dates are flexible                                | |
|  |                           |  |                             | |
|  |  ─────────────────────────|  |                             | |
|  |                           |  |                             | |
|  |  How many nights?         |  |                             | |
|  |                           |  |                             | |
|  |  [3] [4] [5] [6] [7] [8] [9] [10+]                       | |
|  |   ○   ○   ●   ○   ○   ○   ○    ○                         | |
|  |   (pill selector)         |  |                             | |
|  |                           |  |                             | |
|  |              [Continue to Step 3]                           | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Calendar:** Inline, two-month view. Color-coded: 🟢 High season, 🟡 Shoulder, 🔵 Low season. Tooltip on hover shows weather/sighting info for that month.
- **"My dates are flexible":** Checkbox that widens the calendar to show a full year with season indicators.
- **Duration pills:** 3-10+ nights. Single select. Pill style — rounded, fill on select.

---

### Step 3: Who's Travelling

```
+------------------------------------------------------------------+
|                                                                  |
|  Step 3 of 7  [===============>                         ]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |  [Image: Family at bush     | |
|  |  Tell us about your       |  |   breakfast, warm tones]    | |
|  |  travelling party         |  |                             | |
|  |                           |  |                             | |
|  |  Adults (18+)             |  |                             | |
|  |  [ 2 ]  [-]  [+]          |  |                             | |
|  |                           |  |                             | |
|  |  Teens (13-17)            |  |                             | |
|  |  [ 0 ]  [-]  [+]          |  |                             | |
|  |                           |  |                             | |
|  |  Children (7-12)          |  |                             | |
|  |  [ 0 ]  [-]  [+]          |  |                             | |
|  |                           |  |                             | |
|  |  Infants (0-6)            |  |                             | |
|  |  [ 0 ]  [-]  [+]          |  |                             | |
|  |                           |  |                             | |
|  |  ──────────────────────── |  |                             | |
|  |                           |  |                             | |
|  |  [x] This is a special    |  |                             | |
|  |      occasion             |  |                             | |
|  |                           |  |                             | |
|  |      Type: [Honeymoon v]  |  |                             | |
|  |      Notes: [____________]|  |                             | |
|  |                           |  |                             | |
|  |  [x] First safari         |  |                             | |
|  |                           |  |                             | |
|  |              [Continue to Step 4]                           | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Guest counters:** 4 rows, Angama-style. Clean +/- buttons.
- **Special occasion:** Checkbox reveals type dropdown + notes field.
- **"First safari":** Checkbox. Important context for the design team.

---

### Step 4: What Matters to You

```
+------------------------------------------------------------------+
|                                                                  |
|  Step 4 of 7  [===================>                    ]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |  [Image: Photographer with  | |
|  |  What are you most        |  |   telephoto, leopard in bg] | |
|  |  excited about?           |  |                             | |
|  |  ──────────────────────── |  |                             | |
|  |                           |  |                             | |
|  |  [Select up to 5]         |  |                             | |
|  |                           |  |                             | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  |Big   |  |Photo |  |Cultur|  |Walking|                   | |
|  |  |Five  |  |graphy|  |al    |  |Safari |                   | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  [x]         [x]       [ ]       [ ]                       | |
|  |                                                           | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  |Balloo|  |Fly-In|  |Beach |  |Family|                   | |
|  |  |n     |  |      |  |Ext. |  |Focus |                   | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  [ ]         [ ]       [ ]       [ ]                       | |
|  |                                                           | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  |Conser|  |Bird  |  |Night |  |Bush  |                   | |
|  |  |vation|  |watch |  |Drives|  |Dining|                   | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  [ ]         [ ]       [ ]       [ ]                       | |
|  |                                                           | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  |Luxury|  |Camp  |  |Adven|  |Well  |                    | |
|  |  |Lodge |  |ing   |  |ture  |  |ness  |                    | |
|  |  +------+  +------+  +------+  +------+                   | |
|  |  [ ]         [ ]       [ ]       [ ]                       | |
|  |                                                           | |
|  |  Anything else?                                           | |
|  |  [________________________________________]               | |
|  |                                                           | |
|  |              [Continue to Step 5]                           | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Visual interest grid:** 4x4 grid of selectable cards with icons. Each card: icon + label. Toggle on click ( fills with `--sunset-ember` at 10% opacity, border becomes `--sunset-ember`).
- **Max 5 selections:** Counter shows "3 of 5 selected". Sixth selection triggers gentle shake + tooltip.
- **Free text:** Below grid for unlisted interests.

---

### Step 5: Your Budget & Accommodation Style

```
+------------------------------------------------------------------+
|                                                                  |
|  Step 5 of 7  [===========================>            ]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |  [Image: Luxury tented camp  | |
|  |  Help us tailor the       |  |   interior, elegant, warm]  | |
|  |  perfect experience       |  |                             | |
|  |                           |  |                             | |
|  |  Your budget per person   |  |                             | |
|  |  (USD)                    |  |                             | |
|  |                           |  |                             | |
|  |  $1,000 ←══════════════════════════════→ $15,000+         | |
|  |  [========●===============]                                 | |
|  |                           |  |                             | |
|  |  Range: $2,000 — $3,000 per person                        | |
|  |  Estimated total for 2 adults: $4,000 — $6,000           | |
|  |                           |  |                             | |
|  |  [x] I'm flexible on budget                               | |
|  |                           |  |                             | |
|  |  ─────────────────────────|  |                             | |
|  |                           |  |                             | |
|  |  Accommodation preference |  |                             | |
|  |                           |  |                             | |
|  |  [x] Luxury Lodge    [ ] Tented Camp                     | |
|  |  [ ] Mobile Camp     [ ] Mix of styles                   | |
|  |                           |  |                             | |
|  |  Room configuration:      |  |                             | |
|  |  [Double v]  [1 room v]  [Twin beds v]                   | |
|  |                           |  |                             | |
|  |              [Continue to Step 6]                           | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Budget slider:** Dual-handle range slider (min-max). Shows estimated total dynamically based on guest count from Step 3.
- **"I'm flexible":** Checkbox that sets range to full and disables slider.
- **Accommodation:** 4 radio options. Each shows tooltip on hover with description.
- **Room config:** 3 dropdowns — room type, room count, bed arrangement.

---

### Step 6: Your Details

```
+------------------------------------------------------------------+
|                                                                  |
|  Step 6 of 7  [==============================>          ]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |  [Image: Guide smiling,     | |
|  |  Tell us about you        |  |   professional portrait]    | |
|  |                           |  |                             | |
|  |  First Name *             |  |  "We can't wait to design   | |
|  |  [____________________]   |  |   your journey."           | |
|  |                           |  |                             | |
|  |  Last Name *              |  |  — The Aura Team            | |
|  |  [____________________]   |  |                             | |
|  |                           |  |                             | |
|  |  Email Address *          |  |                             | |
|  |  [____________________]   |  |                             | |
|  |                           |  |                             | |
|  |  Phone Number *           |  |                             | |
|  |  [+254 ___________________]|  |                             | |
|  |                           |  |                             | |
|  |  Country of Residence *   |  |                             | |
|  |  [Select country... v]    |  |                             | |
|  |                           |  |                             | |
|  |  Preferred contact:       |  |                             | |
|  |  [Email ●]  [WhatsApp ○]  [Call ○]                       | |
|  |                           |  |                             | |
|  |  Best time to reach you:  |  |                             | |
|  |  [Morning v] (your timezone)                              | |
|  |                           |  |                             | |
|  |              [Continue to Step 7]                           | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Required fields:** First Name, Last Name, Email, Phone, Country.
- **Contact preference:** Radio pills — Email, WhatsApp, Call.
- **Best time:** Dropdown with timezone-aware labels ("Morning — 9AM your time").
- **Right image:** Team portrait + personal quote for warmth.

---

### Step 7: Anything Else?

```
+------------------------------------------------------------------+
|                                                                  |
|  Step 7 of 7  [=======================================>]       |
|                                                                  |
|  +---------------------------+  +-----------------------------+ |
|  |                           |  |  [Image: Cinematic montage  | |
|  |  Almost done              |  |   of safari moments — slow  | |
|  |                           |  |   dissolve between scenes]  | |
|  |  Is there anything else   |  |                             | |
|  |  you'd like us to know?   |  |                             | |
|  |                           |  |                             | |
|  |  [                                                      ] |  |
|  |  [  Dietary requirements, mobility needs, special       ] |  |
|  |  [  requests, celebrations, questions...                ] |  |
|  |  [                                                      ] |  |
|  |  [                                                      ] |  |
|  |                           |  |                             | |
|  |  ─────────────────────────|  |                             | |
|  |                           |  |                             | |
|  |  How did you hear about   |  |                             | |
|  |  Aura Safaris?            |  |                             | |
|  |  [Select... v]            |  |                             | |
|  |                           |  |                             | |
|  |  ─────────────────────────|  |                             | |
|  |                           |  |                             | |
|  |  [x] I'd like to receive  |  |                             | |
|  |      Aura's monthly       |  |                             | |
|  |      wildlife dispatches  |  |                             | |
|  |                           |  |                             | |
|  |  [Submit My Request]                                      |  |
|  |                           |  |                             | |
|  |  Your details are safe    |  |                             | |
|  |  with us. [Privacy Policy]|  |                             | |
|  +---------------------------+  +-----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Notes:** Textarea, 4 rows. Generous space — signals we care about details.
- **Referral source:** Dropdown (Google, Instagram, Friend referral, Travel agent, Press article, Other).
- **Submit:** "Submit My Request" — filled `--sunset-ember`, full width.
- **Privacy note:** Small text below.

---

### Post-Submit Page

```
+------------------------------------------------------------------+
|                                                                  |
|  AURA SAFARIS                                                    |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |              [Animated checkmark + confetti]              |  |
|  |                                                           |  |
|  |              Your journey request is on its way           |  |
|  |              ─────────────────────────────────            |  |
|  |                                                           |  |
|  |              Thank you, [First Name].                     |  |
|  |                                                           |  |
|  |              Your safari designer will be in touch         |  |
|  |              within 24 hours with a tailored proposal.    |  |
|  |                                                           |  |
|  |              ─────────────────────────────────────        |  |
|  |                                                           |  |
|  |              YOUR REFERENCE NUMBER                        |  |
|  |              AUR-2026-7842                                |  |
|  |              [Copy]  [Email to me]                        |  |
|  |                                                           |  |
|  |              ─────────────────────────────────────        |  |
|  |                                                           |  |
|  |              What happens next?                           |  |
|  |                                                           |  |
|  |              1. Your designer reviews your request        |  |
|  |              2. We check lodge availability               |  |
|  |              3. You receive a tailored proposal           |  |
|  |              4. We refine together until it's perfect     |  |
|  |              5. Secure your dates with a deposit          |  |
|  |                                                           |  |
|  |              [Return to Homepage]  [Read More Stories]    |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Celebration:** Confetti animation (light, tasteful). Checkmark draws itself.
- **Reference number:** Prominent. Copy button + "Email to me" option.
- **What happens next:** 5-step timeline. DM Sans 15px. Visual step connectors.
- **CTAs:** Two ghost buttons. Clean, uncluttered.

---

## 5. FLOW C: DIRECT BOOKING WITH PAYMENT (ADVANCED)

**Concept:** For Phase 2 (post-launch). A real-time booking system where users can check availability, see pricing, provisionally hold dates, and pay a deposit — all online. This is the most advanced flow, inspired by luxury hotel booking engines but adapted for safari's complexity.

### When to Build This Flow
- **Phase 1 (Launch):** Flows A + B only. Inquiry-based, human-led.
- **Phase 2 (3-6 months post-launch):** Add Flow C for top 3-5 safari packages with fixed itineraries.
- **Phase 3 (6-12 months):** Expand to all packages. Full dynamic pricing.

---

### Direct Booking: Availability Checker

```
+------------------------------------------------------------------+
|                                                                  |
|  AURA SAFARIS                                                    |
|                                                                  |
|  THE GREAT MIGRATION EXPEDITION                                  |
|  10 Days | 4 Locations | From $8,500 pp                         |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  Check availability for your dates                        |  |
|  |                                                           |  |
|  |  Check-in: [July 15, 2026 v]    Nights: [10 v]           |  |
|  |                                                           |  |
|  |  Adults: [2 v]    Children: [0 v]    Rooms: [1 v]         |  |
|  |                                                           |  |
|  |              [CHECK AVAILABILITY]                         |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

---

### Direct Booking: Results & Pricing

```
+------------------------------------------------------------------+
|                                                                  |
|  Availability for The Great Migration Expedition                 |
|  July 15 — July 25, 2026 | 2 Adults | 1 Room                   |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |  [x] Change dates  [x] Change guests  [x] Change room     |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
|  LODGE AVAILABILITY:                                             |
|                                                                  |
|  +------------------+  +------------------+  +----------------+ |
|  | [Image]          |  | [Image]          |  | [Image]        | |
|  |                  |  |                  |  |                | |
|  | MARA PLAINS CAMP |  | SASAKWA LODGE    |  | NGORONGORO    | |
|  | (Nights 1-3)     |  | (Nights 4-6)     |  | CRATER LODGE  | |
|  |                  |  |                  |  | (Nights 7-9)  | |
|  | AVAILABLE        |  | AVAILABLE        |  | AVAILABLE      | |
|  | $450/night pp    |  | $680/night pp    |  | $520/night pp  | |
|  |                  |  |                  |  |                | |
|  | [Room type v]    |  | [Room type v]    |  | [Room type v]  | |
|  |                  |  |                  |  |                | |
|  +------------------+  +------------------+  +----------------+ |
|                                                                  |
|  FINAL NIGHT:                                                    |
|  +------------------+                                           |
|  | [Image]          |  Arusha Coffee Lodge (Night 10)         |
|  |                  |  AVAILABLE | $180/night pp               |
|  | ARUSHA COFFEE    |  [Room type v]                           |
|  | LODGE            |                                           |
|  +------------------+                                           |
|                                                                  |
|  ─────────────────────────────────────────────────────────────   |
|                                                                  |
|  PRICE SUMMARY:                                                  |
|  ──────────────                                                  |
|  Accommodation (10 nights, 2 adults, sharing)     $ 4,220      |
|  Internal flights (2 flights, 2 adults)           $   840      |
|  Park & conservancy fees (2 adults)                 $   680      |
|  Private vehicle & guide (10 days)                  $ 1,800      |
|  All meals & drinks                                 $     0      |
|  Airport transfers                                  $   160      |
|  ─────────────────────────────────────────────────────────       |
|  SUBTOTAL                                          $ 7,700      |
|  Aura service fee                                   $   770      |
|  ─────────────────────────────────────────────────────────       |
|  TOTAL PER PERSON                                  $ 4,235      |
|  GRAND TOTAL (2 adults)                            $ 8,470      |
|                                                                  |
|  [x] Include travel insurance (+$245/person)                   |
|                                                                  |
|  ─────────────────────────────────────────────────────────────   |
|                                                                  |
|  [PROVISIONALLY HOLD THESE DATES — $500 DEPOSIT]               |
|  Or [SPEAK TO A DESIGNER FIRST — FREE]                         |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Availability status:** Green "AVAILABLE" badge or red "WAITLIST" with estimated confirmation time.
- **Room type dropdown:** Per lodge — Standard Suite, Deluxe Suite, Honeymoon Suite, Family Room.
- **Price breakdown:** Fully itemized. Line-item transparency builds trust.
- **"Provisional hold":** $500 deposit to hold dates for 7 days (fully refundable). CTA in `--sunset-ember`.
- **"Speak to designer":** Secondary ghost button. Routes to Flow A modal with this safari pre-filled.

---

### Direct Booking: Payment

```
+------------------------------------------------------------------+
|                                                                  |
|  Secure Your Dates                                               |
|  ────────────────                                                |
|  The Great Migration Expedition | July 15-25, 2026               |
|                                                                  |
|  +-----------------------------------------------------------+  |
|  |                                                           |  |
|  |  ORDER SUMMARY                                            |  |
|  |  ──────────────                                           |  |
|  |  Safari package (2 adults)              $8,470           |  |
|  |  Travel insurance (2 people)              $490           |  |
|  |  ───────────────────────────────────────────────           |  |
|  |  TOTAL                                  $8,960           |  |
|  |                                                           |  |
|  |  ─────────────────────────────────────────────────        |  |
|  |                                                           |  |
|  |  PAYMENT OPTIONS                                          |  |
|  |  ──────────────                                           |  |
|  |                                                           |  |
|  |  [●] Provisional Hold (recommended)                       |  |
|  |      Pay $500 now to hold your dates for 7 days           |  |
|  |      Fully refundable. Balance due 60 days before travel. |  |
|  |                                                           |  |
|  |  [ ] Full Payment                                         |  |
|  |      Pay $8,960 now. 5% early payment discount applies.   |  |
|  |      Save $448. Total: $8,512                             |  |
|  |                                                           |  |
|  |  ─────────────────────────────────────────────────        |  |
|  |                                                           |  |
|  |  PAYMENT METHOD                                           |  |
|  |  ──────────────                                           |  |
|  |                                                           |  |
|  |  [Credit/Debit Card]  [Bank Transfer]  [PayPal]          |  |
|  |                                                           |  |
|  |  Card Number: [________________________]                 |  |
|  |  Expiry: [MM/YY___]  CVV: [____]                        |  |
|  |  Name on Card: [________________________]               |  |
|  |  Billing Country: [Select... v]                         |  |
|  |                                                           |  |
|  |  [x] I agree to the [Terms & Conditions] and              |  |
|  |      [Cancellation Policy]                                |  |
|  |                                                           |  |
|  |  [x] Add me to the Aura newsletter                        |  |
|  |                                                           |  |
|  |  [SECURE PAYMENT — SSL ENCRYPTED]                         |  |
|  |                                                           |  |
|  |  [Lock icon] Your payment is secured with 256-bit SSL     |  |
|  |  encryption. We never store your card details.            |  |
|  |                                                           |  |
|  +-----------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Payment options:** Provisional hold ($500) vs Full payment (with 5% discount). Radio selection.
- **Payment methods:** Credit/Debit (Stripe), Bank Transfer (for large amounts), PayPal.
- **Stripe integration:** Card number field with real-time validation, auto-formatting.
- **Security:** SSL badge, "We never store your card details" reassurance.
- **Terms checkbox:** Required. Links open in modal (don't navigate away).
- **Currency:** All prices in USD with estimated conversion in EUR and GBP.

---

## 6. POST-SUBMIT EXPERIENCE

### Automated Email Sequence

| Timing | Email | Content |
|---|---|---|
| **Immediate** | Confirmation | Reference number, summary of inquiry, "what happens next" timeline, link to save to calendar |
| **+2 hours** | Personal intro | "Hi, I'm [Name], your safari designer" — photo, bio, years of experience. WhatsApp number. Builds human connection. |
| **+24 hours** | Tailored proposal | Custom itinerary PDF, lodge options, pricing, availability status. Links to view online (password-protected page). |
| **+48 hours** | Follow-up | "Did you have a chance to review? Happy to adjust anything." Gentle, not pushy. |
| **+7 days** | Content nurture | Related wildlife story or blog post. Keeps Aura top-of-mind. |
| **+14 days** | Reminder | "Your provisional hold expires in [X] days." If applicable. |

### Customer Portal (Phase 2)

```
+------------------------------------------------------------------+
|                                                                  |
|  YOUR JOURNEY — AUR-2026-7842                                   |
|                                                                  |
|  STATUS: Proposal Ready                                          |
|  [●────●────●────○────○]  (Inquiry → Reviewed → Proposal →    |
|                              Confirmed → Deposit → Booked)       |
|                                                                  |
|  YOUR PROPOSAL                                                   |
|  ──────────────                                                  |
|  The Great Migration Expedition (Tailored)                       |
|  July 15-25, 2026 | 2 Adults                                     |
|                                                                  |
|  [View Full Itinerary]  [Download PDF]  [Request Changes]       |
|                                                                  |
|  PRICE: $8,470 per person | $16,940 total                       |
|  [Secure with $500 Deposit]                                      |
|                                                                  |
|  YOUR DESIGNER                                                   |
|  ──────────────                                                  |
|  [Photo] Sarah Mwangi                                            |
|  Senior Safari Designer | 12 years experience                   |
|  [WhatsApp]  [Email]  [Schedule Call]                           |
|                                                                  |
+------------------------------------------------------------------+
```

**Specs:**
- **Password-protected:** Unique URL + auto-generated password sent via email.
- **Status tracker:** Visual pipeline showing inquiry progress.
- **Proposal view:** Interactive itinerary (expandable days). Downloadable PDF.
- **Designer profile:** Photo, bio, direct contact options.
- **Payment integration:** Deposit button links to secure payment.

---

## 7. ADMIN DASHBOARD & CRM INTEGRATION

### Pipeline Dashboard

```
+------------------------------------------------------------------+
|                                                                  |
|  AURA CRM — Safari Operations Dashboard                         |
|                                                                  |
|  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           |
|  │  NEW    │  │PROPOSAL │  │ AWAITING│  │ CONFIRMED           │
|  │   12    │  │   8     │  │   5     │  │   23    │           |
|  └─────────┘  └─────────┘  └─────────┘  └─────────┘           |
|                                                                  |
|  +------------------+  +------------------+  +----------------+ |
|  │ Ref: AUR-7842    │  │ Ref: AUR-7841    │  │ Ref: AUR-7840  | |
|  │ Sarah & Tom      │  │ James Family     │  │ Chen Group     | |
|  │ Migration Exped. │  │ Big Five Classic │  │ Beach & Bush   | |
|  │ Jul 15-25 | 2pp  │  │ Aug 1-8 | 4pp    │  │ Sep 10-20 | 6pp| |
|  │ $8,470 pp        │  │ $3,200 pp        │  │ $4,500 pp      | |
|  │ Sent: 2h ago     │  │ Sent: 5h ago     │  │ Sent: 1d ago   | |
|  │ [Assign] [View]  │  │ [Assign] [View]  │  │ [Review] [View]| |
|  +------------------+  +------------------+  +----------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

**Key Features:**
- **Kanban pipeline:** New → Assigned → Proposal Sent → Awaiting Response → Deposit Paid → Confirmed → Pre-Trip → Post-Trip.
- **Lead scoring:** Auto-score based on budget, travel dates (urgency), group size, special occasion.
- **Auto-assignment:** Round-robin to safari designers. Weighted by expertise (e.g., family inquiries → Sarah, photography → David).
- **Activity timeline:** Every touchpoint logged (email open, portal visit, WhatsApp message).
- **Calendar integration:** Sync with designers' Google Calendars for call scheduling.

---

## 8. TECHNICAL ARCHITECTURE NOTES

### Frontend Stack
| Component | Technology | Notes |
|---|---|---|
| **Flow A Modal** | React + Framer Motion | Slide-up overlay, horizontal step transitions |
| **Flow B Page** | React + React Hook Form | Multi-step form with validation, progress persistence |
| **Flow C Booking** | React + Stripe Elements | Real-time pricing, availability API, payment intents |
| **Date Picker** | react-day-picker | Custom styled, season indicators |
| **Slider** | Radix UI Slider | Accessible, dual-handle support |
| **Phone Input** | react-phone-number-input | Auto-detect country, validation |

### Backend & Services
| Service | Purpose |
|---|---|
| ** Sanity CMS** | Content management for safaris, lodges, experiences |
| **Booking DB** | PostgreSQL — availability, pricing, reservations |
| **Stripe** | Payment processing (holds + deposits) |
| **SendGrid / Resend** | Transactional emails (confirmation, proposals) |
| **Twilio** | WhatsApp Business API for designer communication |
| **Calendly** | Embedded call scheduling |
| **HubSpot / Pipedrive** | CRM pipeline (or custom) |

### Data Model (Core)
```
Inquiry {
  id: "AUR-2026-7842"
  flow: "A" | "B" | "C"
  status: "new" | "assigned" | "proposal_sent" | "awaiting" | "deposit_paid" | "confirmed"
  
  // What
  safari_interest: string[]
  experience_interest: string[]
  destinations: string[]
  interests: string[]
  
  // When
  travel_dates: { start, end } | "flexible"
  duration: number
  
  // Who
  guests: { adults, teens, children, infants }
  occasion: string | null
  
  // Preferences
  budget_range: { min, max }
  accommodation: string[]
  room_config: string
  
  // Contact
  first_name, last_name, email, phone, country
  contact_preference: "email" | "whatsapp" | "call"
  best_time: string
  newsletter: boolean
  
  // Meta
  referral_source: string
  notes: string
  designer_assigned: string
  created_at, updated_at
}
```

### API Endpoints
```
POST   /api/inquiry          → Submit inquiry (Flow A or B)
GET    /api/inquiry/:ref     → Get inquiry by reference (customer portal)
POST   /api/booking/check    → Check availability (Flow C)
POST   /api/booking/hold     → Provisional hold + deposit
POST   /api/booking/confirm  → Full payment confirmation
GET    /api/safaris          → List safaris with pricing
GET    /api/lodges           → List lodges with availability
POST   /api/webhook/stripe   → Stripe payment webhooks
```

---

## SUMMARY: COMPETITIVE ANALYSIS

| Feature | Singita | Angama | Expert Africa | &Beyond | **Aura** |
|---|---|---|---|---|---|
| **Flow Type** | Modal overlay | Multi-step page | Call-first + form | Multi-step page | **3-tier system** |
| **Steps** | 5 | ~6 | 1 (form) | ~7 | **5 (quick) / 7 (detailed) / 4 (booking)** |
| **Visual Style** | Minimal, clean | Image-rich, serif headings | Functional, text-heavy | Clean, budget slider | **Cinematic images + clean forms** |
| **Budget Capture** | No | No | No | Yes (slider) | **Yes (range slider)** |
| **Progress Indicator** | Dots | None | None | Numbered bar | **Dots (modal) / Bar (page)** |
| **Post-Submit** | Simple thank-you | Simple thank-you | 2-day response promise | Confirmation | **Timeline + reference + portal** |
| **Phone Push** | Subtle | Prominent | Primary | Available | **Available but not primary** |
| **WhatsApp** | No | No | No | No | **Yes — built into flow** |
| **Direct Booking** | No | No | No | No | **Phase 2 — provisional hold + deposit** |
| **Customer Portal** | No | No | No | No | **Phase 2 — proposal viewer + payment** |

---

*End of Booking Flow Wireframes v3.0 — The Complete Booking & Inquiry System*

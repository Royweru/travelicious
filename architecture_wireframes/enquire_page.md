# Enquire Page Architecture

This document outlines the structural layout and wireframe of the Enquire Page, utilizing a Singita-inspired multi-step wizard to craft the perfect journey.

## Component Tree

```mermaid
graph TD
    A[Enquire Page] --> B(Full-Screen Overlay UI)
    
    B --> C(Step 1: Where)
    C --> C1[Radio List of Destinations]
    
    B --> D(Step 2: When)
    D --> D1[Calendar Picker with Migration Highlights]
    D --> D2[Flexible Dates Toggle]
    
    B --> E(Step 3: Who)
    E --> E1[Adult/Child Counters]
    E --> E2[Tags: First-time, Photography, Honeymoon, etc.]
    
    B --> F(Step 4: Experience)
    F --> F1[Selectable Cards: Fly-in, Driving, Walking]
    F --> F2[Budget Range Slider]
    
    B --> G(Step 5: Contact)
    G --> G1[Personal Details Form]
    G --> G2[Submit Button]
    
    B --> H(10x Enhancement: What happens next?)
    H --> H1[Timeline showing the consultation process]
    
    B --> I(10x Enhancement: FAQ)
    I --> I1[Quick answers to common booking questions]
```

## Section Details & Enhancements (10x Perspective)
- **Wizard UI**: A full-screen, distraction-free interface (no standard header/footer) that feels like an exclusive consultation rather than a generic contact form.
- **Background**: A subtle, very slow-moving aerial video adds atmosphere without distracting from the form fields.
- **Added 10x Element**: *What happens next?* Many users hesitate to fill out luxury forms because they fear immediate hard-sells. Setting expectations (e.g., "1. We review your request, 2. A specialist calls you, 3. We draft a zero-obligation itinerary") dramatically increases conversion rates.

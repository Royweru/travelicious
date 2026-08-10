# Safaris Page Architecture

This document outlines the structural layout and wireframe of the Safaris Page, acting as the main catalog for curated travel packages.

## Component Tree

```mermaid
graph TD
    A[Safaris Page] --> B(Global Navbar)
    
    A --> C(Hero Section)
    C --> C1[Image: Safari vehicle at sunrise]
    C --> C2[Headline: 'Every journey, tailored to your rhythm']
    C --> C3[Quick Filters: Destination, Duration]
    
    A --> D(10x Enhancement: Interactive Safari Map)
    D --> D1[Interactive map showing routes and camps]
    
    A --> E(Package Grid)
    E --> E1[CSS Grid of all available Safaris]
    E --> E2[Comprehensive Filter Sidebar/Top-bar]
    E --> E3[Package Cards with details & pricing]
    
    A --> F(10x Enhancement: Compare Safaris)
    F --> F1[Sticky 'Compare' drawer for selected packages]
    
    A --> G(Safari Collections)
    G --> G1[Horizontal Scroll Row]
    G --> G2[Categories: Beach, Birdwatching, Cultural, etc.]

    A --> H(Global Footer)
```

## Section Details & Enhancements (10x Perspective)
- **Filters**: Needs instant client-side filtering without page reloads to maintain a snappy, luxury feel.
- **Added 10x Element**: *Interactive Safari Map*. Users often struggle to understand geography. A beautiful map with animated lines showing flight/drive routes between camps adds immense clarity and premium value.
- **Added 10x Element**: *Compare feature*. Allowing users to select up to 3 safaris and view a side-by-side comparison of logistics, wildlife probabilities, and costs.

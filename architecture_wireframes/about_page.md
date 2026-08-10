# About Page Architecture

This document outlines the structural layout and wireframe of the About Page, telling the story of the founders and the team behind the journeys.

## Component Tree

```mermaid
graph TD
    A[About Page] --> B(Global Navbar)
    
    A --> C(Hero Section)
    C --> C1[Image: Candid Founders in Safari Vehicle]
    C --> C2[Headline: 'Born from a love of Kenyas wild places']
    
    A --> D(Story Timeline)
    D --> D1[Vertical Scroll Component]
    D --> D2[Alternating Left/Right Timeline Nodes]
    D --> D3[Milestones: 2018 to Present]
    
    A --> E(10x Enhancement: Conservation Impact)
    E --> E1[Stats Grid: Acres Protected, Projects Funded]
    
    A --> F(Team Grid)
    F --> F1[Headline: 'The People Behind the Journeys']
    F --> F2[Grid of Team Member Cards]
    F --> F3[Card: Photo, Name, Title, Bio Quote]
    
    A --> G(10x Enhancement: Our Partners)
    G --> G1[Logos of local communities and wildlife trusts]

    A --> H(Global Footer)
```

## Section Details & Enhancements (10x Perspective)
- **Story Timeline**: Built with a central vertical line that "fills" as the user scrolls down, connecting the alternating image/text blocks.
- **Team Grid**: Hovering over a team member's photo reveals their personal quote or philosophy, adding a human touch before the user even clicks.
- **Added 10x Element**: *Conservation Impact Stats*. In modern luxury travel, conservation is as important as the luxury itself. Explicitly showing the impact builds trust and aligns with the target audience's values.

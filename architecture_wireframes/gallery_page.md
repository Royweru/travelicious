# Gallery Page Architecture

This document outlines the structural layout and wireframe of the Gallery Page, focusing on high-impact visual storytelling without distraction.

## Component Tree

```mermaid
graph TD
    A[Gallery Page] --> B(Global Navbar)
    
    A --> C(Hero Section)
    C --> C1[Full-bleed Slideshow: 5s Crossfades]
    C --> C2[Headline: 'Moments that words cannot capture']
    
    A --> D(10x Enhancement: Featured Collections)
    D --> D1[Highlight 3 curated albums e.g., 'The Great Migration 2024']
    
    A --> E(Filterable Masonry Gallery)
    E --> E1[Filter Tabs: All, Wildlife, Landscapes, People, Aerial, B&W]
    E --> E2[Framer Motion 'layout' reflow]
    E --> E3[Masonry Image Grid]
    E --> E4[Ghost 'Load More' Button]
    
    A --> F(Lightbox Modal)
    F --> F1[Full-screen Dark Overlay]
    F --> F2[Image Scaling Animation from Thumbnail]
    F --> F3[EXIF Data & Location Meta toggle]
    
    A --> G(10x Enhancement: Submit Your Photo)
    G --> G1[UGC Section for guests to share their memories]

    A --> H(Global Footer)
```

## Section Details & Enhancements (10x Perspective)
- **Lightbox**: The lightbox is critical for a gallery. It scales seamlessly from the thumbnail position (using Framer Motion `layoutId`) rather than just fading in, providing spatial continuity.
- **Performance**: High-res images use `placeholder="blur"` and strict optimization to ensure the masonry grid doesn't cause layout jank.
- **Added 10x Element**: *EXIF Data Toggle* in the lightbox for photography enthusiasts to see camera, lens, and location data of the shots, emphasizing the "expert" angle.

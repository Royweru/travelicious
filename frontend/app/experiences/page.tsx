"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CinematicHubHero } from "@/sections/experiences/cinematic-hub-hero";
import { CoverStory } from "@/sections/experiences/cover-story";
import { EditorialGrid } from "@/sections/experiences/editorial-grid";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-savannah-cream text-ink-editorial">
      <SiteHeader />
      
      {/* Experiences sections will go here */}
      <CinematicHubHero />
      <CoverStory />
      <EditorialGrid />

      <SiteFooter />
    </main>
  );
}

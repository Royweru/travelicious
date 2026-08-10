import { HeroSection } from "@/sections/home/hero-section";
import { PhilosophySection } from "@/sections/home/philosophy-section";
import { CinematicVisualBreak } from "@/sections/home/cinematic-visual-break";
import { GallerySection } from "@/sections/home/gallery-section";
import { CuratedJourneysSection } from "@/sections/home/curated-journeys-section";
import { JournalPreviewSection } from "@/sections/home/journal-preview-section";
import { StoryGridSection } from "@/sections/home/story-grid-section";
import { CtaSection } from "@/sections/home/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <CinematicVisualBreak />
      <GallerySection />
      <CuratedJourneysSection />
      <JournalPreviewSection />
      <StoryGridSection />
      <CtaSection />
    </main>
  );
}

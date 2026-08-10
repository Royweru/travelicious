"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { StoryCinematicHero } from "@/sections/experiences/story-cinematic-hero";
import { StoryEditorialArticle } from "@/sections/experiences/story-editorial-article";
import { useParams } from "next/navigation";

export default function SingleExperiencePage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <main className="min-h-screen bg-savannah-cream text-ink-editorial antialiased flex flex-col">
      <StoryCinematicHero slug={slug} />
      <StoryEditorialArticle slug={slug} />
      <SiteFooter />
    </main>
  );
}

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { DestinationsHero } from "@/sections/destinations/destinations-hero";
import { BrowseCollections } from "@/sections/destinations/browse-collections";
import { AuraDifference } from "@/sections/destinations/aura-difference";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-savannah-cream text-ink-editorial">
      <SiteHeader />
      <DestinationsHero />
      <BrowseCollections />
      <AuraDifference />
      <SiteFooter />
    </main>
  );
}

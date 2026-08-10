import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WildlifeGallery } from "@/sections/wildlife/wildlife-gallery"
import { ExperienceStoriesGrid } from "@/sections/wildlife/experience-stories-grid"
import { InteractiveCalendar } from "@/sections/wildlife/interactive-calendar"

export default function WildlifeHubPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-savannah-cream min-h-screen">
        <WildlifeGallery />
        <ExperienceStoriesGrid />
        <InteractiveCalendar />
      </main>
      <SiteFooter />
    </>
  )
}

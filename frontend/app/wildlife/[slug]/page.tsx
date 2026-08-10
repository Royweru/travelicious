import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WildlifeStory } from "@/sections/wildlife/wildlife-story"

export default function IndividualWildlifeStoryPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-savannah-cream min-h-screen">
        <WildlifeStory slug={params.slug} />
      </main>
      <SiteFooter />
    </>
  )
}

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { NarrativeRoute } from "@/sections/destinations/narrative-route"
import { DayByDay } from "@/sections/destinations/day-by-day"
import { InvestmentDetail } from "@/sections/destinations/investment-detail"

export default function DestinationStoryPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-savannah-cream min-h-screen">
        <NarrativeRoute />
        <DayByDay />
        <InvestmentDetail />
      </main>
      <SiteFooter />
    </>
  )
}

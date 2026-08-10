import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StoriesJournalIndex } from "@/sections/stories/stories-journal-index";
import { RecentStoriesGrid } from "@/sections/stories/recent-stories-grid";

export default function StoriesPage() {
  return (
    <div className="bg-[#EAE5D9] min-h-screen">
      <SiteHeader />
      <StoriesJournalIndex />
      <RecentStoriesGrid />
      <SiteFooter />
    </div>
  );
}

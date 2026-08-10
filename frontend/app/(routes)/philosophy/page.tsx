import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PhilosophyPage() {
  return (
    <div className="bg-[#EAE5D9] min-h-screen">
      <SiteHeader />
      <header className="relative w-full h-[70vh] flex flex-col justify-center items-center bg-ink-editorial">
        <h1 className="font-display-hero text-display-hero text-savannah-cream uppercase tracking-tight text-center px-4">Our Philosophy</h1>
        <p className="font-body-lg text-body-lg text-savannah-cream/90 max-w-2xl text-center mt-4 px-4">Crafting journeys that leave you forever changed.</p>
      </header>
      <SiteFooter />
    </div>
  );
}

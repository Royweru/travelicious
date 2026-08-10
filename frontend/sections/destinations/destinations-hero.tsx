export function DestinationsHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqNksCLN3ADTvXZPOifDRIeEVBUMR5GGNI92w96y2cu5FFXHyvnJasmJny2IqJnumrGwn10IRjahMkCr-5mZKIeM_OtUw1OQsWDgpClaY9XyBdxlRxyLfKJpnQNs3wb23zzkatPUKJJF1jbuxtosvp6_lAR0-GCTeEpVHRTEjha7SDGwLOS127ynT7X-bWItOiPZF5sJu__VvzOt96Sy22j2Q3BRq0B_dkl2xNTS0zTJXI1Yd7TKJfmF42beLILBvBF5_ZILUEkg')",
          }}
          aria-label="An ultra-wide cinematic photograph of a classic, open-sided 4x4 safari vehicle traversing the vast, golden African savannah at sunrise."
        ></div>
        {/* Dark Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-editorial/60 via-ink-editorial/30 to-ink-editorial/80 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-margin-edge flex flex-col items-center justify-center text-center">
        {/* Grid container for structured alignment if needed */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl mx-auto">
          <div className="md:col-span-8 md:col-start-3 flex flex-col items-center">
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-savannah-cream mb-stack-sm drop-shadow-sm">
              DESTINATIONS
            </h1>
            <p className="font-body-md text-body-md text-savannah-cream max-w-2xl opacity-90 tracking-wide">
              Journeys curated by passion, not by price
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center opacity-70">
        <span className="font-utility-label text-utility-label text-savannah-cream uppercase tracking-widest mb-2">
          Scroll
        </span>
        <div className="h-12 w-px bg-savannah-cream"></div>
      </div>
    </section>
  );
}

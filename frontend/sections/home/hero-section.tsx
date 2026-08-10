export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink-editorial">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/media/wildlife1.mp4"
          /* Placeholder wildlife/safari video. Wait for user to provide the actual URL */
        />
        {/* Cinematic Overlays - Lightened to let vibrancy through */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-editorial/90 via-ink-editorial/20 to-transparent" />
        <div className="absolute inset-0 bg-ink-editorial/10" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-margin-edge text-center mt-12 md:mt-0">
        {/* Eyebrow */}
        <p className="font-nav-link text-[14px] leading-tight tracking-[0.2em] text-savannah-cream mb-stack-md uppercase">
          I DREAM OF
        </p>
        {/* Headline H1 */}
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-savannah-cream mb-stack-lg max-w-[800px]">
          Journeys that leave you forever changed
        </h1>
        {/* CTA Button (Ghost) */}
        <a 
          className="inline-block border border-savannah-cream bg-transparent px-8 py-4 font-utility-label text-utility-label text-savannah-cream uppercase transition-all duration-300 hover:border-sunset-ember hover:bg-sunset-ember/10" 
          href="#"
        >
          DESIGN MY SAFARI
        </a>
      </div>

      {/* Scroll Indicator (Center Bottom) */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-4 text-savannah-cream/70">
        <span className="font-utility-label text-[10px] tracking-widest uppercase">SCROLL</span>
        <div className="h-12 w-px bg-savannah-cream/40" />
      </div>

      {/* Data Label (Bottom Right) */}
      <div className="absolute bottom-12 right-margin-edge z-10 hidden md:block">
        <p className="font-nav-link text-[12px] tracking-widest text-savannah-cream/80 flex items-center gap-2">
          Current Migration: Northern Serengeti <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
        </p>
      </div>
    </section>
  );
}

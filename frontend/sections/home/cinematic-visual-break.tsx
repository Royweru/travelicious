export function CinematicVisualBreak() {
  return (
    <section className="w-full px-margin-edge py-section-gap bg-savannah-cream">
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden group">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src="/media/wildlife2.mp4"
          /* Placeholder for the second video */
        />
        
        {/* Subtle overlay to enhance text legibility and mood */}
        <div className="absolute inset-0 bg-ink-editorial/20 group-hover:bg-ink-editorial/10 transition-colors duration-700" />

        {/* Inner Text / Caption */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 flex flex-col space-y-4">
          <span className="font-utility-label text-utility-label text-savannah-cream uppercase tracking-[0.25em]">
            A Moment of Pause
          </span>
          <h3 className="font-headline-md text-headline-md md:font-display-hero-mobile md:text-display-hero-mobile text-savannah-cream max-w-2xl drop-shadow-lg">
            Witness the wild exactly as it breathes—untamed, unfiltered, and unforgettable.
          </h3>
        </div>
      </div>
    </section>
  );
}

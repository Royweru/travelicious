export function CinematicHubHero() {
  return (
    <section className="relative w-full h-[716px] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Immersive Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="bg-cover bg-center w-full h-full" 
          style={{ backgroundImage: "url('/images/experiences/hub-hero.png')" }}
        />
        {/* Gradient Scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-editorial/40 via-ink-editorial/20 to-background z-10" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-20 px-margin-edge flex flex-col items-center max-w-4xl mx-auto pt-20">
        <h1 className="font-headline-lg text-headline-lg md:font-display-hero md:text-display-hero text-savannah-cream mb-6 uppercase tracking-wider">
          Experiences
        </h1>
        <p className="font-body-lg text-body-lg text-savannah-cream/90 max-w-2xl mb-12">
          Every Savannah journey is designed around what moves you.
        </p>
        
        {/* Filter Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-nav-link text-nav-link uppercase text-savannah-cream">
          <button className="pb-1 border-b border-savannah-cream hover:text-sunset-ember transition-colors duration-300">ALL</button>
          <button className="pb-1 border-b border-transparent text-savannah-cream/70 hover:text-savannah-cream hover:border-savannah-cream/50 transition-colors duration-300">WILDLIFE</button>
          <button className="pb-1 border-b border-transparent text-savannah-cream/70 hover:text-savannah-cream hover:border-savannah-cream/50 transition-colors duration-300">CULTURAL</button>
          <button className="pb-1 border-b border-transparent text-savannah-cream/70 hover:text-savannah-cream hover:border-savannah-cream/50 transition-colors duration-300">ADVENTURE</button>
          <button className="pb-1 border-b border-transparent text-savannah-cream/70 hover:text-savannah-cream hover:border-savannah-cream/50 transition-colors duration-300">WELLNESS</button>
          <button className="pb-1 border-b border-transparent text-savannah-cream/70 hover:text-savannah-cream hover:border-savannah-cream/50 transition-colors duration-300">PHOTOGRAPHY</button>
        </nav>
      </div>
    </section>
  );
}

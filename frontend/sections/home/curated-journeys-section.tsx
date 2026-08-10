import Image from "next/image";

export function CuratedJourneysSection() {
  return (
    <section id="journeys" className="bg-savannah-cream py-section-gap">
      {/* Section Title Header */}
      <div className="px-margin-edge text-center flex flex-col items-center">
        <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-ink-editorial mb-4">CURATED JOURNEYS</h2>
        <p className="font-body-lg text-body-lg text-secondary mb-stack-md max-w-2xl">Stories that move you</p>
        
        {/* Filters */}
        <div className="flex space-x-6 border-b border-dust-gray pb-4 mb-stack-lg w-full max-w-3xl justify-center">
          <button className="font-utility-label text-utility-label uppercase tracking-widest text-ink-editorial border-b-2 border-ink-editorial pb-1">All</button>
          <button className="font-utility-label text-utility-label uppercase tracking-widest text-secondary hover:text-sunset-ember transition-colors">Fly-In</button>
          <button className="font-utility-label text-utility-label uppercase tracking-widest text-secondary hover:text-sunset-ember transition-colors">Driving</button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-margin-edge pb-section-gap">
        {/* Featured Cinematic Card */}
        <article className="relative w-full aspect-video mb-section-gap overflow-hidden group">
          <div className="absolute inset-0 bg-ink-editorial/30 group-hover:bg-ink-editorial/40 transition-all duration-700 z-10" />
          <Image 
            alt="Featured Journey" 
            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="/images/journeys/featured-migration.png"
            fill
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-[5vw] max-w-4xl">
            <span className="font-utility-label text-utility-label text-savannah-cream mb-4 tracking-widest uppercase">FLY-IN SAFARI | 12 MIN</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-savannah-cream mb-6">The Great Migration</h2>
            <p className="font-body-lg text-body-lg text-savannah-cream/90 mb-8 max-w-2xl">Witness the earth&apos;s greatest spectacle as millions of hooves pound the vast plains. This immersive journey takes you deep into the heart of the Serengeti, capturing the raw, unyielding rhythm of nature. Experience the tension, the triumph, and the breathtaking scale of survival.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="font-utility-label text-utility-label uppercase tracking-widest px-8 py-4 border border-savannah-cream text-savannah-cream hover:bg-sunset-ember hover:border-sunset-ember transition-colors duration-300 rounded-none bg-transparent flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>play_circle</span>
                Watch the Story
              </button>
              <button className="font-utility-label text-utility-label uppercase tracking-widest px-8 py-4 border border-savannah-cream text-savannah-cream hover:bg-sunset-ember hover:border-sunset-ember transition-colors duration-300 rounded-none bg-transparent">
                Read the Journal
              </button>
            </div>
          </div>
        </article>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Grid Item 1 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-6">
              <Image 
                alt="Conservation Story" 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="/images/journeys/conservation-rangers.png"
                fill
              />
            </div>
            <div className="flex flex-col flex-grow">
              <span className="font-utility-label text-utility-label text-secondary mb-3 tracking-widest uppercase">CONSERVATION | 8 MIN</span>
              <h3 className="font-headline-sm text-headline-sm text-ink-editorial mb-4">Guardians of the Pride</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">An intimate portrait of the dedicated rangers who protect the apex predators of the reserve. Explore their daily challenges, the deep bond they share with the land, and the silent victories that ensure the survival of the species.</p>
              <a className="font-utility-label text-utility-label uppercase tracking-widest text-ink-editorial group-hover:text-sunset-ember transition-colors flex items-center gap-2 mt-auto" href="#">
                Watch the Story
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
              </a>
            </div>
          </article>
          
          {/* Grid Item 2 */}
          <article className="group cursor-pointer flex flex-col h-full mt-stack-lg md:mt-0">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-6">
              <Image 
                alt="Wildlife Story" 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="/images/journeys/leopard-twilight.png"
                fill
              />
            </div>
            <div className="flex flex-col flex-grow">
              <span className="font-utility-label text-utility-label text-secondary mb-3 tracking-widest uppercase">WILDLIFE | 6 MIN</span>
              <h3 className="font-headline-sm text-headline-sm text-ink-editorial mb-4">The Silent Stalker</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">A rare glimpse into the elusive world of the leopard. Follow the solitary hunter through the twilight shadows, uncovering the masterful camouflage and calculated precision that define this magnificent, solitary creature.</p>
              <a className="font-utility-label text-utility-label uppercase tracking-widest text-ink-editorial group-hover:text-sunset-ember transition-colors flex items-center gap-2 mt-auto" href="#">
                Watch the Story
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

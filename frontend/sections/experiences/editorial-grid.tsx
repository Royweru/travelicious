import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "The Silent Kings",
    category: "WILDLIFE",
    readTime: "12 MIN READ",
    description: "Deep in the heart of the Okavango Delta, a lineage of giants continues an ancient migration path. The silence of their movement contrasts sharply with their immense physical presence, a true paradox of the wild. Witnessing this slow, deliberate procession reveals the profound respect these creatures command over the land.",
    image: "/images/experiences/story-1.png",
    alt: "Elephant in the wild"
  },
  {
    id: 2,
    title: "Rhythms of the Earth",
    category: "EXPEDITION",
    readTime: "18 MIN READ",
    description: "The Namib Desert shifts constantly under the influence of unseen oceanic winds, creating a landscape that is never exactly the same twice. Our crossing required navigating both the physical dunes and the profound psychological isolation of such vast emptiness. It is a place where the concept of time feels entirely suspended.",
    image: "/images/experiences/story-2.png",
    alt: "Desert dunes at dawn",
    offset: true
  },
  {
    id: 3,
    title: "Threads of Heritage",
    category: "CULTURAL",
    readTime: "8 MIN READ",
    description: "In the remote highland villages, the art of weaving transcends mere craft; it is a vital language recording generations of oral history. Every pattern tells a specific story of survival, migration, and the changing seasons. We spent a week living alongside the weavers, attempting to understand the complex grammar of their textiles.",
    image: "/images/experiences/story-3.png",
    alt: "Artisan working"
  },
  {
    id: 4,
    title: "The Veins of the Basin",
    category: "CONSERVATION",
    readTime: "24 MIN READ",
    description: "Navigating the upper tributaries requires surrendering completely to the unpredictable rhythm of the river systems. The dense canopy overhead creates an enclosed, almost cathedral-like atmosphere of perpetual twilight. Here, the true scale of ecological interconnectedness becomes overwhelmingly apparent to any observer.",
    image: "/images/experiences/story-4.png",
    alt: "Aerial river view",
    offset: true
  }
];

export function EditorialGrid() {
  return (
    <section className="pt-section-gap pb-section-gap px-margin-edge max-w-[1600px] mx-auto w-full">
      <header className="mb-stack-lg md:mb-section-gap text-center md:text-left max-w-4xl">
        <h2 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero mb-stack-md text-ink-editorial">
          Experience Stories
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Chronicles from the untamed edges of the world. A curated collection of dispatches, field notes, and immersive narratives capturing the raw beauty of our planet.
        </p>
      </header>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[80px] gap-x-gutter lg:gap-x-[80px]">
        {stories.map((story) => (
          <article 
            key={story.id} 
            className={`group cursor-pointer flex flex-col gap-stack-md ${story.offset ? 'md:mt-section-gap' : ''}`}
          >
            <div className="overflow-hidden aspect-[4/5] bg-surface-container w-full relative">
              <Image 
                src={story.image}
                alt={story.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 font-utility-label text-utility-label text-on-surface-variant uppercase tracking-[0.15em]">
                <span>{story.category}</span>
                <span className="w-1 h-1 bg-dust-gray rounded-full"></span>
                <span>{story.readTime}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-ink-editorial transition-colors duration-300 group-hover:text-sunset-ember">
                {story.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {story.description}
              </p>
              <div className="mt-2 flex items-center gap-2 font-nav-link text-[14px] uppercase tracking-widest text-ink-editorial">
                READ STORY 
                <span className="material-symbols-outlined transition-transform duration-300 text-[18px] group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-section-gap flex justify-center">
        <button className="px-8 py-4 border border-ink-editorial text-ink-editorial font-nav-link text-nav-link uppercase tracking-widest hover:bg-sunset-ember hover:border-sunset-ember hover:text-savannah-cream transition-colors duration-300 rounded-none bg-transparent">
          LOAD MORE STORIES
        </button>
      </div>
    </section>
  );
}

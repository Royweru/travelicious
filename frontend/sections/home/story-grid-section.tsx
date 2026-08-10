import Image from "next/image";

export function StoryGridSection() {
  return (
    <section id="stories" className="pt-[120px] pb-section-gap px-margin-edge bg-savannah-cream">
      <header className="mb-section-gap max-w-4xl">
        <h2 className="font-display-hero text-display-hero md:font-display-hero text-ink-editorial mb-stack-sm">
          The Journal
        </h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          Chronicles of the untamed, curated for the discerning traveler. Explore narratives from the edge of the map.
        </p>
      </header>

      {/* Editorial Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] mb-stack-lg">
        {/* Story Card 1 */}
        <article className="story-card group cursor-pointer flex flex-col">
          <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-surface-container-highest">
            <Image 
              alt="The Jumping Dance" 
              className="object-cover transition-transform duration-700 ease-out" 
              src="/images/stories/maasai-dance.png" 
              fill
            />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-secondary mb-3">
              CULTURAL | 12MIN
            </span>
            <h3 className="story-headline font-headline-sm text-headline-sm text-ink-editorial mb-4 transition-colors duration-300">
              The Jumping Dance
            </h3>
            <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3">
              Witness the Adumu, the iconic leaping dance of the Maasai warriors. It is a profound display of strength, stamina, and cultural pride performed during the Eunoto coming-of-age ceremony. The rhythm of the chants echoes across the vast Rift Valley, a timeless testament to a deeply rooted heritage.
            </p>
            <div className="mt-auto flex items-center text-ink-editorial font-utility-label text-utility-label uppercase tracking-widest group-hover:text-sunset-ember transition-colors duration-300">
              <span>Read Story</span>
              <span className="story-arrow material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 ease-out" style={{ fontVariationSettings: "'FILL' 0" }}>
                arrow_right_alt
              </span>
            </div>
          </div>
        </article>

        {/* Story Card 2 */}
        <article className="story-card group cursor-pointer flex flex-col">
          <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-surface-container-highest">
            <Image 
              alt="Silence of the Fjords" 
              className="object-cover transition-transform duration-700 ease-out" 
              src="/images/stories/patagonia-fjords.png" 
              fill
            />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-secondary mb-3">
              EXPEDITION | 18MIN
            </span>
            <h3 className="story-headline font-headline-sm text-headline-sm text-ink-editorial mb-4 transition-colors duration-300">
              Silence of the Fjords
            </h3>
            <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3">
              Navigating the labyrinthine waterways of Patagonia demands reverence. Here, granite spires pierce the sky and ancient glaciers calve into freezing depths with a thunderous roar. Yet, between these moments of raw natural power, there is a profound, almost sacred silence that redefines the concept of solitude.
            </p>
            <div className="mt-auto flex items-center text-ink-editorial font-utility-label text-utility-label uppercase tracking-widest group-hover:text-sunset-ember transition-colors duration-300">
              <span>Read Story</span>
              <span className="story-arrow material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 ease-out" style={{ fontVariationSettings: "'FILL' 0" }}>
                arrow_right_alt
              </span>
            </div>
          </div>
        </article>

        {/* Story Card 3 */}
        <article className="story-card group cursor-pointer flex flex-col">
          <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-surface-container-highest">
            <Image 
              alt="Life In The Dust" 
              className="object-cover transition-transform duration-700 ease-out" 
              src="/images/stories/namib-desert.png" 
              fill
            />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-secondary mb-3">
              WILDLIFE | 8MIN
            </span>
            <h3 className="story-headline font-headline-sm text-headline-sm text-ink-editorial mb-4 transition-colors duration-300">
              Life In The Dust
            </h3>
            <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3">
              The Namib desert appears lifeless at first glance, a sea of shifting ochre sands. But closer inspection reveals an intricate ecosystem adapted to extreme desiccation. From fog-basking beetles to ancient Welwitschia plants, survival here is an art form honed over millennia of unrelenting sun.
            </p>
            <div className="mt-auto flex items-center text-ink-editorial font-utility-label text-utility-label uppercase tracking-widest group-hover:text-sunset-ember transition-colors duration-300">
              <span>Read Story</span>
              <span className="story-arrow material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 ease-out" style={{ fontVariationSettings: "'FILL' 0" }}>
                arrow_right_alt
              </span>
            </div>
          </div>
        </article>

        {/* Story Card 4 */}
        <article className="story-card group cursor-pointer flex flex-col">
          <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-surface-container-highest">
            <Image 
              alt="Sanctuary Beyond The Edge" 
              className="object-cover transition-transform duration-700 ease-out" 
              src="/images/stories/luxury-sanctuary.png" 
              fill
            />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-secondary mb-3">
              CONCIERGE | 15MIN
            </span>
            <h3 className="story-headline font-headline-sm text-headline-sm text-ink-editorial mb-4 transition-colors duration-300">
              Sanctuary Beyond The Edge
            </h3>
            <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3">
              True luxury in the wilderness is defined not by opulence, but by integration. We explore architectural marvels that serve as fortresses of comfort while remaining completely subservient to the landscapes they inhabit. These are the hideaways where the elite retreat to disconnect entirely.
            </p>
            <div className="mt-auto flex items-center text-ink-editorial font-utility-label text-utility-label uppercase tracking-widest group-hover:text-sunset-ember transition-colors duration-300">
              <span>Read Story</span>
              <span className="story-arrow material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 ease-out" style={{ fontVariationSettings: "'FILL' 0" }}>
                arrow_right_alt
              </span>
            </div>
          </div>
        </article>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-stack-lg">
        <button className="font-nav-link text-nav-link uppercase tracking-widest text-ink-editorial border border-ink-editorial px-12 py-4 hover:bg-ink-editorial hover:text-savannah-cream hover:border-sunset-ember transition-colors duration-300 sharp-corners">
          Load More Stories
        </button>
      </div>
    </section>
  );
}

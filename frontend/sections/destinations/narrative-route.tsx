import Image from "next/image";

export function NarrativeRoute() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[1024px] w-full flex flex-col justify-between overflow-hidden">
        {/* Background Imagery */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFNaX5BowWa1Aqrg-mGoM2XRybNCiS-cS9q1jAUmWGCihZKJGx03FHqrAtKMqzXkIhoRWOGaCGL71nLeDiH1dm6WYuX3GZyw3QhpXIN4VGwGkFNa_1sUbflHTQgcdz32-9bVaAJ_QnRpwMpNSJt2Fcy_H4phJIJj1ywdNT4MlJ4oMriQzHMLEVlAusomZkLGZ_y35tpYc6dNFUygwX81cYPy70CtwsUbmi2YmZomyOT70k_7MC8rs4eNuxlJTzmSWzW9TxptryFA"
            alt="A breathtaking cinematic wide shot of the Serengeti plains during the Great Migration."
            fill
            className="object-cover object-center"
            priority
          />
          {/* Scrim for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink-editorial/30 via-transparent to-ink-editorial/80"></div>
        </div>

        {/* Top Right Actions (Floating Shell) */}
        <div className="relative z-10 w-full flex justify-end px-margin-edge py-stack-md">
          <button
            aria-label="Close details"
            className="flex items-center gap-2 text-savannah-cream hover:text-sunset-ember transition-colors duration-300 group"
          >
            <span className="font-utility-label text-utility-label uppercase">Close</span>
            <span className="material-symbols-outlined text-[24px] group-hover:rotate-90 transition-transform duration-500">
              close
            </span>
          </button>
        </div>

        {/* Bottom Center Overlay */}
        <div className="relative z-10 w-full flex flex-col items-center text-center px-margin-edge pb-section-gap md:pb-stack-lg mt-auto text-savannah-cream">
          <p className="font-utility-label text-utility-label uppercase tracking-widest text-savannah-cream/80 mb-stack-sm">
            Wildlife Safari | 10 Days | 4 Locations
          </p>
          <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero mb-stack-sm max-w-5xl">
            The Great Migration Expedition
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl text-savannah-cream/90 mb-stack-lg">
            Follow the ancient path of two million wildebeest as they traverse the timeless plains of the Serengeti and the Maasai Mara.
          </p>
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 opacity-80 mt-stack-md animate-bounce">
            <span className="font-utility-label text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-16 bg-savannah-cream"></div>
          </div>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="w-full px-margin-edge py-section-gap">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-stack-lg md:gap-gutter">
          {/* Left Side: Narrative */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-stack-md">
            <h2 className="font-headline-md text-headline-md text-ink-editorial">
              A primal rhythm dictated by the rains, echoing across the vast expanse of East Africa.
            </h2>
            <div className="font-body-lg text-body-lg text-ink-editorial/80 flex flex-col gap-6">
              <p>
                To witness the Great Migration is to look back in time. It is not merely a movement of animals, but the pulsing lifeblood of the Serengeti ecosystem. Each year, driven by an ancient, inescapable instinct, over two million wildebeest, accompanied by hundreds of thousands of zebra and gazelle, embark on a perilous, cyclical journey in search of fresh grazing.
              </p>
              <p>
                This expedition places you at the very heart of this dramatic spectacle. From the calving grounds in the southern Serengeti, where vulnerability meets the raw power of new life, to the treacherous crossings of the Mara River, where crocodiles wait with prehistoric patience. We have curated a journey that ensures you are positioned in the right place, at the right moment.
              </p>
              <p>
                Our approach is one of quiet immersion. We eschew the crowded thoroughfares, favoring private concessions and exclusive camps where the silence of the savannah is broken only by the distant roar of a lion or the thundering hooves of the herds. Here, luxury is defined not by excess, but by access, authenticity, and the profound peace of being truly disconnected.
              </p>
            </div>
          </div>

          {/* Right Side: Sticky Utility Container */}
          <div className="md:col-span-5 lg:col-span-4 relative">
            <div className="sticky top-stack-lg flex flex-col gap-stack-md">
              {/* Map Visualization Placeholder */}
              <div className="w-full h-[400px] border border-dust-gray relative group overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkO--_PJ_Yvwfk8RzyvZJJxouiRrEKesMGerHBh3RyOfJl1LHHTk0wjzOTtL2Rqgg8-7qwM3F0hcdhEX7q-F8je0SdYtxpy-7NkAQz_yQ2_uJ9r7XQnhmtpdnxJaWz0QUnAxlyg2BDC0wQTt9K6kmaL5vwDanwwb3xPsN60_oKmbNhsxxs8_Og7kE7JNZAT55uk__oef4bi4UvViTy9j3TfFHeKawc1X_tTEDk3Te1YX7leKsVivAKZ9OkyWY6RWB8j8Gp-pb-ag"
                  alt="A highly stylized, minimalist map illustration showing a route across East Africa."
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-savannah-cream px-4 py-2 border border-dust-gray">
                  <span className="font-utility-label text-utility-label uppercase tracking-widest text-ink-editorial">
                    Route: NBO → MARA → SER
                  </span>
                </div>
              </div>

              {/* Flight Inclusions */}
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-ink-editorial border-b border-dust-gray pb-4 mb-4">
                  Flight Inclusions
                </h3>
                <ul className="flex flex-col">
                  <li className="py-4 border-b border-dust-gray flex items-start gap-4 group">
                    <span className="material-symbols-outlined text-ink-editorial/40 group-hover:text-sunset-ember transition-colors duration-300">
                      flight_takeoff
                    </span>
                    <span className="font-body-md text-body-md text-ink-editorial">
                      Private Charter transfers between camps
                    </span>
                  </li>
                  <li className="py-4 border-b border-dust-gray flex items-start gap-4 group">
                    <span className="material-symbols-outlined text-ink-editorial/40 group-hover:text-sunset-ember transition-colors duration-300">
                      receipt_long
                    </span>
                    <span className="font-body-md text-body-md text-ink-editorial">
                      All regional airstrip taxes and fees
                    </span>
                  </li>
                  <li className="py-4 border-b border-dust-gray flex items-start gap-4 group">
                    <span className="material-symbols-outlined text-ink-editorial/40 group-hover:text-sunset-ember transition-colors duration-300">
                      luggage
                    </span>
                    <span className="font-body-md text-body-md text-ink-editorial">
                      VIP luggage handling upon arrival in Nairobi
                    </span>
                  </li>
                </ul>
              </div>

              {/* Ghost Button CTA */}
              <button className="w-full mt-4 border border-ink-editorial py-5 px-8 font-utility-label text-utility-label uppercase tracking-widest text-ink-editorial hover:bg-sunset-ember hover:border-sunset-ember hover:text-savannah-cream transition-all duration-300 flex items-center justify-center gap-3 group">
                Download Full Itinerary
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

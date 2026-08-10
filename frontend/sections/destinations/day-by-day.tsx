import Image from "next/image";

export function DayByDay() {
  return (
    <>
      {/* Header / Hero spacing */}
      <header className="pt-[100px] md:pt-[204px] px-margin-edge pb-section-gap">
        <h1 className="font-display-hero text-display-hero-mobile md:font-display-hero md:text-display-hero text-center max-w-5xl mx-auto">
          THE JOURNEY
        </h1>
      </header>

      {/* Itinerary Section */}
      <div className="px-margin-edge">
        {/* Day 1 */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          <div className="md:col-span-5 aspect-[4/5] overflow-hidden relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0hFvOf_4zOIj49ReCaVaePj1p3U5TXuckfz4kziDa7gYt4fLjqVcovamBJq2pmn8p1F6-0-uPZlusLjGAJ_vpnuHNH403HZRbMZxHeVi9mFTzHYfOVdcHJmSTeXIeur_qtCgSzcjje2Q62yEhm97gXZcq-BlFGNgf1zl5dq5sc9uDNpbdQnLl5tblzL5Ht2p6GtwnISRURJKRjmqNpz8hb9Vj0Z2j7LXhvDV51r3kJyMNgzmnfIM-0nGsicDqBUkX5TeZJ4ymiw"
              alt="Vintage twin-engine bush plane landing"
              fill
              className="object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <span className="font-utility-label text-utility-label uppercase tracking-widest text-secondary mb-4">
              DAY 1
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-6">Arrival in Arusha</h2>
            <div className="font-body-lg text-body-lg text-secondary mb-12 space-y-6">
              <p>
                Touch down at Kilimanjaro International Airport where you will be met by your private concierge. A seamless transfer whisks you away from the bustling terminal to a sanctuary of calm hidden amidst coffee plantations.
              </p>
              <p>
                Spend the afternoon unwinding in the lush gardens or enjoying a restorative spa treatment to prepare for the days ahead. As evening falls, gather for a private briefing with your expedition leader over a curated welcome dinner.
              </p>
            </div>
            <div className="mt-auto border-t border-dust-gray pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block font-utility-label text-utility-label text-secondary mb-1">
                    ACCOMMODATION
                  </span>
                  <span className="font-nav-link text-nav-link text-ink-editorial">
                    LEGENDARY LODGE
                  </span>
                </div>
                <div>
                  <span className="block font-utility-label text-utility-label text-secondary mb-1">
                    MEALS
                  </span>
                  <span className="font-nav-link text-nav-link text-ink-editorial">
                    WELCOME DINNER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Day 2 */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          <div className="md:col-span-6 flex flex-col justify-center order-2 md:order-1">
            <span className="font-utility-label text-utility-label uppercase tracking-widest text-secondary mb-4">
              DAY 2
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-6">Descent into the Crater</h2>
            <div className="font-body-lg text-body-lg text-secondary mb-12 space-y-6">
              <p>
                An early morning charter flight transports you to the rim of the Ngorongoro Crater. Descend into this ancient caldera, a self-contained ecosystem teeming with life, before the heat of the day takes hold.
              </p>
              <p>
                Navigate the crater floor in your private 4x4, seeking out the dense populations of predators and the endangered black rhino. A bespoke picnic lunch is served under the shade of yellow fever trees, a moment of stillness amidst the wild theater.
              </p>
            </div>
            <div className="mt-auto border-t border-dust-gray pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block font-utility-label text-utility-label text-secondary mb-1">
                    ACCOMMODATION
                  </span>
                  <span className="font-nav-link text-nav-link text-ink-editorial">
                    CRATER LODGE
                  </span>
                </div>
                <div>
                  <span className="block font-utility-label text-utility-label text-secondary mb-1">
                    MEALS
                  </span>
                  <span className="font-nav-link text-nav-link text-ink-editorial">
                    BREAKFAST, LUNCH, DINNER
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 aspect-[4/5] overflow-hidden order-1 md:order-2 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs_Y5h1GYyN20FU5UDAvpNfg_TQxTBzV-H-OAKURzfDVcTMNBzup-MAJDSPnnaH_vfPbUnCaGvwf-RkHXHEryYbvLDjr6fnKEUEOl4Z94bHGGQfqLklbv5zOs08B-fZzZhNyF6uCdhs_TMCQiGKs2mA4efRDxkgqLIPw7D29VAhK3tLr4WAf52LQmNvM2BZMwYoAmvJkP-9XJviE3PU4S4RkQGXVAxSe1ifjXfT6hu59DD9ICCO6ORba6B5QDS1bT3_j-5zpN_LQ"
              alt="Lone acacia tree silhouetted against the Ngorongoro Crater"
              fill
              className="object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </article>

        {/* Day 3-5 */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          <div className="md:col-span-5 aspect-[4/5] overflow-hidden relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb1ZjSoc8iMaLDxu5EvJOhjm0Hp_ETS7Pbrf-jIPU_9IG7wHalrWwZOTNaJ27Y-auDR58Q3YOao_qx3Nts0xkcSFYG05fYN72WjYcZrpnreLdVCWo-KwrVY3H-OuFI93lhWZJvd5BgKNlT9aOvyLRphhYVAchCcSZzbaxG16pPdYEU6ZwCy9-_-mrUOT59bkbgDvChHbuwlnkzMpWEa3AvdetjKFED9Ly66uECoTEjEB3UoXenLa6nQwqT_06w33S-pTGwC3Ubjg"
              alt="Close-up of a leopard resting on a branch"
              fill
              className="object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <span className="font-utility-label text-utility-label uppercase tracking-widest text-secondary mb-4">
              DAY 3 - 5
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-6">The Endless Plains</h2>
            <div className="font-body-lg text-body-lg text-secondary mb-12 space-y-6">
              <p>
                Fly into the heart of the Serengeti, tracking the anticipated path of the Great Migration. Your luxury mobile camp is situated in a private concession, offering unparalleled access to the sprawling herds without the crowds.
              </p>
              <p>
                Spend three days immersed in the rhythm of the wild. Embark on walking safaris led by indigenous guides, track big cats in the golden light of dawn, and return each evening to the warm glow of the campfire and uncompromising comfort.
              </p>
            </div>
            <div className="mt-auto border-t border-dust-gray pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block font-utility-label text-utility-label text-secondary mb-1">
                    ACCOMMODATION
                  </span>
                  <span className="font-nav-link text-nav-link text-ink-editorial">
                    SINGITA SABORA TENTED CAMP
                  </span>
                </div>
                <div>
                  <span className="block font-utility-label text-utility-label text-secondary mb-1">
                    MEALS
                  </span>
                  <span className="font-nav-link text-nav-link text-ink-editorial">
                    ALL INCLUSIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* What's Included Section */}
      <section className="bg-surface-bright py-section-gap px-margin-edge border-t border-dust-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-stack-lg">
            WHAT&apos;S INCLUDED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-stack-md gap-x-gutter">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-ink-editorial text-2xl">check</span>
              <span className="font-body-lg text-body-lg text-secondary pt-1">All internal flights</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-ink-editorial text-2xl">check</span>
              <span className="font-body-lg text-body-lg text-secondary pt-1">Private 4x4 safari vehicle</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-ink-editorial text-2xl">check</span>
              <span className="font-body-lg text-body-lg text-secondary pt-1">Expert private guides</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-ink-editorial text-2xl">check</span>
              <span className="font-body-lg text-body-lg text-secondary pt-1">All park & conservation fees</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-ink-editorial text-2xl">check</span>
              <span className="font-body-lg text-body-lg text-secondary pt-1">Bespoke concierge service</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-ink-editorial text-2xl">check</span>
              <span className="font-body-lg text-body-lg text-secondary pt-1">Luxury boutique lodges</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

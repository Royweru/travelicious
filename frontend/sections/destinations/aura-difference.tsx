export function AuraDifference() {
  return (
    <div className="pt-32 pb-section-gap px-margin-edge bg-savannah-cream">
      <section className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[614px] py-section-gap">
        <div className="text-center mb-stack-lg">
          <span className="block w-px h-16 bg-dust-gray mx-auto mb-8"></span>
          <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-ink-editorial uppercase tracking-tight">
            THE AURA DIFFERENCE
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter md:gap-16 lg:gap-24 w-full">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 mb-stack-md flex items-center justify-center text-ink-editorial group-hover:text-sunset-ember transition-colors duration-500">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
              >
                draw
              </span>
            </div>
            <h3 className="font-nav-link text-nav-link uppercase tracking-widest text-ink-editorial mb-4">
              TAILOR-MADE
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Every safari is designed from scratch around YOU, ensuring a journey as unique as the landscape.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 mb-stack-md flex items-center justify-center text-ink-editorial group-hover:text-sunset-ember transition-colors duration-500">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
              >
                explore
              </span>
            </div>
            <h3 className="font-nav-link text-nav-link uppercase tracking-widest text-ink-editorial mb-4">
              EXPERT GUIDES
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Our guides are storytellers of the savannah, with decades of wisdom and a deep respect for the wild.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 mb-stack-md flex items-center justify-center text-ink-editorial group-hover:text-sunset-ember transition-colors duration-500">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}
              >
                eco
              </span>
            </div>
            <h3 className="font-nav-link text-nav-link uppercase tracking-widest text-ink-editorial mb-4">
              CONSERVATION PARTNER
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Your presence directly contributes to the protection of vital ecosystems and the empowerment of local communities.
            </p>
          </div>
        </div>

        <div className="mt-stack-lg pt-stack-md w-full flex justify-center">
          <button className="group relative px-8 py-4 border border-ink-editorial text-ink-editorial font-utility-label text-utility-label uppercase tracking-widest rounded-none overflow-hidden transition-all duration-300 hover:border-sunset-ember hover:text-sunset-ember">
            <span className="relative z-10">DESIGN MY SAFARI</span>
            <div className="absolute inset-0 bg-savannah-cream transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
          </button>
        </div>
      </section>
    </div>
  );
}

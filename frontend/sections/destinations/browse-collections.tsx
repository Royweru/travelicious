import Image from "next/image";
import Link from "next/link";

export function BrowseCollections() {
  return (
    <div className="flex-grow pt-section-gap px-margin-edge pb-section-gap">
      {/* Header Section */}
      <section className="text-center mb-stack-lg">
        <h1 className="font-display-hero text-display-hero hidden md:block text-ink-editorial mb-stack-md">
          BROWSE BY COLLECTION
        </h1>
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:hidden text-ink-editorial mb-stack-md">
          BROWSE BY COLLECTION
        </h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-8 border-b border-dust-gray pb-4 w-max mx-auto">
          <button className="font-nav-link text-nav-link uppercase text-ink-editorial border-b border-ink-editorial pb-1 transition-colors duration-300">
            ALL
          </button>
          <button className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-sunset-ember transition-colors duration-300">
            WILDLIFE
          </button>
          <button className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-sunset-ember transition-colors duration-300">
            BEACH &amp; BUSH
          </button>
          <button className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-sunset-ember transition-colors duration-300">
            CULTURAL
          </button>
        </div>
      </section>

      {/* Featured Card */}
      <section className="mb-section-gap">
        <Link
          className="group block relative w-full overflow-hidden flex flex-col md:flex-row gap-gutter border-b border-dust-gray pb-stack-lg"
          href="#"
        >
          <div className="w-full md:w-2/3 relative overflow-hidden rounded-none aspect-[21/9]">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90 filter"
              alt="A wide, cinematic shot of a vast African savannah during the golden hour."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD78ALhK4kuW9JuZqbQpivtScCP8Uuehsp6WTIgAMlq_ysWCbkj2UWmefSFj5uhg3VbbeB0R6P15EFRgQXyifZ1I2zEYTiwFzOQxm9_lD9-Jk48Fy3vd19j89T0_GjfSKMN0QIiHIMuBCNoK1UlHxVD4xnaX1_6W41aNDVm-Y54XtaBhnR3lkE8wsI9CvOyV9qo3QlgBFP2Cbs5_JbWZGEpRnmfiSS8NOsNm7R7IWO24AqwMceZSdwm8pyowH3ZfUMgbF86UygQOA"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <span className="font-utility-label text-utility-label uppercase text-on-secondary-container">
                WILDLIFE SAFARI
              </span>
              <span className="font-utility-label text-utility-label uppercase text-on-secondary-container">
                10 DAYS | 4 LOCATIONS
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-ink-editorial mb-stack-sm group-hover:text-sunset-ember transition-colors duration-300">
              The Great Migration Expedition
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
              Witness one of the most profound natural spectacles on earth. This journey traces the ancient routes of millions of wildebeest and zebra across the endless plains, offering intimate, unhurried encounters with apex predators and delicate ecosystems alike. Curated for those who seek the raw pulse of the wild without compromising on profound comfort.
            </p>
            <div className="border-t border-dust-gray pt-4 mb-stack-md">
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check</span> Private Mobile Tented Camps
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check</span> Specialist Photographic Guides
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check</span> Hot Air Balloon Safari
                </li>
              </ul>
              <div className="inline-block bg-surface-container-high px-3 py-1 font-utility-label text-utility-label uppercase text-ink-editorial">
                BEST TIME: JULY - OCTOBER
              </div>
            </div>
            <div className="font-nav-link text-nav-link uppercase text-ink-editorial flex items-center gap-2 mt-auto">
              READ THE FULL STORY{" "}
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Secondary Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-stack-lg">
        {/* Card 1 */}
        <Link
          className="group block relative border-b border-dust-gray pb-stack-md"
          href="#"
        >
          <div className="relative overflow-hidden rounded-none aspect-[4/5] mb-stack-sm">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90 filter"
              alt="A serene, pristine white sand beach meeting deep turquoise waters."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvwih_Ob1UUSGFzw7b8X_hqFLfN9E_rea7pS1063R55-K7Ys7dD69TWI_-r0LI2y9f_uKjvyDh4K3IaV8sS4SYw7iHDtAUU4_V0O9eKQDDxYLCCb76dztAiAVkArddIcDWRk6-cxgcLQOD9pn5nc-PcSeldm2P4LpRmExvJ86UIVP6c-nHgMTYhbb9bnuJh4xY5QuN6WkGQpHypASFv4NchYms5VvI12TMTA8n1yOV9gSPAjoUXGNJ7L_W8R-sr1HGq5TWVMG0w"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-utility-label text-utility-label uppercase text-on-secondary-container">
              BEACH &amp; BUSH
            </span>
            <span className="font-utility-label text-utility-label uppercase text-on-secondary-container">
              14 DAYS | 3 LOCATIONS
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-editorial mb-4 group-hover:text-sunset-ember transition-colors duration-300">
            Dunes &amp; Delta Rhythm
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-4">
            A sophisticated contrast of elemental extremes. Begin deep within the flooded labyrinth of the Okavango Delta, tracking elusive leopards from traditional mokoros. Conclude your narrative on the remote, windswept shores of the Skeleton Coast, where ancient desert dunes cascade directly into the churning Atlantic. A masterpiece of juxtaposed luxury.
          </p>
          <div className="border-t border-dust-gray pt-4 mb-6">
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-1 mb-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check</span> Mokoro Delta Excursions
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check</span> Skeleton Coast Scenic Flight
              </li>
            </ul>
            <div className="inline-block bg-surface-container-high px-3 py-1 font-utility-label text-utility-label uppercase text-ink-editorial">
              BEST TIME: MAY - SEPTEMBER
            </div>
          </div>
          <div className="font-nav-link text-nav-link uppercase text-ink-editorial flex items-center gap-2">
            READ THE STORY{" "}
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          className="group block relative border-b border-dust-gray pb-stack-md"
          href="#"
        >
          <div className="relative overflow-hidden rounded-none aspect-[4/5] mb-stack-sm">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90 filter"
              alt="A striking portrait shot featuring a traditional Maasai warrior."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAukegH7cz3PNK2wNsoPf8cOJUrBsiiX2Lv20ZeM6k5_owpHU-0JbyA_drb4zgwlacqMjL8hU5m9kwVXeOWDi5s1-IXBTuURhrYRz7AhJAURa3pVWi5VaDzU2u1jomsDrDcSWLc8C8VzmJ7vyhYi1_bSqJpgmpEs0uL23x4SRKkMBgxUJnxbxEFLCfv7s1rL8zJIfWktvDEyXtN2aUykvcmoqkN6Du3Fk7z1L6x1p6UmGrIzud190ffrASQkvn3na-oUztmldqsDw"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-utility-label text-utility-label uppercase text-on-secondary-container">
              CULTURAL
            </span>
            <span className="font-utility-label text-utility-label uppercase text-on-secondary-container">
              7 DAYS | 2 LOCATIONS
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-editorial mb-4 group-hover:text-sunset-ember transition-colors duration-300">
            Voices of the Rift Valley
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-4">
            An intimate, deeply immersive exploration of the ancient cultures that have stewarded these lands for millennia. Walk alongside indigenous guides whose knowledge of the flora, fauna, and spiritual essence of the Rift Valley transforms a simple safari into a profound cultural exchange. Slow down and listen to the stories etched into the earth.
          </p>
          <div className="border-t border-dust-gray pt-4 mb-6">
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-1 mb-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check</span> Guided Walking Safaris
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check</span> Authentic Community Immersion
              </li>
            </ul>
            <div className="inline-block bg-surface-container-high px-3 py-1 font-utility-label text-utility-label uppercase text-ink-editorial">
              BEST TIME: YEAR-ROUND
            </div>
          </div>
          <div className="font-nav-link text-nav-link uppercase text-ink-editorial flex items-center gap-2">
            READ THE STORY{" "}
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(20); // start at 20%

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollPercent = maxScroll > 0 ? container.scrollLeft / maxScroll : 0;
      const progressWidth = 20 + scrollPercent * 80;
      setProgress(progressWidth);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.querySelector(".gallery-card") as HTMLElement;
      if (card) {
        const gap = parseInt(window.getComputedStyle(container).gap) || 32;
        const scrollAmount = card.offsetWidth + gap;
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.querySelector(".gallery-card") as HTMLElement;
      if (card) {
        const gap = parseInt(window.getComputedStyle(container).gap) || 32;
        const scrollAmount = card.offsetWidth + gap;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Trigger initial
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="py-section-gap w-full overflow-hidden flex flex-col relative mt-24">
      {/* Section Header */}
      <div id="gallery" className="px-margin-edge mb-stack-lg flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-editorial mb-stack-sm">
            WHERE THE WILD THINGS ARE
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Kenya&apos;s most extraordinary landscapes, curated for you
          </p>
        </div>
        {/* Navigation Controls */}
        <div className="flex gap-4 self-start md:self-end">
          <button
            aria-label="Previous destination"
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center border border-ink-editorial text-ink-editorial hover:bg-sunset-ember hover:border-sunset-ember hover:text-savannah-cream transition-colors duration-300 group"
          >
            <span className="material-symbols-outlined font-light group-hover:-translate-x-1 transition-transform duration-300">
              arrow_back
            </span>
          </button>
          <button
            aria-label="Next destination"
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center border border-ink-editorial text-ink-editorial hover:bg-sunset-ember hover:border-sunset-ember hover:text-savannah-cream transition-colors duration-300 group"
          >
            <span className="material-symbols-outlined font-light group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex gap-gutter px-margin-edge overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth w-full pb-8"
      >
        {/* Card 1: Masai Mara */}
        <div className="gallery-card relative flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] snap-center overflow-hidden bg-surface-dim cursor-pointer group">
          <Image
            alt="Masai Mara Landscape"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/gallery/masai-mara.png"
          />
          <div className="card-overlay absolute inset-0 bg-gradient-to-t from-ink-editorial/70 via-ink-editorial/20 to-transparent transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2 z-10 w-full">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-savannah-cream/80">
              12 Safaris
            </span>
            <h3 className="font-headline-sm text-headline-sm text-savannah-cream">MASAI MARA</h3>
          </div>
        </div>

        {/* Card 2: Amboseli */}
        <div className="gallery-card relative flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] snap-center overflow-hidden bg-surface-dim cursor-pointer group">
          <Image
            alt="Amboseli Elephant"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/gallery/amboseli.png"
          />
          <div className="card-overlay absolute inset-0 bg-gradient-to-t from-ink-editorial/70 via-ink-editorial/20 to-transparent transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2 z-10 w-full">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-savannah-cream/80">
              8 Safaris
            </span>
            <h3 className="font-headline-sm text-headline-sm text-savannah-cream">AMBOSELI</h3>
          </div>
        </div>

        {/* Card 3: Samburu */}
        <div className="gallery-card relative flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] snap-center overflow-hidden bg-surface-dim cursor-pointer group">
          <Image
            alt="Samburu Giraffe"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/gallery/samburu.png"
          />
          <div className="card-overlay absolute inset-0 bg-gradient-to-t from-ink-editorial/70 via-ink-editorial/20 to-transparent transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2 z-10 w-full">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-savannah-cream/80">
              6 Safaris
            </span>
            <h3 className="font-headline-sm text-headline-sm text-savannah-cream">SAMBURU</h3>
          </div>
        </div>

        {/* Card 4: Tsavo */}
        <div className="gallery-card relative flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] snap-center overflow-hidden bg-surface-dim cursor-pointer group">
          <Image
            alt="Tsavo Landscape"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/gallery/tsavo.png"
          />
          <div className="card-overlay absolute inset-0 bg-gradient-to-t from-ink-editorial/70 via-ink-editorial/20 to-transparent transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2 z-10 w-full">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-savannah-cream/80">
              10 Safaris
            </span>
            <h3 className="font-headline-sm text-headline-sm text-savannah-cream">TSAVO</h3>
          </div>
        </div>

        {/* Card 5: Laikipia */}
        <div className="gallery-card relative flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] snap-center overflow-hidden bg-surface-dim cursor-pointer group pr-margin-edge">
          <Image
            alt="Laikipia Rhino"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/gallery/laikipia.png"
          />
          <div className="card-overlay absolute inset-0 bg-gradient-to-t from-ink-editorial/70 via-ink-editorial/20 to-transparent transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2 z-10 w-full">
            <span className="font-utility-label text-utility-label uppercase tracking-[0.2em] text-savannah-cream/80">
              4 Safaris
            </span>
            <h3 className="font-headline-sm text-headline-sm text-savannah-cream">LAIKIPIA</h3>
          </div>
        </div>
      </div>

      {/* Progress Indicator (Optional subtle line) */}
      <div className="px-margin-edge mt-8">
        <div className="w-full h-[1px] bg-dust-gray relative">
          <div
            className="absolute top-0 left-0 h-full bg-ink-editorial transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}

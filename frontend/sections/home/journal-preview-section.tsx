"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export function JournalPreviewSection() {
  const parallaxImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768 && parallaxImageRef.current) {
        const parent = parallaxImageRef.current.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          // Calculate scroll progress (0 when entering from bottom, 1 when leaving top)
          const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
          
          // Translate the image container from -10% to 10% 
          const val = (clampedProgress - 0.5) * 20;
          parallaxImageRef.current.style.transform = `translateY(${val}%)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="journal" className="flex-grow flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Column: Sticky Editorial Index (45%) */}
      <div className="w-full md:w-[45%] bg-savannah-cream px-margin-edge pb-section-gap pt-stack-lg md:pt-section-gap relative">
        <div className="md:sticky md:top-[120px] md:pr-gutter max-w-xl flex flex-col gap-stack-lg">
          {/* Section Header */}
          <div className="flex flex-col gap-stack-md">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-editorial">
              STORIES FROM THE WILD
            </h2>
            <p className="font-body-lg text-body-lg text-secondary">
              A curated collection of observations, field notes, and immersive narratives gathered by our guides from the deepest corners of the untamed world.
            </p>
            <div>
              <Link 
                href="#"
                className="group inline-flex items-center gap-2 pb-1 border-b border-ink-editorial hover:border-sunset-ember transition-colors duration-300"
              >
                <span className="font-utility-label text-utility-label text-ink-editorial group-hover:text-sunset-ember uppercase transition-colors duration-300">
                  Read All Stories
                </span>
                <span 
                  className="material-symbols-outlined text-sm text-ink-editorial group-hover:text-sunset-ember transition-colors duration-300" 
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          
          {/* Divider */}
          <hr className="border-dust-gray w-full" />
          
          {/* Article List */}
          <div className="flex flex-col">
            {/* Article 1 */}
            <Link 
              href="#"
              className="group py-stack-sm flex flex-col gap-2 border-b border-dust-gray last:border-0 relative overflow-hidden"
            >
              <h3 
                className="font-headline-sm text-headline-sm text-ink-editorial group-hover:text-sunset-ember transition-colors duration-300 relative z-10" 
                style={{ fontSize: "24px", lineHeight: "32px" }}
              >
                The Language of the Delta
              </h3>
              <p className="font-nav-link text-nav-link text-secondary opacity-70 relative z-10 uppercase tracking-widest">
                October 12, 2024 • 8 min
              </p>
            </Link>
            {/* Article 2 */}
            <Link 
              href="#"
              className="group py-stack-sm flex flex-col gap-2 border-b border-dust-gray last:border-0 relative overflow-hidden"
            >
              <h3 
                className="font-headline-sm text-headline-sm text-ink-editorial group-hover:text-sunset-ember transition-colors duration-300 relative z-10" 
                style={{ fontSize: "24px", lineHeight: "32px" }}
              >
                Following the Migration Line
              </h3>
              <p className="font-nav-link text-nav-link text-secondary opacity-70 relative z-10 uppercase tracking-widest">
                September 28, 2024 • 12 min
              </p>
            </Link>
            {/* Article 3 */}
            <Link 
              href="#"
              className="group py-stack-sm flex flex-col gap-2 border-b border-dust-gray last:border-0 relative overflow-hidden"
            >
              <h3 
                className="font-headline-sm text-headline-sm text-ink-editorial group-hover:text-sunset-ember transition-colors duration-300 relative z-10" 
                style={{ fontSize: "24px", lineHeight: "32px" }}
              >
                Dusk in the Great Rift
              </h3>
              <p className="font-nav-link text-nav-link text-secondary opacity-70 relative z-10 uppercase tracking-widest">
                September 14, 2024 • 6 min
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Full-bleed Immersive Image (55%) */}
      <div className="w-full md:w-[55%] min-h-[716px] md:min-h-screen overflow-hidden relative bg-ink-editorial">
        <div 
          ref={parallaxImageRef}
          className="absolute inset-0 -top-[20%] h-[140%] w-full will-change-transform" 
        >
          <Image
            src="/images/wild_journal.png"
            alt="Journal background"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export function CoverStory() {
  return (
    <article className="w-full flex flex-col pt-24">
      {/* Top Section: Ultra-wide 21:9 cinematic image */}
      <div className="w-full aspect-[21/9] relative bg-ink-editorial">
        <Image
          src="/images/experiences/cover-story.png"
          alt="Cinematic shot of a lion pride at sunset"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle Scrim for navbar visibility if needed, though nav is transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bottom Section: Centered text block */}
      <div className="max-w-[800px] mx-auto w-full px-margin-edge pt-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="font-utility-label text-utility-label uppercase text-ink-editorial/60 mb-6 tracking-widest">
          WILDLIFE ENCOUNTER | 18 MIN READ
        </p>

        {/* Headline */}
        <h1 className="font-headline-lg text-headline-lg md:font-display-hero md:text-display-hero mb-8 text-ink-editorial">
          In the Company of Lions
        </h1>

        {/* Narrative Excerpt */}
        <p className="font-body-lg text-body-lg text-ink-editorial/80 mb-12 max-w-2xl">
          The air was still, heavy with the scent of dry earth and anticipation. As the first pale light broke over the horizon, we tracked them in absolute silence. There is a profound, quiet intensity in watching a pride awaken—a fleeting moment where the raw power of the wilderness feels both intimately close and impossibly vast.
        </p>

        {/* CTA */}
        <Link 
          href="#"
          className="group inline-flex items-center gap-2 font-nav-link text-nav-link uppercase text-ink-editorial hover:text-sunset-ember transition-colors duration-300 pb-1 border-b border-transparent hover:border-sunset-ember"
        >
          <span>Read the Full Story</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

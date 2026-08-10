import Image from "next/image";
import Link from "next/link";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative w-full py-section-gap flex flex-col md:flex-row items-center">
      {/* Left Column: Content (45%) */}
      <div className="w-full md:w-[45%] pl-margin-edge pr-gutter flex flex-col justify-center space-y-stack-md py-stack-lg md:py-0">
        <blockquote className="font-quote-italic text-quote-italic text-ink-editorial">
          &quot;We don&apos;t sell safaris. We craft transformations.&quot;
        </blockquote>
        <p className="font-body-lg text-body-lg text-secondary max-w-lg">
          Every journey we curate is a bespoke narrative, woven into the raw tapestry of the wild. We believe in silence over schedules, immersion over itineraries, and the profound realization that nature is the ultimate luxury.
        </p>
        <Link 
          href="#"
          className="inline-flex items-center group font-nav-link text-nav-link uppercase text-ink-editorial hover:text-sunset-ember transition-colors duration-300 mt-4 w-fit"
        >
          Read Our Story
          <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
            arrow_right_alt
          </span>
        </Link>
      </div>
      
      {/* Right Column: Image (55%) */}
      <div className="w-full md:w-[55%] h-[60vh] md:h-[90vh] relative">
        <Image 
          alt="High-contrast black and white wildlife photography of a rhino in the savannah" 
          fill
          className="object-cover" 
          src="/images/philosophy-rhino.png"
        />
      </div>
      
      {/* Subtle Dotted Divider */}
      <div className="absolute bottom-0 left-margin-edge right-margin-edge border-b border-dotted border-ink-editorial/30" />
    </section>
  );
}

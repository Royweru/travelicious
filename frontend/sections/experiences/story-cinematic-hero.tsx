import Link from "next/link";
import Image from "next/image";

interface StoryCinematicHeroProps {
  slug: string;
}

export function StoryCinematicHero({}: StoryCinematicHeroProps) {
  return (
    <section className="relative w-full h-screen">
      {/* Background Imagery / Video Placeholder */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBMWrK8u_t0c4VAZRcqOVLIedyz26sKywXRa8NjobfSOhXRfVzd5DcNN8Ia0H6h3Kpz3l4LVYl1Ko5nCWXZGCOnHqxvwuSQWZVVUCFCuYADBo-z2hLV7MsO6BMk_e-pEqWfj0pH1P8DYzCKK35kJGo-L_pKNzGlNscr7STC_n6qy7oR8xRZ1OvYVcvP58K9lKNxWwdpwEsg24Km2pIjeROcLmTkKhBjfvVvKeoX1llj1q35pE_dsXro2y5ADSziTXnIekITyvrCw"
          alt="A breathtaking cinematic wide shot of a pride of lions resting in the golden tall grass of the African savannah at sunset."
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient Scrim for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-editorial/90 via-ink-editorial/40 to-transparent"></div>
      </div>

      {/* Top Right Actions */}
      <div className="absolute top-margin-edge right-margin-edge z-50">
        <Link 
          href="/experiences" 
          aria-label="Close Story" 
          className="group flex items-center gap-2 text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
        >
          <span className="font-utility-label text-utility-label uppercase tracking-widest">CLOSE STORY</span>
          <span className="material-symbols-outlined font-light text-2xl group-hover:scale-110 transition-transform duration-300">
            close
          </span>
        </Link>
      </div>

      {/* Bottom Center Content Overlay */}
      <div className="absolute bottom-margin-edge left-0 w-full flex flex-col items-center justify-end px-margin-edge pb-stack-lg z-40 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-stack-sm animate-fade-in-up">
          {/* Eyebrow */}
          <span className="font-utility-label text-utility-label text-savannah-cream uppercase tracking-[0.3em]">
            WILDLIFE ENCOUNTER
          </span>
          {/* Headline */}
          <h1 className="font-headline-lg text-headline-lg text-savannah-cream italic mt-2">
            In the Company of Lions
          </h1>
          {/* Byline */}
          <div className="font-body-md text-body-md text-savannah-cream/80 mt-4 max-w-lg">
            <p>
              By David Ochieng <span className="mx-2 opacity-50">|</span> 18 min read <span className="mx-2 opacity-50">|</span> Mara North
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-margin-edge left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <span className="font-utility-label text-utility-label text-savannah-cream uppercase">Scroll to begin</span>
        <div className="w-[1px] h-12 bg-savannah-cream/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-savannah-cream animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}

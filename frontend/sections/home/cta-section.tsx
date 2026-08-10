'use client'

export function CtaSection() {
  return (
    <section className="relative min-h-[921px] flex flex-col justify-center items-center px-margin-edge py-section-gap overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" 
          style={{ backgroundImage: "url('/images/vivid_sunset.png')" }}
        />
        {/* Very light gradient just to ensure text pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-editorial/40 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-stack-md mt-section-gap">
        <h2 className="font-headline-lg text-headline-lg md:font-display-hero md:text-display-hero italic text-savannah-cream drop-shadow-lg">
          Your journey begins with a conversation
        </h2>
        
        <div className="flex flex-col items-center space-y-stack-sm pt-stack-sm">
          <button 
            onClick={() => window.dispatchEvent(new Event('open-inquiry'))}
            className="bg-sunset-ember text-on-primary font-utility-label text-utility-label px-12 py-5 uppercase tracking-widest hover:bg-on-tertiary-fixed transition-colors duration-300 ease-out border-none outline-none shadow-xl transform hover:-translate-y-1"
          >
            START YOUR ENQUIRY
          </button>
          <p className="font-utility-label text-utility-label text-on-primary/80 pt-4 tracking-[0.25em] uppercase">
            Or call us: +254 724 428 867
          </p>
        </div>
      </div>
    </section>
  );
}

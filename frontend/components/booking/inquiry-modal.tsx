"use client";

import { useState, useEffect } from "react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [step, setStep] = useState(1);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset step after closing animation
      setTimeout(() => setStep(1), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => setStep(s => Math.min(s + 1, 6)); // 6 is success state
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 z-[100] bg-savannah-cream flex flex-col animate-in slide-in-from-bottom-full duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-gutter border-b border-dust-gray">
        <span className="font-utility-label text-utility-label uppercase text-ink-editorial">
          Plan Your Safari
        </span>
        <button
          onClick={onClose}
          className="text-ink-editorial hover:text-sunset-ember transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </header>

      {/* Progress */}
      {step < 6 && (
        <div className="flex justify-center items-center py-8 gap-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-3 h-3 rounded-full border-2 ${
                s === step ? 'border-sunset-ember bg-sunset-ember' : 
                s < step ? 'border-ink-editorial bg-ink-editorial' : 'border-dust-gray bg-transparent'
              }`} />
              {s < 5 && (
                <div className={`w-8 h-[2px] ${s < step ? 'bg-ink-editorial' : 'bg-dust-gray'}`} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-gutter max-w-2xl mx-auto w-full overflow-y-auto">
        {step === 1 && (
          <div className="w-full animate-in slide-in-from-right fade-in duration-300">
            <h2 className="font-headline-lg text-headline-lg text-ink-editorial text-center mb-12">What brings you to Travelicious?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "compass_calibration", title: "Specific Safari", desc: "I'm interested in a specific itinerary." },
                { icon: "favorite", title: "General Idea", desc: "I need help planning from scratch." },
                { icon: "calendar_month", title: "Dates Ready", desc: "I have dates and I'm ready to book." },
                { icon: "call", title: "Speak to Us", desc: "I'd prefer to speak to someone." }
              ].map((opt, i) => (
                <button key={i} onClick={handleNext} className="border border-dust-gray p-8 text-left hover:border-sunset-ember transition-colors group">
                  <span className="material-symbols-outlined text-4xl text-sunset-ember mb-4">{opt.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm mb-2">{opt.title}</h3>
                  <p className="font-body-md text-body-md text-secondary">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full animate-in slide-in-from-right fade-in duration-300">
            <h2 className="font-headline-lg text-headline-lg text-ink-editorial text-center mb-8">Which journey interests you?</h2>
            <div className="relative border-b-2 border-ink-editorial mb-8">
              <input type="text" placeholder="Search journeys..." className="w-full bg-transparent border-none outline-none font-headline-md text-headline-md placeholder:text-ink-editorial/30 pb-2" />
              <span className="absolute right-0 bottom-4 material-symbols-outlined text-[32px] text-ink-editorial">search</span>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <button onClick={handleNext} className="text-left border border-dust-gray p-4 hover:border-sunset-ember">
                <div className="w-full aspect-[4/3] bg-dust-gray mb-4 relative overflow-hidden"><img src="/images/journeys/featured-migration.png" alt="Migration" className="object-cover w-full h-full" /></div>
                <h3 className="font-headline-sm text-headline-sm">The Great Migration</h3>
                <p className="font-utility-label text-utility-label text-secondary mt-2">10 DAYS | 4 LOCATIONS</p>
              </button>
              <button onClick={handleNext} className="text-left border border-dust-gray p-4 hover:border-sunset-ember">
                <div className="w-full aspect-[4/3] bg-dust-gray mb-4 relative overflow-hidden"><img src="/images/journeys/leopard-twilight.png" alt="Leopard" className="object-cover w-full h-full" /></div>
                <h3 className="font-headline-sm text-headline-sm">The Big Five Classic</h3>
                <p className="font-utility-label text-utility-label text-secondary mt-2">7 DAYS | 3 LOCATIONS</p>
              </button>
            </div>
            <div className="text-center">
              <button onClick={handleNext} className="font-nav-link text-nav-link uppercase text-secondary hover:text-sunset-ember underline decoration-1 underline-offset-4">I&apos;m not sure yet &mdash; I&apos;d like recommendations</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full animate-in slide-in-from-right fade-in duration-300">
            <h2 className="font-headline-lg text-headline-lg text-ink-editorial text-center mb-12">When and Who?</h2>
            <div className="border border-dust-gray p-6 mb-8 flex items-center gap-4">
              <span className="material-symbols-outlined text-sunset-ember">calendar_month</span>
              <span className="font-body-lg text-body-lg">My dates are flexible</span>
              <input type="checkbox" className="ml-auto w-6 h-6 accent-sunset-ember" defaultChecked />
            </div>
            <div className="space-y-6">
              {[
                { label: "Adults (18+)", val: 2 },
                { label: "Teens (13-17)", val: 0 },
                { label: "Children (7-12)", val: 0 }
              ].map((g, i) => (
                <div key={i} className="flex justify-between items-center pb-6 border-b border-dust-gray">
                  <span className="font-headline-sm text-headline-sm">{g.label}</span>
                  <div className="flex items-center gap-6">
                    <button className="text-secondary hover:text-ink-editorial"><span className="material-symbols-outlined">remove</span></button>
                    <span className="font-headline-sm text-headline-sm w-4 text-center">{g.val}</span>
                    <button className="text-secondary hover:text-ink-editorial"><span className="material-symbols-outlined">add</span></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="w-full animate-in slide-in-from-right fade-in duration-300">
            <h2 className="font-headline-lg text-headline-lg text-ink-editorial text-center mb-8">What matters most to you?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {["Wildlife viewing", "Photography", "Cultural experiences", "Walking safari", "Hot air balloon", "Luxury accommodation"].map((int, i) => (
                <button key={i} className="border border-dust-gray py-4 px-2 text-center font-utility-label text-utility-label uppercase tracking-widest hover:border-sunset-ember hover:bg-sunset-ember/5 transition-colors">
                  {int}
                </button>
              ))}
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm mb-6">Your budget per person (USD)</h3>
              <input type="range" min="1000" max="15000" defaultValue="4500" step="500" className="w-full accent-sunset-ember h-2 bg-dust-gray rounded-none appearance-none cursor-pointer" />
              <div className="flex justify-between mt-4 font-utility-label text-utility-label text-secondary">
                <span>$1,000</span>
                <span className="text-sunset-ember text-lg">$4,500</span>
                <span>$15,000+</span>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="w-full animate-in slide-in-from-right fade-in duration-300">
            <h2 className="font-headline-lg text-headline-lg text-ink-editorial text-center mb-10">Almost there. How can we reach you?</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name *" className="w-full border-b border-dust-gray bg-transparent py-4 outline-none focus:border-ink-editorial font-body-lg text-body-lg" />
                <input type="text" placeholder="Last Name *" className="w-full border-b border-dust-gray bg-transparent py-4 outline-none focus:border-ink-editorial font-body-lg text-body-lg" />
              </div>
              <input type="email" placeholder="Email Address *" className="w-full border-b border-dust-gray bg-transparent py-4 outline-none focus:border-ink-editorial font-body-lg text-body-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full border-b border-dust-gray bg-transparent py-4 outline-none focus:border-ink-editorial font-body-lg text-body-lg" />
              
              <div className="pt-6 flex flex-col gap-4">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-sunset-ember" defaultChecked />
                  <span className="font-body-md text-body-md text-secondary">I&apos;d like to receive monthly stories and wildlife dispatches.</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-sunset-ember" />
                  <span className="font-body-md text-body-md text-secondary">I&apos;d prefer to be contacted by WhatsApp.</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="w-full text-center animate-in zoom-in-95 fade-in duration-500 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-sunset-ember/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[48px] text-sunset-ember">check_circle</span>
            </div>
            <h2 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero text-ink-editorial mb-6">Your inquiry has been sent</h2>
            <p className="font-body-lg text-body-lg text-secondary max-w-md mx-auto mb-12">
              Thank you. One of our safari designers will be in touch within 24 hours. Your reference is <strong>AUR-2026-7842</strong>.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={onClose} className="font-nav-link text-nav-link uppercase tracking-widest border border-ink-editorial px-8 py-4 hover:bg-ink-editorial hover:text-savannah-cream transition-colors">
                Back to Site
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      {step < 6 && (
        <footer className="p-gutter border-t border-dust-gray flex justify-between items-center bg-savannah-cream/90 backdrop-blur-sm">
          {step > 1 ? (
            <button onClick={handleBack} className="font-nav-link text-nav-link uppercase text-secondary hover:text-ink-editorial transition-colors">
              Back
            </button>
          ) : (
            <div />
          )}
          {step < 5 ? (
            <button onClick={handleNext} className="bg-ink-editorial text-savannah-cream px-8 py-4 font-nav-link text-nav-link uppercase tracking-widest hover:bg-sunset-ember transition-colors">
              Continue
            </button>
          ) : (
            <button onClick={handleNext} className="bg-sunset-ember text-savannah-cream px-8 py-4 font-nav-link text-nav-link uppercase tracking-widest hover:bg-ink-editorial transition-colors">
              Send My Inquiry
            </button>
          )}
        </footer>
      )}
    </div>
  );
}

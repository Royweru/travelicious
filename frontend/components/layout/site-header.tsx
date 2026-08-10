"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-savannah-cream/90 backdrop-blur-md border-b border-dust-gray text-ink-editorial shadow-sm"
            : "bg-transparent text-savannah-cream"
        }`}
      >
      <div className="w-full flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href="/" className="font-headline-md text-headline-md tracking-tighter">
          TRAVELICIOUS
        </Link>


        {/* Right actions */}
        <div className={`flex items-center gap-4 ${isScrolled ? "text-ink-editorial" : "text-savannah-cream"}`}>
          <button 
            aria-label="Itinerary" 
            className="hover:text-sunset-ember transition-colors duration-300 relative"
            onClick={() => window.dispatchEvent(new Event('open-itinerary'))}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>luggage</span>
            {/* Dynamic Quote Badge */}
            <span className="absolute -top-1 -right-2 bg-sunset-ember text-white text-[10px] font-utility-label w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          
          <button 
            aria-label="Search" 
            className="hover:text-sunset-ember transition-colors duration-300 ml-2"
            onClick={() => setIsSearchOpen(true)}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
          </button>

          <button
            onClick={() => window.dispatchEvent(new Event('open-inquiry'))}
            className={`font-nav-link text-nav-link tracking-[0.15em] uppercase border px-6 py-3 transition-colors duration-300 hidden sm:block ml-4 ${
              isScrolled
                ? "border-ink-editorial hover:bg-ink-editorial hover:text-savannah-cream"
                : "border-savannah-cream hover:bg-savannah-cream hover:text-ink-editorial"
            }`}
          >
            ENQUIRE
          </button>

          <button 
            aria-label="Menu" 
            className="flex items-center gap-2 hover:text-sunset-ember transition-colors duration-300 ml-4"
            onClick={() => window.dispatchEvent(new Event('open-menu'))}
          >
            <span className="font-utility-label text-utility-label uppercase hidden md:block">Menu</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
          </button>
        </div>
      </div>
    </header>
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-ink-editorial/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setIsSearchOpen(false)}
        >
          {/* Modal Card Container */}
          <div 
            className="w-full max-w-4xl bg-savannah-cream rounded-none p-8 md:p-12 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Inside Modal */}
            <button 
              className="absolute top-6 right-6 text-ink-editorial/60 hover:text-sunset-ember transition-colors"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <span className="material-symbols-outlined text-[32px]">close</span>
            </button>
            
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-utility-label text-utility-label uppercase tracking-widest text-ink-editorial/60">
                What are you looking for?
              </p>
              <div className="relative border-b-2 border-ink-editorial pb-2">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Destinations, lodges, experiences..." 
                  className="w-full bg-transparent border-none outline-none font-headline-md text-headline-md text-ink-editorial placeholder:text-ink-editorial/30 pr-12"
                />
                <span className="absolute right-0 bottom-4 material-symbols-outlined text-[32px] text-ink-editorial">search</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

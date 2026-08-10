"use client";

import { useEffect } from "react";

interface ItineraryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ItineraryDrawer({ isOpen, onClose }: ItineraryDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-savannah-cream text-ink-editorial border-l border-dust-gray z-50 flex flex-col justify-between transform transition-transform duration-300">
        {/* Header */}
        <div className="p-gutter flex justify-between items-center border-b border-dust-gray">
          <span className="font-headline-sm text-headline-sm">Your Journey</span>
          <button
            onClick={onClose}
            className="text-ink-editorial hover:text-sunset-ember transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Empty State */}
        <div className="flex-grow flex flex-col items-center justify-center p-gutter text-center">
          <span
            className="material-symbols-outlined text-[64px] mb-stack-sm opacity-20"
            style={{ fontVariationSettings: "'wght' 100" }}
          >
            explore
          </span>
          <h2 className="font-headline-md text-headline-md mb-4">Your canvas is blank</h2>
          <p className="font-body-md text-body-md opacity-60 max-w-[280px] mx-auto">
            Curate your ultimate adventure. Add expeditions and bespoke experiences here to begin
            shaping your story.
          </p>
        </div>

        {/* Footer / Disabled Button */}
        <div className="p-gutter border-t border-dust-gray bg-white">
          <button
            className="w-full bg-dust-gray text-ink-editorial/50 font-utility-label text-utility-label py-4 uppercase tracking-widest cursor-not-allowed"
            disabled
          >
            REQUEST BESPOKE QUOTE
          </button>
          <p className="font-utility-label text-[10px] text-center mt-4 opacity-40">
            ADD EXPERIENCES TO PROCEED
          </p>
        </div>
      </div>
    </>
  );
}

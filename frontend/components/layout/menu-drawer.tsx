"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
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
      <div className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-ink-editorial text-savannah-cream z-50 flex flex-col justify-between transform transition-transform duration-300">
        {/* Header */}
        <div className="p-gutter flex justify-between items-center border-b border-savannah-cream/10">
          <span className="font-utility-label text-utility-label uppercase opacity-40">
            NAVIGATION
          </span>
          <button
            onClick={onClose}
            className="text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow flex flex-col justify-center px-gutter gap-stack-sm">
          <Link
            href="/"
            onClick={onClose}
            className="font-headline-lg text-3xl md:text-4xl italic text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            href="/destinations"
            onClick={onClose}
            className="font-headline-lg text-3xl md:text-4xl italic text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
          >
            DESTINATIONS
          </Link>
          <Link
            href="/experiences"
            onClick={onClose}
            className="font-headline-lg text-3xl md:text-4xl italic text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
          >
            EXPERIENCES
          </Link>
          <Link
            href="/stories"
            onClick={onClose}
            className="font-headline-lg text-3xl md:text-4xl italic text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
          >
            STORIES
          </Link>
          <Link
            href="/philosophy"
            onClick={onClose}
            className="font-headline-lg text-3xl md:text-4xl italic text-savannah-cream hover:text-sunset-ember transition-colors duration-300"
          >
            OUR PHILOSOPHY
          </Link>
          <button
            onClick={() => {
              onClose();
              window.dispatchEvent(new Event('open-inquiry'));
            }}
            className="text-left font-headline-lg text-3xl md:text-4xl italic text-sunset-ember hover:opacity-80 transition-opacity mt-8"
          >
            PLAN YOUR SAFARI
          </button>
        </nav>

        {/* Footer */}
        <div className="p-gutter border-t border-savannah-cream/10 flex flex-col gap-stack-sm">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Link className="font-nav-link text-nav-link hover:text-sunset-ember transition-colors" href="#">
                INSTAGRAM
              </Link>
              <Link className="font-nav-link text-nav-link hover:text-sunset-ember transition-colors" href="#">
                YOUTUBE
              </Link>
              <Link className="font-nav-link text-nav-link hover:text-sunset-ember transition-colors" href="#">
                PINTEREST
              </Link>
            </div>
          </div>
          <a
            className="font-utility-label text-utility-label opacity-60 hover:opacity-100 transition-opacity"
            href="tel:+254724428867"
          >
            +254 724 428 867
          </a>
        </div>
      </div>
    </>
  );
}

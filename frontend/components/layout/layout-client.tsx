"use client";

import { useState, useEffect } from "react";
import { SiteHeader } from "./site-header";
import { MenuDrawer } from "./menu-drawer";
import { ItineraryDrawer } from "./itinerary-drawer";
import { InquiryModal } from "../booking/inquiry-modal";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const handleOpenMenu = () => setIsMenuOpen(true);
    const handleOpenItinerary = () => setIsItineraryOpen(true);
    const handleOpenInquiry = () => setIsInquiryOpen(true);

    window.addEventListener('open-menu', handleOpenMenu);
    window.addEventListener('open-itinerary', handleOpenItinerary);
    window.addEventListener('open-inquiry', handleOpenInquiry);

    return () => {
      window.removeEventListener('open-menu', handleOpenMenu);
      window.removeEventListener('open-itinerary', handleOpenItinerary);
      window.removeEventListener('open-inquiry', handleOpenInquiry);
    };
  }, []);

  return (
    <>
      {children}

      <MenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
      <ItineraryDrawer 
        isOpen={isItineraryOpen} 
        onClose={() => setIsItineraryOpen(false)} 
      />
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />
    </>
  );
}

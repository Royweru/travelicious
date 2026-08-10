import Image from "next/image";

export function InvestmentDetail() {
  return (
    <>
      {/* Massive Cinematic Hero Image */}
      <section className="relative w-full h-[80vh] md:h-screen">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDplVsd_UQ-KwPs5vSb3_hTL7xQPq4iaLwfMHZxe8fH8f_n1R3BYTjPqkSZezDm-iwH63KWojK1VTVKfOdzM4fjrFQDXblEhSph6DdUSUtVg_trzE3X0sWk0fSHN2IURQvfXVEOF5L3jeenkJqWBWezgjDbofoyEvymYR-d2tbJ7A-nSrKFjIvL-gSdi5v00rC5kLDq4x3HBt5hMlxAnGsqtZHc-auqyu0WmVJsaZagShrY9lsZtgLgJlCRg_upHVd6xPa68fZVsw"
          alt="Sundowner drinks at golden hour in the African savanna"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-savannah-cream via-transparent to-transparent opacity-80"></div>
      </section>

      {/* Story Conclusion & Booking Section */}
      <section className="py-section-gap px-margin-edge bg-savannah-cream flex flex-col items-center text-center">
        {/* Narrative Paragraph */}
        <p className="font-body-lg text-body-lg max-w-3xl mx-auto text-ink-editorial">
          Each journey is a singular expression of your curiosity, woven from the finest threads of the African landscape. We do not offer templates; we offer possibilities.
        </p>

        {/* Separator */}
        <div className="w-[1px] h-24 bg-dust-gray my-stack-lg"></div>

        {/* Investment Section */}
        <div className="flex flex-col items-center">
          <h2 className="font-utility-label text-utility-label text-on-surface-variant mb-stack-sm">
            INVESTMENT
          </h2>
          <p className="font-headline-sm text-headline-sm text-ink-editorial mb-stack-md">
            From $8,500 USD per person sharing
          </p>
          {/* Primary CTA */}
          <button className="bg-ink-editorial text-savannah-cream px-10 py-5 font-utility-label text-utility-label tracking-[0.2em] uppercase rounded-none hover:bg-sunset-ember transition-colors duration-300">
            REQUEST A PERSONALISED QUOTE
          </button>
          {/* Contact Utility */}
          <p className="font-utility-label text-utility-label text-on-surface-variant mt-stack-sm">
            OR CALL US: +254 724 428 867
          </p>
        </div>
      </section>
    </>
  );
}

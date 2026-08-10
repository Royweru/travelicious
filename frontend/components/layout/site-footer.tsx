import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-ink-editorial text-savannah-cream w-full pt-24 pb-12 px-8 md:px-[5vw] z-20 relative">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Dispatch Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h3 className="font-quote-italic text-quote-italic mb-4">The Dispatch</h3>
            <p className="font-body-md text-body-md text-savannah-cream/80 mb-8 max-w-sm">
              Subscribe for untamed narratives and exclusive expedition access.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
              <div className="relative flex-grow">
                <input
                  className="w-full bg-transparent border-0 border-b border-savannah-cream/30 focus:border-savannah-cream focus:ring-0 px-0 py-3 font-body-md text-body-md text-savannah-cream placeholder:text-savannah-cream/40 transition-colors rounded-none"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
              <button
                className="bg-sunset-ember text-savannah-cream font-nav-link text-nav-link tracking-[0.15em] uppercase px-8 py-3 hover:bg-white hover:text-ink-editorial transition-colors duration-300 flex-shrink-0"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-utility-label text-utility-label tracking-[0.2em] uppercase text-savannah-cream/50 mb-2">
                EXPLORE
              </h4>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                THE EXPERIENCE
              </Link>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                CONSERVATION
              </Link>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                PRIVATE CHARTER
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-utility-label text-utility-label tracking-[0.2em] uppercase text-savannah-cream/50 mb-2">
                CONNECT
              </h4>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                ENQUIRE
              </Link>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                PRESS
              </Link>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                CAREERS
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-utility-label text-utility-label tracking-[0.2em] uppercase text-savannah-cream/50 mb-2">
                FOLLOW
              </h4>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                INSTAGRAM
              </Link>
              <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
                JOURNAL
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-savannah-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="font-headline-md text-headline-md tracking-tighter leading-none">
              TRAVELICIOUS
            </span>
            <span className="font-body-md text-body-md text-savannah-cream/60 md:ml-4">
              © 2026 TRAVELICIOUS SAFARI OPERATORS. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-savannah-cream/60">
            <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
              Contact Us
            </Link>
            <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
              Terms &amp; Conditions
            </Link>
            <Link className="font-body-md text-body-md hover:text-sunset-ember transition-colors" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

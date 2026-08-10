import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent border-b border-dust-gray/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-ink-editorial">
        <Link href="/" className="font-serif text-3xl font-bold tracking-tight">
          Travelicious
        </Link>

        <nav className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase">
          <Link href="/experience" className="hover:text-sunset-ember transition-colors">Experience</Link>
          <Link href="/safaris" className="hover:text-sunset-ember transition-colors">Safaris</Link>
          <Link href="/wildlife" className="hover:text-sunset-ember transition-colors">Wildlife</Link>
          <Link href="/gallery" className="hover:text-sunset-ember transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-sunset-ember transition-colors">About</Link>
          <Link href="/stories" className="hover:text-sunset-ember transition-colors">Stories</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/enquire" className="hidden md:inline-flex px-6 py-2 border border-ink-editorial hover:bg-ink-editorial hover:text-savannah-cream transition-colors uppercase font-sans text-xs tracking-widest">
            Enquire
          </Link>
          <button className="md:hidden p-2" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

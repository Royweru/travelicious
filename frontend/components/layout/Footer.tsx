import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-ink-editorial text-savannah-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-dust-gray/20 pb-16">
        <div className="md:col-span-1">
          <h2 className="font-serif text-3xl font-bold mb-6">Travelicious</h2>
          <p className="font-sans text-sm text-dust-gray leading-relaxed">
            Tailor-made African journeys crafting memories that leave you forever changed. Experience the true essence of luxury safaris.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-dust-gray mb-6">Explore</h3>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link href="/experience" className="hover:text-sunset-ember transition-colors">The Experience</Link></li>
            <li><Link href="/safaris" className="hover:text-sunset-ember transition-colors">Our Safaris</Link></li>
            <li><Link href="/wildlife" className="hover:text-sunset-ember transition-colors">Wildlife Calendar</Link></li>
            <li><Link href="/gallery" className="hover:text-sunset-ember transition-colors">Visual Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-dust-gray mb-6">Connect</h3>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link href="/about" className="hover:text-sunset-ember transition-colors">Our Story</Link></li>
            <li><Link href="/stories" className="hover:text-sunset-ember transition-colors">Dispatches Journal</Link></li>
            <li><Link href="/enquire" className="hover:text-sunset-ember transition-colors">Plan Your Journey</Link></li>
            <li><Link href="/faq" className="hover:text-sunset-ember transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-dust-gray mb-6">Newsletter</h3>
          <p className="font-sans text-sm text-dust-gray mb-4">
            Join our inner circle for exclusive dispatches from the wild.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-b border-dust-gray/50 py-2 w-full focus:outline-none focus:border-sunset-ember transition-colors font-sans text-sm"
            />
            <button type="submit" className="ml-4 font-sans text-xs uppercase tracking-widest hover:text-sunset-ember transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center font-sans text-xs text-dust-gray">
        <p>&copy; {new Date().getFullYear()} Travelicious. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-savannah-cream transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-savannah-cream transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

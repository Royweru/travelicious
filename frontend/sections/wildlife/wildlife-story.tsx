export function WildlifeStory({ slug }: { slug?: string }) {
  return (
    <>
      
<aside className="md:w-[30%]">
<div className="md:sticky md:top-32 bg-white p-stack-md border border-dust-gray">
<p className="font-utility-label text-utility-label uppercase mb-8 border-b border-dust-gray pb-4">Fact Sheet</p>
<div className="space-y-6">
<div>
<p className="text-secondary font-nav-link text-[10px] uppercase mb-1">Weight</p>
<p className="font-headline-sm text-headline-sm">190kg</p>
</div>
<div>
<p className="text-secondary font-nav-link text-[10px] uppercase mb-1">Lifespan</p>
<p className="font-headline-sm text-headline-sm">10-14 Years</p>
</div>
<div>
<p className="text-secondary font-nav-link text-[10px] uppercase mb-1">Diet</p>
<p className="font-headline-sm text-headline-sm">Carnivore</p>
</div>
<div>
<p className="text-secondary font-nav-link text-[10px] uppercase mb-1">Status</p>
<span className="inline-block mt-1 px-3 py-1 bg-sunset-ember text-white font-nav-link text-[11px] uppercase tracking-widest">Vulnerable</span>
</div>
<div className="pt-4 border-t border-dust-gray">
<p className="text-secondary font-nav-link text-[10px] uppercase mb-1">Best seen</p>
<p className="font-body-md text-body-md">Maasai Mara, Serengeti</p>
</div>
</div>
</div>
</aside>

<article className="md:w-[70%] lg:pl-16">
<div className="max-w-2xl">
<p className="font-body-lg text-body-lg text-ink-editorial mb-8 leading-relaxed">
                    The African lion, often referred to as the &quot;King of the Savannah,&quot; stands as the ultimate symbol of wild majesty. Unlike other felines, lions are deeply social creatures, forming complex family units known as prides. These prides, dominated by a coalition of males and a sisterhood of lionesses, represent one of nature&apos;s most sophisticated social structures.
                </p>
<p className="font-body-md text-body-md text-secondary mb-12">
                    In the golden light of the Serengeti, the roar of a male lion can be heard for over five miles, a resonant vibration that serves as both a territorial claim and a call to his kin. To witness them in their natural habitat is to understand the raw power and silent grace that has inspired human mythology for millennia.
                </p>
</div>

<figure className="my-stack-md">
<img className="w-full aspect-[21/9] object-cover border border-dust-gray" data-alt="A wide-angle landscape photograph of an African lion pride resting under an acacia tree at dusk. The sky is a deep indigo and orange, casting long shadows across the golden grasslands. Several lionesses and cubs are visible in the soft, low light, creating a serene and powerful atmosphere of family unity in the wild." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDISVeH0LVF8Gf-MstDqRkM-rPCaOSciuVsAo_rBZvi_mchyOYpMczrX9_GiiXlAQCI2x-pUujkYJU_Epyu7m10CSEWKTiOBHmEy5lLwr_K6eh55LtoOoE4YQaQ173157SWTzoJxqVymq5QiXW7HLIp2-37gvI46wZDtr_VQin-39Mc_lQfBCCls-cRbaxdp0m3NlnR9CMQHCrZVepi_0ly54W8aqMp1qQa-JRudvEl88jZwnfN8Al0Fx0GF5himnLFyrXUhIp4A" />
<figcaption className="mt-4 font-nav-link text-[11px] text-secondary uppercase tracking-widest text-right">A pride resting in the Central Serengeti</figcaption>
</figure>

<div className="bg-ink-editorial text-savannah-cream p-stack-md flex items-center justify-between mb-16">
<div className="flex items-center gap-6">
<button className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-sunset-ember hover:border-sunset-ember transition-all" onClick={() => console.log('play')}>
<span className="material-symbols-outlined">play_arrow</span>
</button>
<div>
<p className="font-utility-label text-[10px] uppercase text-white/50 tracking-[0.2em]">Atmospheric Soundscape</p>
<p className="font-nav-link text-nav-link">Listen to a lion&apos;s roar</p>
</div>
</div>
<div className="hidden md:flex gap-1 items-end h-8">
<div className="w-1 bg-white/20 h-4 animate-pulse"></div>
<div className="w-1 bg-white/20 h-8 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
<div className="w-1 bg-white/20 h-6 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
<div className="w-1 bg-white/20 h-3 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
</div>
</div>
<div className="max-w-2xl mb-16">
<h3 className="font-headline-md text-headline-md mb-6 italic">The Guardians of the Plain</h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed mb-12">
                    Conservation efforts are critical to the survival of these apex predators. Facing threats from habitat loss and human-wildlife conflict, the African lion population has seen a significant decline over the last century. Our expeditions at AURA are designed to support local conservancies that protect these habitats, ensuring that future generations can still experience the thrill of a lion&apos;s gaze across the plains.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-dust-gray p-8 mb-16">
<div className="aspect-square">
<img alt="David the Ranger" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqDVwighCltZm93vtsNiEwsXDgjI2v_k1hsoPtjLaQClFQtZBwQdulc7vSe09FFcfDobtRzSTjq42O2ho7n0nYT-yuSVZjd4sixwV0-Mfj1nyfNRcr0kN9nYjj_nmFOpKEdgXqSzKP6sOXaqtmI7OfALY8cVN_4eTP8T9YKrvGDAT3FBg1cVnJvg4IN9PrqINY7sSdkXfdiexgDfIUwrkzIkxA9eigO7DeItuWkUBM0lEw8AWcpWy-KXUu8DaAtwHRafsUbxevw" />
</div>
<div className="flex flex-col h-full justify-center">
<p className="font-utility-label text-[10px] uppercase text-sunset-ember tracking-widest mb-4">Ranger Profile</p>
<blockquote className="font-quote-italic text-[24px] italic leading-snug mb-6">
                        &quot;I have spent twenty years tracking the Marsh Pride. Every day, they teach me something new about resilience and the delicate balance of this land.&quot;
                    </blockquote>
<p className="font-nav-link text-nav-link mb-8">— David, Head Ranger</p>
<a className="font-utility-label text-utility-label uppercase flex items-center gap-2 hover:text-sunset-ember transition-colors group" href="#">
                        Read David&apos;s Story <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</article>
    </>
  )
}

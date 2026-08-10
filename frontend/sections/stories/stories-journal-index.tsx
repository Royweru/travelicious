export function StoriesJournalIndex() {
  return (
    <>
      


<header className="relative w-full h-[70vh] flex flex-col justify-end items-center pb-stack-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEMBHYizahLk6BRND83LtxcWBgfBPGpBZrI1MyoKamcXaZHycObMGjccuHY7e3as2gnY_oLEj4sWl2TEbx4L5_VuaKPmYA0JUmBii2ayFiggAGzYtin6pHK0HsyjTkuzX-5mAlPaEY3LSehpQ70zdJNeGmM2QTt9BxqO88K8PZ_9K5SjwloG8pPQckyt3-X7iFVVqb1365hvm4qvLa27EKBH43MKTJPMyjKFHOl-4W0m5Da_HKv_h9D3HXnEPhJhdpIU4FIP02pQ')` }}>
<div className="absolute inset-0 hero-scrim"></div>
<div className="relative z-10 text-center flex flex-col items-center gap-stack-sm w-full px-margin-edge">
<h1 className="font-display-hero text-display-hero text-savannah-cream uppercase tracking-tight">STORIES</h1>
<p className="font-body-lg text-body-lg text-savannah-cream/90 max-w-2xl">Dispatches from the field</p>
<div className="w-full max-w-3xl mt-stack-md flex flex-col md:flex-row gap-gutter">
<input className="w-full bg-transparent border-0 border-b border-savannah-cream/50 text-savannah-cream placeholder-savannah-cream/50 font-utility-label text-utility-label focus:ring-0 focus:border-savannah-cream px-0 py-2" placeholder="SEARCH JOURNAL..." type="text"/>
<div className="flex gap-4 min-w-max">
<select className="bg-transparent border-0 border-b border-savannah-cream/50 text-savannah-cream font-utility-label text-utility-label focus:ring-0 focus:border-savannah-cream px-0 py-2 uppercase">
<option className="text-ink-editorial" value="">AUTHOR</option>
<option className="text-ink-editorial" value="david">David</option>
<option className="text-ink-editorial" value="sarah">Sarah</option>
</select>
<select className="bg-transparent border-0 border-b border-savannah-cream/50 text-savannah-cream font-utility-label text-utility-label focus:ring-0 focus:border-savannah-cream px-0 py-2 uppercase">
<option className="text-ink-editorial" value="">CATEGORY</option>
<option className="text-ink-editorial" value="wildlife">Wildlife</option>
<option className="text-ink-editorial" value="culture">Culture</option>
</select>
</div>
</div>
</div>
</header>

<section className="w-full bg-savannah-cream py-section-gap px-margin-edge">
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-dust-gray">
<div className="h-[50vh] md:h-auto border-b md:border-b-0 md:border-r border-dust-gray" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlX37usEk1LNEYAWnmEfNpmimeLV86iFtb64nOnmjfseNIdfFr-NcvXXB9nnSYQWz7eAdeIhBBanuwH2ladsrfrU_W6HXZmucStST4jfxlMJH6lHOsJJoRXzhWDIi6pl9TM-c7f2noTcxXR6bAu_52a74TJZ5dnvFSUjp2qZl-jNm4HVV-KlHvh_KF1hk5ksIvMUrwJaoOezJlyc0wrCX1Xz5XKVQerAYGCgXX_Hav-HMgljOTrq7MKjc5L00q2gAn4OEGd3F8pA')` }}></div>
<div className="p-gutter md:p-stack-lg flex flex-col justify-center bg-savannah-cream">
<span className="font-utility-label text-utility-label text-sunset-ember mb-stack-sm">THIS WEEK AT AURA #42</span>
<h2 className="font-headline-lg text-headline-lg text-ink-editorial leading-tight mb-stack-sm">The Migration Has Arrived</h2>
<div className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md">July 12, 2024  |  6 Min Read  |  By David, Head Ranger</div>
<p className="font-body-lg text-body-lg text-ink-editorial mb-stack-md leading-relaxed">
                    A rumble that started as a distant thunder on the horizon has materialized into a living, breathing river of life. Over a million hooves now pound the earth of the Maasai Mara, bringing with them a primal energy that transforms the landscape. The dust kicks up in the golden morning light, painting a scene of chaotic beauty that marks the beginning of nature&apos;s greatest spectacle.
                </p>
<a className="inline-flex items-center gap-2 font-utility-label text-utility-label text-ink-editorial hover:text-sunset-ember transition-colors duration-300 border-b border-ink-editorial pb-1 w-max" href="#">
                    READ THE FULL STORY <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</section>



    </>
  )
}

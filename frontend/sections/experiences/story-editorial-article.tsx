import Image from "next/image";

interface StoryEditorialArticleProps {
  slug: string;
}

export function StoryEditorialArticle({}: StoryEditorialArticleProps) {
  return (
    <div className="flex-grow pt-section-gap pb-section-gap">
      {/* Hero Title Block (Article Header) */}
      <header className="max-w-[680px] mx-auto px-margin-edge md:px-0 mb-stack-lg text-center">
        <p className="font-utility-label text-utility-label text-sunset-ember uppercase tracking-widest mb-4">
          Serengeti Journal
        </p>
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-ink-editorial mb-6">
          The Awakening of the Savannah
        </h1>
        <p className="font-body-lg text-body-lg text-ink-editorial/80">
          A journey into the heart of the wild, where dawn dictates the rhythm of life.
        </p>
      </header>

      {/* Article Body */}
      <article className="w-full">
        {/* Text Block */}
        <div className="max-w-[680px] mx-auto px-margin-edge md:px-0 mb-stack-md">
          <p className="font-body-md text-body-md text-ink-editorial leading-[1.8] mb-6">
            The air before sunrise in the Serengeti possesses a distinct texture. It is cool, almost crisp, carrying the scent of damp earth and the faint, dusty musk of wild sage. This is the hour of anticipation. Before the sun crests the horizon to paint the plains in hues of violent orange and soft lavender, the landscape belongs to the shadows.
          </p>
          <p className="font-body-md text-body-md text-ink-editorial leading-[1.8] mb-6">
            We departed camp in silence, our open-sided Land Cruiser cutting through the tall, dew-soaked grass. The only sound was the low hum of the engine and the rhythmic crunch of tires against the uneven terrain. In these moments, the silence is not empty; it is deeply pregnant with possibility. Every shape in the dim light is a potential encounter, every rustle a narrative unfolding in the unseen brush.
          </p>
        </div>

        {/* Edge-to-Edge Image */}
        <figure className="w-full mb-stack-md">
          <div className="w-full h-[614px] md:h-[819px] relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXCR-NiELzoH3hS38H0X_CKrx-muUxCs9aCag-i-S7Rhith2qy77eBNXVsWtiU7PtlY_02If9oK5S7lUvVGDYteuFJ9h6bmFZzG5H9B3xo099sKEne6IO0FlO95fYlQRymJDdbFJZ3yQuCiuIFqT41aGtAF6gkApA4EjAughGrdVHTmJcnM6HozOXCkS9eNE-fhKcf9Wog9Vp6rbDIHVoYHfBCmSZBRz4P7gxfGf4O9r9P0lncuiB2ECPRdpkokJhf-iu0vBVyuA"
              alt="A breathtaking cinematic landscape photograph of the Serengeti plains at dawn."
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="max-w-[680px] mx-auto px-margin-edge md:px-0 mt-4 text-center font-utility-label text-utility-label text-ink-editorial/60 uppercase tracking-widest">
            Dawn breaking over the northern plains, revealing the silhouettes of ancient acacia trees.
          </figcaption>
        </figure>

        {/* Text Block with Pull Quote */}
        <div className="max-w-[680px] mx-auto px-margin-edge md:px-0 mb-stack-md">
          <p className="font-body-md text-body-md text-ink-editorial leading-[1.8] mb-stack-sm">
            Our guide, David, a man whose eyes seemed calibrated to a different frequency of light, raised a hand, signaling for the vehicle to stop. He pointed toward a dense thicket of croton bushes. At first glance, there was nothing but shadows overlapping shadows. But as my eyes adjusted, a shape materialized—fluid, silent, and immensely powerful.
          </p>
          
          {/* Pull Quote */}
          <blockquote className="my-stack-md pl-6 border-l-4 border-sunset-ember italic">
            <p className="font-quote-italic text-quote-italic text-ink-editorial mb-2">
              &quot;Every morning, the bush gives you a test. Will you pay attention?&quot;
            </p>
            <footer className="font-utility-label text-utility-label text-ink-editorial/70 uppercase tracking-widest mt-4">
              — David Ochieng
            </footer>
          </blockquote>
          
          <p className="font-body-md text-body-md text-ink-editorial leading-[1.8]">
            It was a leopard. She was draped over a low branch, observing our arrival with a chilling indifference. The rosette patterns of her coat offered perfect camouflage, a masterful design honed by millennia of evolution. We sat motionless, holding our breath, reluctant to disturb the fragile peace of the encounter. In luxury travel, true exclusivity is not found in golden fixtures, but in these fleeting, private audiences with the wild.
          </p>
        </div>

        {/* Inline Cinematic Video Placeholder */}
        <div className="max-w-[680px] mx-auto px-margin-edge md:px-0 mb-stack-md">
          <div className="relative w-full aspect-video bg-ink-editorial cursor-pointer group overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWiJD-NTgfwkh_MxJdAu_ZLwtHD9EUd9CWqN2VT1YWcrqlrYoNH-vyghx8-UeJrqAoMjyIXpX5I23wUEd9uw_edjVAH9EeLHaQYZvKwYuHFT8vWO1-YPbOf3FATavk-ogb5RSDbxD59A-z_fmf7qFbsKPKbQ0X6KSzs2nqtj8CMhFRhEKhoUqKCg0EnrtYfxYq4e0vbQhCCXx23rOf5dmvhJWoIZcstQf1tbECO1HEYZNXtwDAugjIg-duNEJhkL7rvXrVuuLzYA"
              alt="A cinematic, high-contrast still frame from a wildlife documentary showing a close-up of a leopard resting on an acacia branch."
              fill
              className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-savannah-cream/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-savannah-cream text-3xl ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-center font-utility-label text-utility-label text-ink-editorial/60 uppercase tracking-widest">
            Footage captured of the resident female leopard in the Grumeti Reserve.
          </figcaption>
        </div>

        {/* Final Text Block */}
        <div className="max-w-[680px] mx-auto px-margin-edge md:px-0">
          <p className="font-body-md text-body-md text-ink-editorial leading-[1.8] mb-6">
            As the sun finally broke free of the horizon, flooding the plains with a golden, liquid light, the leopard descended gracefully into the tall grass, disappearing as suddenly as she had appeared. The spell was broken, but the lingering sense of privilege remained. To witness such raw, unrefined beauty is a humbling experience, a reminder of the delicate balance that governs these ancient lands.
          </p>
          <p className="font-body-md text-body-md text-ink-editorial leading-[1.8]">
            Returning to the lodge, the aroma of freshly brewed coffee and baked bread offered a comforting return to civilization. Yet, the wilderness leaves an indelible mark. It strips away the superficial, demanding a profound presence in the moment. It is in these quiet, majestic spaces that we truly find ourselves.
          </p>
        </div>
      </article>
    </div>
  );
}

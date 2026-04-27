import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Why Us */}
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">
            More Than <br />A Cafe.
          </h2>
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                  celebration
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold uppercase tracking-tight mb-2">
                    The Ultimate Hangout
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Whether it&apos;s a date night or chilling with your crew,
                    our vibe sets the perfect mood.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                  payments
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold uppercase tracking-tight mb-2">
                    Premium yet Accessible
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Experience luxury without the heavy price tag. Approx ₹600
                    for two.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
          <Image
            src="/images/gallery-5.png"
            alt="Sip and Paint Workshop at Froth and Friends"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-surface/60 group-hover:bg-surface/40 transition-colors duration-500" />
          <div className="relative h-full min-h-[400px] flex flex-col justify-end p-8">
            <span className="bg-primary text-surface font-bold text-xs uppercase px-3 py-1 rounded-sm w-max mb-4">
              Upcoming Event
            </span>
            <h3 className="font-headline text-4xl font-black uppercase tracking-tighter mb-2">
              Sip &amp; Paint Workshops
            </h3>
            <p className="text-on-surface-variant mb-6 max-w-sm">
              Unleash your creativity. Join our weekend painting workshops.
              Coffee, canvas, and good vibes included.
            </p>
            <button className="w-max border-b-2 border-primary text-primary font-headline uppercase tracking-tight pb-1 hover:drop-shadow-[0_0_8px_rgba(254,215,76,0.6)] transition-all">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

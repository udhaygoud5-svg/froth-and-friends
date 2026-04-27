import Image from "next/image";

export default function Ambiance() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-y border-primary/20 relative overflow-hidden">
      {/* Gold accent glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-on-surface">
            Explore The <span className="text-primary">Ambiance</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto font-light tracking-wide">
            Immerse yourself in our cozy, Instagram-worthy spaces designed for
            unforgettable moments.
          </p>
        </div>

        {/* Main Ambiance Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(254,215,76,0.15)] ring-1 ring-primary/30">
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            <Image
              src="/images/gallery-4.png"
              alt="Café interior ambiance — cozy warm-lit dining area"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="border border-primary/50 text-primary font-headline uppercase tracking-tight px-8 py-4 rounded-xl text-lg hover:bg-primary hover:text-background transition-all active:scale-95 duration-300"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}

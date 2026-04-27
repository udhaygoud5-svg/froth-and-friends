import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Column */}
        <div className="lg:col-span-5 flex flex-col items-start">
          {/* Rating Badge */}
          <div className="flex items-center space-x-2 mb-6 bg-surface-container-low px-4 py-2 rounded-full border border-white/5">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-headline font-bold text-lg">4.8</span>
            <span className="text-on-surface-variant text-sm">Rating</span>
          </div>

          <h2 className="font-headline text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
            The Vibe <br />
            <span className="text-outline">Is Real.</span>
          </h2>

          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
            Step into a sanctuary of dark aesthetics and neon warmth. We serve
            more than just coffee; we serve an experience. With highly
            Instagrammable interiors and a menu designed to delight, this is
            where Vijayawada comes to hang out, date, and unwind.
          </p>

          <button className="text-primary font-headline uppercase tracking-tight font-bold hover:drop-shadow-[0_0_8px_rgba(254,215,76,0.6)] transition-all border-b border-primary pb-1">
            Read Our Story
          </button>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/about-cafe.png"
              alt="Moody high-end café interior with dark walls and warm pendant lighting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          {/* Floating Glass Badge */}
          <div className="absolute -bottom-8 -left-8 bg-surface-variant/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 hidden md:block">
            <p className="font-headline font-bold text-xl uppercase tracking-tighter">
              Est. 2024
            </p>
            <p className="text-primary text-sm">Vijayawada, AP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

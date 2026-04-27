export default function CravingNow() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-surface relative overflow-hidden"
    >
      {/* Abstract gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
          Craving <span className="text-primary">Now?</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Swiggy */}
          <button className="bg-surface-container-high border border-outline-variant/30 text-on-surface font-headline uppercase tracking-tight px-8 py-5 rounded-xl text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center space-x-3 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              delivery_dining
            </span>
            <span>Order on Swiggy</span>
          </button>

          {/* Zomato */}
          <button className="bg-surface-container-high border border-outline-variant/30 text-on-surface font-headline uppercase tracking-tight px-8 py-5 rounded-xl text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center space-x-3 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              restaurant
            </span>
            <span>Order on Zomato</span>
          </button>

          {/* Book a Table */}
          <button className="bg-primary text-on-primary font-headline uppercase tracking-tight px-8 py-5 rounded-xl text-lg hover:shadow-[0px_0px_24px_rgba(254,215,76,0.6)] transition-all flex items-center justify-center space-x-3 animate-glow-pulse">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              event_seat
            </span>
            <span>Book a Table</span>
          </button>
        </div>
      </div>
    </section>
  );
}

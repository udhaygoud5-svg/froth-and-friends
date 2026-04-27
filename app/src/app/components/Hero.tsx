import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Froth and Friends café interior"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 animate-float drop-shadow-[0_0_30px_rgba(200,216,0,0.45)]">
          <div className="relative w-72 h-32 md:w-96 md:h-40 rounded-2xl overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Froth and Friends logo"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
        </div>

        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-on-surface leading-[0.9] mb-6 drop-shadow-2xl animate-fade-in-up">
          Sip. <span className="text-primary block md:inline">Chill.</span>{" "}
          Repeat.
        </h1>

        <p className="font-body text-xl md:text-2xl text-on-surface max-w-2xl mx-auto mb-10 font-medium tracking-wide drop-shadow-md animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
          Vijayawada&apos;s most aesthetic café experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto animate-fade-in-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <a
            href="#menu"
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline uppercase tracking-tight px-8 py-4 rounded-xl text-lg hover:shadow-[0px_0px_24px_rgba(254,215,76,0.6)] transition-all active:scale-95"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="border border-outline-variant/30 bg-surface-container-highest/50 backdrop-blur-md text-on-surface font-headline uppercase tracking-tight px-8 py-4 rounded-xl text-lg hover:border-primary/50 hover:text-primary transition-all active:scale-95"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-on-surface-variant animate-fade-in-up delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <span className="text-xs font-label uppercase tracking-widest mb-2">
          Scroll
        </span>
        <span className="material-symbols-outlined text-primary animate-bounce">
          expand_more
        </span>
      </div>
    </header>
  );
}

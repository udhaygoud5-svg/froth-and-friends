export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="text-xl font-black text-primary uppercase font-headline tracking-tighter mb-4">
            Froth and Friends
          </div>
          <p className="font-body text-sm tracking-wide text-zinc-500 mb-6">
            © 2024 Froth and Friends Café. The Urban Pulse.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-zinc-500 hover:text-primary transition-colors opacity-80 hover:opacity-100"
              aria-label="Map"
            >
              <span className="material-symbols-outlined">map</span>
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-primary transition-colors opacity-80 hover:opacity-100"
              aria-label="Call us"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-headline text-on-surface uppercase tracking-tight text-sm font-bold mb-2">
            Explore
          </h4>
          {["Privacy Policy", "Terms of Service", "Location", "Careers"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm tracking-wide text-zinc-500 hover:text-primary transition-colors opacity-80 hover:opacity-100"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-headline text-on-surface uppercase tracking-tight text-sm font-bold mb-2">
            Visit Us
          </h4>
          <p className="font-body text-sm tracking-wide text-zinc-500">
            Vijayawada, Andhra Pradesh
          </p>
          <p className="font-body text-sm tracking-wide text-zinc-500">
            Open Daily: 11 AM - 11 PM
          </p>
        </div>
      </div>
    </footer>
  );
}

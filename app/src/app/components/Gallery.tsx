import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Aesthetic overhead shot of coffee and pastry" },
  { src: "/images/gallery-2.png", alt: "Neon sign glowing in dark café interior" },
  { src: "/images/gallery-3.png", alt: "Gourmet pasta dish with dark background" },
  { src: "/images/gallery-6.png", alt: "Friends laughing at café table" },
  { src: "/images/signature-hotchoc.png", alt: "Signature hot chocolate" },
  { src: "/images/signature-nachos.png", alt: "Loaded nachos" },
  { src: "/images/signature-sandwich.png", alt: "Gourmet sandwich" },
  { src: "/images/menu-dessert.png", alt: "Artisan dessert" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-1 md:px-6 bg-surface-dim overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          Follow The Pulse
        </h2>
        <p className="text-on-surface-variant">@froth_and_friends</p>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-screen-2xl mx-auto">
        {galleryImages.map((img) => (
          <div
            key={img.src}
            className="aspect-square relative group overflow-hidden bg-surface-container"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Neon border glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary group-hover:shadow-[inset_0_0_20px_rgba(254,215,76,0.4)] transition-all duration-300 z-10 pointer-events-none" />
            {/* Instagram icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
              <span className="material-symbols-outlined text-primary text-4xl drop-shadow-[0_0_10px_rgba(254,215,76,0.6)]">
                favorite
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

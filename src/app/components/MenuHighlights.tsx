import Image from "next/image";

const menuItems = [
  {
    image: "/images/menu-pasta.png",
    title: "Woodfired Pizza & Pasta",
    description: "Authentic recipes, bold flavors. Perfect for sharing.",
    tag: null,
    featured: true,
    span: "md:col-span-2",
    aspect: "aspect-square md:aspect-[2/1]",
  },
  {
    image: "/images/signature-paneer.png",
    title: "Crispy Paneer Poppers",
    description: null,
    tag: "Must Try",
    featured: false,
    span: "",
    aspect: "aspect-square",
  },
  {
    image: "/images/menu-coffee.png",
    title: "Artisan Coffee",
    description: null,
    tag: null,
    featured: false,
    span: "",
    aspect: "aspect-square",
  },
  {
    image: "/images/menu-burger.png",
    title: "Gourmet Burgers",
    description: "Juicy, messy, and absolutely unforgettable.",
    tag: "Signature",
    featured: true,
    span: "md:col-span-2",
    aspect: "aspect-square md:aspect-[2/1]",
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Menu
            <br />
            <span className="text-primary">Highlights</span>
          </h2>
          <button className="hidden md:flex items-center space-x-2 text-primary font-headline uppercase tracking-tight text-sm hover:drop-shadow-[0_0_8px_rgba(254,215,76,0.6)] transition-all">
            <span>View Full Menu</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={`${item.span} ${item.aspect} relative rounded-xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  item.featured
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

              {/* Content */}
              {item.featured ? (
                <div className="absolute bottom-6 left-6 right-6 bg-surface-bright/60 backdrop-blur-md p-6 rounded-lg border border-white/10">
                  {item.tag && (
                    <span className="text-tertiary text-xs font-bold uppercase tracking-wider mb-2 block">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-on-surface-variant text-sm line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              ) : (
                <div className="absolute bottom-6 left-6">
                  {item.tag && (
                    <span className="text-tertiary text-xs font-bold uppercase tracking-wider mb-2 block">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-headline text-xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <button className="mt-8 md:hidden w-full text-center text-primary font-headline uppercase tracking-tight text-sm border border-primary py-4 rounded-xl">
          View Full Menu
        </button>
      </div>
    </section>
  );
}

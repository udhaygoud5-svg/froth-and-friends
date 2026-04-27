"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero", active: true },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`sticky top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl shadow-[0px_0px_20px_rgba(254,215,76,0.12)]"
          : "bg-transparent"
      }`}
    >
      {/* Brand */}
      <a
        href="#hero"
        className="flex items-center gap-2 hover:drop-shadow-[0_0_12px_rgba(254,215,76,0.5)] transition-all"
      >
        <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Froth and Friends"
            fill
            className="object-contain"
            sizes="40px"
          />
        </div>
        <span className="text-xl font-black text-primary tracking-tighter font-headline uppercase leading-none">
          Froth &amp; Friends
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 items-center font-headline uppercase tracking-tighter text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`transition-all duration-200 active:scale-95 ${
              link.active
                ? "text-primary border-b-2 border-primary pb-1 hover:drop-shadow-[0_0_8px_rgba(254,215,76,0.6)]"
                : "text-zinc-400 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(254,215,76,0.6)]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button
        id="order-now-btn"
        className="hidden md:block bg-primary text-on-primary font-headline uppercase tracking-tight px-6 py-2.5 rounded-xl text-sm hover:shadow-[0px_0px_15px_rgba(254,215,76,0.5)] transition-all active:scale-95 duration-200"
      >
        Order Now
      </button>

      {/* Mobile Hamburger */}
      <button
        id="mobile-menu-toggle"
        className="md:hidden text-primary"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant/20 flex flex-col items-center py-8 gap-6 md:hidden animate-fade-in-up">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-headline uppercase tracking-tight text-lg text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-on-primary font-headline uppercase tracking-tight px-8 py-3 rounded-xl text-sm hover:shadow-[0px_0px_15px_rgba(254,215,76,0.5)] transition-all">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}

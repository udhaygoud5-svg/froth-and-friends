import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Froth and Friends | Vijayawada's Most Aesthetic Café",
  description:
    "Step into the Urban Pulse. Froth and Friends is Vijayawada's premier café – serving artisan coffee, gourmet burgers, woodfired pizzas, and unforgettable vibes. Book a table or order online.",
  keywords: [
    "Froth and Friends",
    "Vijayawada café",
    "aesthetic café",
    "coffee shop Vijayawada",
    "gourmet burgers",
    "woodfired pizza",
    "best café Vijayawada",
  ],
  openGraph: {
    title: "Froth and Friends | Vijayawada's Most Aesthetic Café",
    description:
      "Sip. Chill. Repeat. Vijayawada's most Instagrammable café experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${epilogue.variable} ${inter.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

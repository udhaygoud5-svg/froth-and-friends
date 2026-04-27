import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuHighlights from "./components/MenuHighlights";
import WhyChooseUs from "./components/WhyChooseUs";
import Ambiance from "./components/Ambiance";
import Gallery from "./components/Gallery";
import CravingNow from "./components/CravingNow";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <WhyChooseUs />
        <Ambiance />
        <Gallery />
        <CravingNow />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

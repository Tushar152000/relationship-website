import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Timeline /> */}
      <LoveLetter />
      <Gallery />
      <Footer />
    </main>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Approach from "./components/Approach";
import WhyAlserd from "./components/WhyAlserd";
import Transparency from "./components/Transparency";
import CtaBand from "./components/CtaBand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Approach />
        <WhyAlserd />
        <Transparency />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

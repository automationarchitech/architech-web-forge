
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        setNavHeight(nav.clientHeight);
      }
    };

    // Set initial height
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div style={{ paddingTop: `${navHeight}px` }}>
        <Hero />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

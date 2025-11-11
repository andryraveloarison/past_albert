import { useEffect } from "react";
import "@/styles/HomePage/Hero.css";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const textContainer = document.querySelector(".hero-content") as HTMLElement | null;

      // Parallaxe : le texte monte légèrement quand on scrolle
      if (textContainer) {
        textContainer.style.transform = `translateY(${scrollY * -0.5}px)`;
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-title-block">
          <h1>Pastora</h1>
          <h1>Raveloarison</h1>
        </div>
      </div>
    </header>
  );
}

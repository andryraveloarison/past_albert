import { useEffect } from "react";
import "@/styles/HomePage/ResumeBio.css";

export default function ResumeBio() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const textContainer = document.querySelector(".resume-bio-content") as HTMLElement | null;
      const background = document.querySelector(".resume-bio") as HTMLElement | null;

      // Parallaxe : le texte monte légèrement quand on scrolle
      if (textContainer) {
        textContainer.style.transform = `translateY(${scrollY * -0.5}px)`;
      }

      // L’image de fond bouge lentement (effet profondeur)
      if (background) {
        background.style.backgroundPositionY = `${scrollY * 0.25}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="resume-bio">
      <div className="overlay"></div>

      <div className="resume-bio-content">
        <div className="resume-bio-title-block">
          <h1>Pastora</h1>
          <h1>Raveloarison</h1>
        </div>
      </div>
    </header>
  );
}

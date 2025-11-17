
import "@/styles/BioPage/Bio.css";
import { useEffect } from "react";
import { BIO } from "@/data/bio";

export default function Header() {

    useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".bio-hero");
      const resume = document.querySelector(".bio-resume");

      if (!hero || !resume) return;

      if (window.innerWidth <= 790) {
        if (window.scrollY > window.innerHeight) {
          hero.classList.add("white-bg");
          resume.classList.add("resume-hidden")
        } else {
          hero.classList.remove("white-bg");
          resume.classList.remove("resume-hidden")

        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
      <header className="bio-header">
        <div className="bio-header-top">
          <div className="bio-logo"></div>
          <p className="bio-suffixe">Pastora & Ramatoa</p>
        </div>

        <div className="bio-header-content">
          <p className="bio-title">Raveloarison</p>
          <div className="bio-hero" />
          <p className="bio-resume">{BIO.famille} </p>
        </div>
      </header>
  );
}

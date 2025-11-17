import { useMenuAnimation } from "@/animations/navBarAnimation";
import logo from "@/assets/logo2.png";
import { useEffect, useState } from "react";
import "@/styles/Layout/NavMenu.css";

type NavMenuProps = {
  color?: "dark" | "light";
};

export default function NavMenu({ color }: NavMenuProps) {
  const { openMenu, closeMenu, isAnimating } = useMenuAnimation();
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 790);

  const handleToggle = () => {
    if (isAnimating.current) return;
    if (menuState) closeMenu();
    else openMenu();
    setMenuState(!menuState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 790);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <>
      <nav
        className={`nav ${
          color === "dark" && !menuState ? "nav-dark" : "nav-light"
        }`}
      >
        <div className="nav-left">
          <p>{menuState ? "Past RAVELOARISON" : "Logo"}</p>
        </div>

        {/* ✅ Transition par opacité */}
        <div className="nav-content">
          <div
            className={`nav-links fade ${
              isMobile || scrolled ? "fade-out" : "fade-in"
            }`}
          >
            <div className="nav-link">
              <a href="/" className={`link-${color}`}>Accueil</a>
            </div>
            <div className="nav-link">
              <a href="/bio" className={`link-${color}`}>Biographie</a>
            </div>
            <div className="nav-link">
              <a href="/toriteny" className={`link-${color}`}>Toriteny</a>
            </div>
            <div className="nav-link">
              <a href="/fampianarana" className={`link-${color}`}>Fampianarana</a>
            </div>
          </div>

          <div
            className={`nav-toggle fade ${
              isMobile || scrolled ? "fade-in" : "fade-out"
            }`}
            onClick={handleToggle}
          >
            <p>{menuState ? "Fermer" : "Menu"}</p>
          </div>
        </div>
      </nav>

      {/* ✅ Menu plein écran */}
      <div className="menu-overlay">
        <div className="menu-items">
          <img src={logo} alt="logo" className="menu-img" />
          <div className="col-sm">
            <div className="menu-links">
              <div className="menu-link"><a href="/">Accueil</a></div>
              <div className="menu-link"><a href="/bio">Biographie</a></div>
              <div className="menu-link"><a href="/toriteny">Toriteny</a></div>
              <div className="menu-link"><a href="/fampianarana">Fampianarana</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

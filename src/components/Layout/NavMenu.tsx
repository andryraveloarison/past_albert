// src/components/NavMenu.tsx
import { useMenuAnimation } from "@/animations/navBarAnimation";
import logo from "@/assets/logo2.png";
import { useState } from "react";
import "@/styles/Layout/NavMenu.css";

type NavMenuProps = {
  color?: "dark" | "light";
};

export default function NavMenu({ color = "light" }: NavMenuProps) {
  
  const { openMenu, closeMenu, isAnimating } = useMenuAnimation();
  const [menuState, setMenuState] = useState(false);

  const handleToggle = () => {
    if (isAnimating.current) return;
    if (menuState) closeMenu();
    else openMenu();
    setMenuState(!menuState);
  };

  return (
    <>
      <nav className={`nav ${(color === "dark" && !menuState) ? "nav-dark" : "nav-light"}`}>
        <div className="nav-toogle">
          <p>{menuState ? "Past RAVELOARISON" : "Logo"}</p>
        </div>

        <div className="nav-toogle" onClick={handleToggle}>
          <p>{menuState ? "Fermer" : "Menu"}</p>
        </div>
      </nav>

      <div className="menu-overlay">
        <div className="menu-content">
          <div className="menu-col">
            <p>Codegride</p>
            <p>Codegride</p>
            <p>Codegride</p>
            <br />
            <p>Codegride</p>
            <p>Codegride</p>
            <br />
            <p>Codegride</p>
            <p>Codegride</p>
            <br />
            <p>Codegride</p>
            <p>Codegride</p>
          </div>
        </div>

        <div className="menu-img">
          <img src={logo} alt="logo" className="menu-logo" />
        </div>

        <div className="menu-links-wrapper">
          <div className="menu-link">
            <a>
              <span>Follow us on</span>
              <span>Twitter</span>
            </a>
          </div>

          <div className="menu-link">
            <a>
              <span>Follow us on</span>
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="menu-link">
            <a>
              <span>Follow us on</span>
              <span>Instagram</span>
            </a>
          </div>

          <div className="menu-link">
            <a>
              <span>Follow us on</span>
              <span>GitHub</span>
            </a>
          </div>

          <div className="link-highLighter"></div>
        </div>
      </div>
    </>
  );
}

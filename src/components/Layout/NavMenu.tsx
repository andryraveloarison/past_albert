// src/components/NavMenu.tsx
import { useMenuAnimation } from "@/animations/navBarAnimation";
import logo from "@/assets/logo2.png";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    closeMenu();
  }, []);

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
          <div className="menu-items">
            <img src={logo} alt="logo" className="menu-img" />
            <div className="col-sm">
              <div className="menu-links">
                <div className="menu-link">
                  <a href="/">Accueil</a>
                </div>
                <div className="menu-link">
                  <a href="/bio">Biographie</a>
                </div>
                <div className="menu-link">
                  <a href="/toriteny">Toriteny</a>
                </div>
                <div className="menu-link">
                  <a href="/fampianarana" >Fampianarana</a>
                </div>
              </div>
            </div>
            </div>
          </div>
    </>
  );
}

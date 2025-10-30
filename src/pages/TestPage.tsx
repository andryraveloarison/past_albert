import { useMenuAnimation } from '@/animations/navBarAnimation';
import logo from '../assets/logo2.png';
import '../styles/HomePage.css';
import { useEffect, useState } from 'react';


function Hero() {

  const { openMenu, closeMenu, isMenuOpen, isAnimating } = useMenuAnimation();
  const [menuState, setMenuState] = useState(false);

  useEffect(()=> {
    console.log(menuState);
    
  },[])
  const handleToggle = () => {

    if (isAnimating.current) return;
    if (menuState) closeMenu();
    else openMenu();
    setMenuState(!menuState);
  };

  return (

    <>
      <nav>
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
        <img src={logo} alt="" />
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
            <span>LinkedIn</span> 
          </a>
        </div>

        <div className="menu-link">
          <a>
            <span>Follow us on</span>
            <span>LinkedIn</span> 
          </a>
        </div>

        <div className="link-highLighter"></div>

      </div>
    </div>

    <div className="container">
      <section className='hero'>
        <h1> Publication </h1>
      </section>
    </div>
    </>

  );
}


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
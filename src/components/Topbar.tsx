import { BookOpenText, CalendarDays, Church, Home, LibraryBig, Mic2, Quote } from "lucide-react";
import { NavItem } from "./NavItem";
import logo from "../assets/logo2.png";

export function Topbar() {
  return (
    <header className="top-0 z-40 px-6  w-full fixed absolute">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-8">

        <nav className="hidden items-center gap-1 md:flex ">
          <NavItem to="/" >Accueil</NavItem>
          <NavItem to="/biographie" >Biographie</NavItem>
          <NavItem to="/predications" >Prédications</NavItem>
          <NavItem to="/livres" >Livres</NavItem>
          <NavItem to="/resumes">Résumés</NavItem>
          <NavItem to="/verset-semaine">Verset</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl from-rose-600 to-amber-500 shadow">
            <img src={logo}/>
          </span>
        </div>
      </div>
    </header>
  );
}


{
  /*
          <nav className="hidden items-center gap-1 md:flex ">
          <NavItem to="/" icon={<Home className="h-4 w-4 text-white" />}>Accueil</NavItem>
          <NavItem to="/biographie" icon={<BookOpenText className="h-4 w-4" />}>Biographie</NavItem>
          <NavItem to="/predications" icon={<Mic2 className="h-4 w-4" />}>Prédications</NavItem>
          <NavItem to="/livres" icon={<LibraryBig className="h-4 w-4" />}>Livres</NavItem>
          <NavItem to="/resumes" icon={<CalendarDays className="h-4 w-4" />}>Résumés</NavItem>
          <NavItem to="/verset-semaine" icon={<Quote className="h-4 w-4" />}>Verset</NavItem>
        </nav>
  */
}
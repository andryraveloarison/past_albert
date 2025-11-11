import Header from "@/components/BioPage/Header";
import NavMenu from "@/components/Layout/NavMenu";
import "@/styles/BioPage/Bio.css";
import Career from "@/components/BioPage/Career";
import StickyCards from "@/components/Layout/StickyCards";
import { ReactLenis } from "lenis/react";


export function BioPage() {


  return (
    <>
      <ReactLenis root/>
      <NavMenu color="dark" />
      <Header />
      <div className="bio-content">
        <Career />
        <StickyCards />
      </div>



      </>
  );
}

import Header from "@/components/BioPage/Header";
import NavMenu from "@/components/Layout/NavMenu";
import "@/styles/BioPage/Bio.css";
import Career from "@/components/BioPage/Career";
import StickyCards from "@/components/BioPage/StickyCards";
import { ReactLenis } from "lenis/react";
import Family from "@/components/BioPage/Family";
import { Footer } from "@/components/Layout/Footer";


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
      <Family />
      <Footer />

      </>
  );
}

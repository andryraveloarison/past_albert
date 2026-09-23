import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zo from "@/assets/zo.jpeg";
import andry from "@/assets/andry2.jpeg"
import sitraka from "@/assets/sitraka.jpeg"

import "@/styles/BioPage/Family.css";

export default function Family() {

  const imageLists = [
    { index: "01", photo: sitraka, name: "Sitraka"}, 
    { index: "03", photo: andry, name: "Andry"},
    { index: "02", photo: zo, name: "Henitsoa"} ]

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".family-card");

    // Timeline animée par le scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".family-sticky",
        start: "top top",
        end: () => "+=" + window.innerHeight * 1.5, // distance de scroll pour l'animation
        pin: true,      // pinne la section pendant le scroll
        scrub: 1,       // synchronise la timeline avec le scroll (smooth)
        invalidateOnRefresh: true,
      }
    });

    // Petite pause sur les photos, puis flip des cartes
    tl.to({}, { duration: 0.3 })
      .to(cards, {
        rotateY: 180,
        ease: "power3.inOut",
        stagger: 0.2
      })
      .to({}, { duration: 0.3 });
  });

  return () => ctx.revert();
}, []);

  return (
    <div className="family">

      <div className="family-sticky">

        <section className="family-intro">
          <h1>ZANANY</h1>
        </section>

        <div className="family-card-container">
          {[1, 2, 3].map((n) => (
            <div className="family-card" key={n} id={"family-card-" + n}>
              <div className="family-card-front">
                <img src={imageLists[n-1].photo} alt={imageLists[n-1].name} className="family-card-img" />
              </div>
              <div className="family-card-back">
                <span>{imageLists[n-1].index}</span>
                <p>{imageLists[n-1].name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

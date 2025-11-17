import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from "@/assets/profile.png";
import "@/styles/BioPage/Family.css";

export default function Family() {

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const zafi = document.querySelector(".zafi");
    gsap.set(zafi, { opacity: 0, y: 80 });

    const cards = gsap.utils.toArray(".family-card");

    // Timeline animée par le scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".family-sticky",
        start: "center center",
        end: "+=100vh",   // distance de scroll pour l'animation
        pin: true,      // pinne la section pendant le scroll
        scrub: 1,       // synchronise la timeline avec le scroll (smooth)
      }
    });

    // Flip des cartes et apparition de Zafi
    tl.to(cards, {
      rotateY: 180,
      ease: "power3.inOut",
      stagger: 0.2
    }).to(zafi, {
      opacity: 1,
      y: 0,
      ease: "power3.out"
    });
  });

  return () => ctx.revert();
}, []);






  return (
    <div className="family">

      <section className="family-intro">
        <h1>ZANANY</h1>
      </section>

      <div className="family-sticky">

        <div className="family-card-container">
          {[1, 2, 3].map((n) => (
            <div className="family-card" key={n} id={"family-card-" + n}>
              <div className="family-card-front">
                <img src={photo} alt="photo" className="resume-bio-img" />
              </div>
              <div className="family-card-back">
                <span>{`0${n}`}</span>
                <p>{n === 1 ? "Premier" : n === 2 ? "Faharoa" : "Fahatelo"}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

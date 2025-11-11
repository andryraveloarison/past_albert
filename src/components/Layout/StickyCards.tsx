
import { BIO } from "@/data/bio";
import "@/styles/Layout/StickyCard.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {

  const container = useRef(null);

  useGSAP(() => {
    const stickyCards = document.querySelectorAll(".sticky-card");


    stickyCards.forEach((card, i) => {
      if ( i < stickyCards.length - 1 ) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        })
      }


            if ( i < stickyCards.length - 1 ) {
              ScrollTrigger.create({
                trigger: stickyCards[i+1],
                start: "top bottom",
                end: "top top",
                onUpdate: (self) => {
                  const progress = self.progress;
                  const scale = 1 - progress * 0.25;
                  const rotation = ( i % 2 === 0 ? 5 : -5) * progress ;
                  const afterOpacity = progress;
      
                  gsap.set(card, {
                    scale: scale,
                    rotation: rotation,
                    "--after-opacity": afterOpacity
                  })
                }
              })
            
            }
    })    
  },
  { scope: container }
)

  return (
    <div className="sticky-cards" ref={container}>
      {BIO.historiqueEglises.map((h,i) => {

        return (
            <div className="sticky-card" key={i}>
              <div className="sticky-card-index">
                <h2>{h.annee}</h2>
              </div>  
              <div className="sticky-card-content">
                <div className="sticky-card-content-wrapper">
                  <h2 className="sticky-card-header">
                    {h.eglise}
                  </h2>

                  <div className="sticky-card-img">
                    <img src={h.photo} alt={h.eglise} />
                  </div>

                  <div className="sticky-card-copy">
                    <div className="sticky-card-copy-title">
                      <p>{h.role}</p>
                    </div>
                    <div className="sticky-card-copy-description">
                      <p>{h.description}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        );
      })}
          
    </div>
  );
}

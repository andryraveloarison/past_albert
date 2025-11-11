import { LIVRES } from "@/data/livre";
import "@/styles/HomePage/ResumeWorks.css";
import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initSermonAnimation } from "@/animations/resumeSermonAnimation";
import { initBookAnimation } from "@/animations/resumeBookAnimation";

export default function ResumeWorks() {
  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const containerRef = useRef(null);
  const hasInitialized = useRef(false);

  useEffect(() => {

    if (!hasInitialized.current) {
          initBookAnimation();
          initSermonAnimation();
          hasInitialized.current = true;
    }; 
    
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const animateLine = (ref: RefObject<null>) => {
        gsap.fromTo(
          ref.current,
          { width: "0%" },
          {
            width: "100%",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%", // ✅ démarre quand le haut de la ligne atteint 85% du viewport
              end: "bottom 100%",
              toggleActions: "play none none reverse",
            },
          }
        );
      };

      animateLine(lineOne);
      animateLine(lineTwo);
      
    }, containerRef);


    return () => ctx.revert();
  }, []);

  return (
    <div className="container-resume-sermons" ref={containerRef}>
      <section className="resume-sermons">
        <div className="resume-sermons-title">
          <h1>Fampianarana</h1>
          <h1>Toriteny</h1>
        </div>
      </section>

      {/* Première ligne */}
      <div className="resume-sermons-second-container">
        <h3 className="resume-sermons-second-title">Fampianarana</h3>
        <div ref={lineOne} className="resume-sermons-line"></div>
      </div>
            <div className="book"></div>



      {/* Deuxième ligne */}
      <div className="resume-sermons-second-container">
        <h3 className="resume-sermons-second-title">Toriteny</h3>
        <div ref={lineTwo} className="resume-sermons-line"></div>
      </div>
      <div className="work"></div>



    </div>
  );
}

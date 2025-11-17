import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";


document.addEventListener("DOMContentLoaded", ()=> {
    gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add ((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
  

const cardContainer = document.querySelector(".family-card-container")
const stickyHeader = document.querySelector(".family-sticky-header h1")

let isGapAnimationCompleted = false;
let isFlipAnimationCOmpleted = false;

function initAnimations() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    const mm = gsap.matchMedia()

    mm.add("(max-width: 999px)",() => {
        document
        .querySelectorAll(".family-card, .family-card-container, .family-sticky-header h1")
        .forEach((el: any) => { el.style = ""})
        return {}
    })

    mm.add("(min-width: 1000px)", ()=> {
        ScrollTrigger.create({
            trigger: ".family-sticky",
            start: "top top",
            end: `+=${window.innerHeight * 4}px`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
                const progress = self.progress;

                if (progress >= 0.1 && progress <= 0.25) {
                    const headerProgress = gsap.utils.mapRange(
                        0.1,
                        0.25,
                        0,
                        1,
                        progress
                    )
                    const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress)
                    const opacityValue = gsap.utils.mapRange(
                        0,
                        1,
                        0,
                        1,
                        headerProgress
                    )

                    gsap.set(stickyHeader, {
                        y: yValue,
                        opacity: opacityValue,
                    })
                } else if (progress < 0.1) {
                    gsap.set(stickyHeader, {
                        y: 0,
                        opacity: 1,
                    })
                }


                if (progress <= 0.25) {
                    const widthPercentage = gsap.utils.mapRange(
                        0,
                        0.25,
                        75,
                        60,
                        progress
                    )
                    gsap.set(cardContainer, {width: `${widthPercentage}%`})
                }else {
                    gsap.set(cardContainer, {width: "60%"})
                }

                if(progress >= 0.35 && !isGapAnimationCompleted) {
                    gsap.to(cardContainer, {
                        gap: "20px",
                        duration: 0.5,
                        ease: "power3.out"
                    })

                    gsap.to(["#family-card-1","family-card-2","family-card-3"], {
                        borderRadius: "20px",
                        duration: 0.5,
                        ease: "power4.inOut"
                    })

                    isGapAnimationCompleted = true

                }else if (progress < 0.35 && isGapAnimationCompleted) {
                    gsap.to(cardContainer, {
                        gap: "0px",
                        duration: 0.5,
                        ease: "power3.out"
                    })

                    gsap.to("#family-card-1", {
                        borderRadius: "20px 0 0 20px",
                        duration: 0.5,
                        ease: "power3.out"
                    })
                    
                    gsap.to("#family-card-2", {
                        borderRadius: "0px",
                        duration: 0.5,
                        ease: "power3.out"
                    })

                    gsap.to("#family-card-1", {
                        borderRadius: "20px 0 0 20px",
                        duration: 0.5,
                        ease: "power3.out"
                    })

                    isGapAnimationCompleted = false
                }

                if (progress >+ 0.7 && !isFlipAnimationCOmpleted) {
                    gsap.to(".family-card", {
                        rotateY: 180,
                        duration: 0.75,
                        ease: "power3.inOut",
                        stagger: 0.1
                    })

                    gsap.to(["#family-card-1" ,"#family-card-2"], {
                        y: 30,
                        rotateZ: (i) => [-15, 15][i],
                        duration: 0.75,
                        ease: "power3.inOut"
                    })

                    isFlipAnimationCOmpleted = true
                } else if (progress < 0.7 && isFlipAnimationCOmpleted) {
                    gsap.to(".card", {
                        rotateY: 0,
                        duration: 0.75,
                        ease: "power3.inOut",
                        stagger: -0.1
                    })

                    gsap.to(["#family-card-1", "#family-card-3"], {
                        y: 0,
                        rotationZ: 0,
                        duration: 0.75,
                        ease: "power3.inOut"
                    })

                    isFlipAnimationCOmpleted = false
                }
            }
        })
    })
}

initAnimations()

let resizeTimer: any;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout (() => {
        initAnimations();
    }, 250)
})

})

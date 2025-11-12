import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// @ts-ignore
import { SplitText } from "gsap/SplitText";

export const useMenuAnimation = () => {
  const isMenuOpen = useRef(false);
  const isAnimating = useRef(false);

  // 🧠 Ces refs stockeront les éléments DOM
  const containerRef = useRef<HTMLElement | null>(null);
  const menuOverlayRef = useRef<HTMLElement | null>(null);
  const menuContentRef = useRef<HTMLElement | null>(null);
  const menuImageRef = useRef<HTMLElement | null>(null);
  const menuLinksWrapperRef = useRef<HTMLElement | null>(null);
  const linkHighlighterRef = useRef<HTMLElement | null>(null);
  const menuLinksRef = useRef<NodeListOf<Element> | null>(null);
  const homepageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    console.log("FIRST");

    gsap.registerPlugin(SplitText);

    // ✅ Initialiser les refs après le rendu DOM
    containerRef.current = document.querySelector(".container");
    menuOverlayRef.current = document.querySelector(".menu-overlay");
    menuContentRef.current = document.querySelector(".menu-content");
    menuImageRef.current = document.querySelector(".menu-img");
    menuLinksWrapperRef.current = document.querySelector(".menu-links-wrapper");
    linkHighlighterRef.current = document.querySelector(".link-highLighter");
    menuLinksRef.current = document.querySelectorAll(".menu-link a");
    homepageRef.current = document.querySelector(".homepage-content");

    if (
      !containerRef.current ||
      !menuOverlayRef.current ||
      !menuContentRef.current ||
      !menuImageRef.current ||
      !menuLinksWrapperRef.current ||
      !linkHighlighterRef.current ||
      !homepageRef.current
    ) {
      console.warn("Certains éléments du menu sont introuvables");
      return;
    }

    // Découpage des lettres
    menuLinksRef.current?.forEach((link) => {
      const spans = link.querySelectorAll("span");
      spans.forEach((span, i) => {
        const split = new SplitText(span, { type: "chars" });
        split.chars.forEach((char) => {
          char.classList.add("char");
        });
        if (i === 1) gsap.set(split.chars, { y: "110%" });
      });
    });

    // Position initiale
    gsap.set(menuContentRef.current, { y: "50%", opacity: 0.25 });
    gsap.set(menuImageRef.current, { scale: 0.5, opacity: 0.25 });
    gsap.set(menuLinksRef.current, { y: "-150%" });
    gsap.set(linkHighlighterRef.current, { y: "-150%" });
  }, []);

  const openMenu = () => {
    if (isAnimating.current || isMenuOpen.current) return;
    isAnimating.current = true;

    const container = containerRef.current!;
    const menuOverlay = menuOverlayRef.current!;
    const menuContent = menuContentRef.current!;
    const menuImage = menuImageRef.current!;
    const menuLinks = menuLinksRef.current!;
    const linkHighlighter = linkHighlighterRef.current!;


    gsap.to(homepageRef, {
      rotation: 10,
      x: 3000,
      y: 450,
      scale: 1.5,
      duration:1.25,
      ease:"power4.inOut"
    })

    gsap.set(menuOverlay, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    });

    gsap.to(menuOverlay, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
      duration: 1.25,
      ease: "expo.out",
      onComplete: () => {
        gsap.set(container, { y: "40%" });
        gsap.set(".menu-link", { overflow: "visible" });
        isMenuOpen.current = true;
        isAnimating.current = false;
      },
    });

    gsap.to(container, { y: "40%", opacity: 0.25, duration: 1.25, ease: "expo.out" });
    gsap.to(menuContent, { y: "0%", opacity: 1, duration: 1.5, ease: "expo.out" });
    gsap.to(menuImage, { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" });
    gsap.to(menuLinks, { y: "0%", duration: 1.25, stagger: 0.1, delay: 0.25, ease: "expo.out" });
    gsap.to(linkHighlighter, { y: "0%", duration: 1, delay: 1, ease: "expo.out" });
  };

  const closeMenu = () => {
    isAnimating.current = true;

    const container = containerRef.current!;
    const menuOverlay = menuOverlayRef.current!;
    const menuContent = menuContentRef.current!;
    const menuImage = menuImageRef.current!;
    const menuLinks = menuLinksRef.current!;
    const linkHighlighter = linkHighlighterRef.current!;

    gsap.to(container, { y: "0%", opacity: 1, duration: 1, ease: "expo.out" });
    gsap.to(menuLinks, { y: "-200%", duration: 1, ease: "expo.out" });
    gsap.to(menuContent, { y: "-100%", opacity: 0.25, duration: 1, ease: "expo.out" });
    gsap.to(menuImage, {y: "-100%", opacity: 0, duration: 0.80, ease: "expo.out" });

    gsap.to(menuOverlay, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "expo.out",
      onComplete: () => {
        gsap.to(menuOverlay, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(menuLinks, { y: "150%" });
        gsap.set(linkHighlighter, { y: "150%" });
        gsap.set(menuContent, { y: "50%", opacity: 0.25 });
        gsap.set(menuImage, { y: "0%", scale: 0.5, opacity: 0.25 });
        gsap.set(".menu-link", { overflow: "hidden" });

        isAnimating.current = false;
        isMenuOpen.current = false;
      },
    });
  };

  return { openMenu, closeMenu, isMenuOpen, isAnimating };
};

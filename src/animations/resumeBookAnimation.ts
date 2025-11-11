import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { LIVRES } from "@/data/livre";
import type { BookInterface } from "@/types/workTypes";

export function initBookAnimation() {

console.log("Initializing Book Animation");
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const bookContainer = document.querySelector(".book");
  if (!bookContainer) return;

  const createWorkItem = (project: BookInterface) => {
    const workItem = document.createElement("div");
    workItem.className = "book-item";
    workItem.innerHTML = `
      <div class="book-item-image">
        <img src="${project.couverture}" alt="${project.titre}" />
      </div>
      <div class="book-item-copy">
        <h3 class="book-item-title">${project.titre}</h3>
        <p class="book-item-description">${project.description}</p>
      </div>
    `;
    return workItem;
  };


  // ✅ Affiche exactement LIVRES.length (ex : 4) éléments
  for (let i = 0; i < LIVRES.length; i += 2) {
    console.log("Creating row for items:", i, "and", i + 1);
    const bookRow = document.createElement("div");
    bookRow.className = "book-row";

    const leftItemIndex = i;
    const rightItemIndex = i + 1;

    // Premier item
    bookRow.appendChild(createWorkItem(LIVRES[leftItemIndex]));

    // Deuxième item s’il existe
    if (rightItemIndex < LIVRES.length) {
      bookRow.appendChild(createWorkItem(LIVRES[rightItemIndex]));
    }

    bookContainer.appendChild(bookRow);
  }

  // Animation
  gsap.set(".book-item", { y: 1000 });

  document.querySelectorAll(".book-row").forEach((row) => {
    const workItems = row.querySelectorAll<HTMLElement>(".book-item");

    workItems.forEach((item, itemIndex) => {
      const isLeftProjectItem = itemIndex === 0;
      gsap.to(item, {
        rotation: isLeftProjectItem ? -60 : 60,
        transformOrigin: "center center",
      });
    });

    ScrollTrigger.create({
      trigger: row,
      start: "top 60%",
      onEnter: () => {
        gsap.to(workItems, {
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        });
      },
    });
  });
}

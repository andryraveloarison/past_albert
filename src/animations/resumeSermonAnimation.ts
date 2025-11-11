import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { SERMONS } from "@/data/sermons";
import type { SermonInterface } from "@/types/workTypes";

export function initSermonAnimation() {

  console.log("Initializing Sermon Animation");

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const workContainer = document.querySelector(".work");
  if (!workContainer) return;

  const createWorkItem = (project: SermonInterface) => {
    const workItem = document.createElement("div");
    workItem.className = "work-item";
    workItem.innerHTML = `
      <div class="work-item-image">
        <img src="${project.couverture}" alt="${project.titre}" />
      </div>
      <div class="work-item-copy">
        <h3 class="work-item-title">${project.titre}</h3>
        <p class="work-item-description">${project.resume}</p>
      </div>
    `;
    return workItem;
  };

  console.log(SERMONS.length)

  // ✅ Affiche exactement SERMONS.length (ex : 4) éléments
  for (let i = 0; i < SERMONS.length; i += 2) {
    console.log("Creating row for items:", i, "and", i + 1);
    const row = document.createElement("div");
    row.className = "row";

    const leftItemIndex = i;
    const rightItemIndex = i + 1;

    // Premier item
    row.appendChild(createWorkItem(SERMONS[leftItemIndex]));

    // Deuxième item s’il existe
    if (rightItemIndex < SERMONS.length) {
      row.appendChild(createWorkItem(SERMONS[rightItemIndex]));
    }

    workContainer.appendChild(row);
  }

  // Animation
  gsap.set(".work-item", { y: 1000 });

  document.querySelectorAll(".row").forEach((row) => {
    const workItems = row.querySelectorAll<HTMLElement>(".work-item");

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

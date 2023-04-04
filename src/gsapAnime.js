import { gsap } from "gsap";

let pageAnimations;

const bringAnime = (pageClassName) => {
  pageAnimations = gsap.to(`${pageClassName}`, {
    y: "-100vh",
    duration: 1,
    ease: "linear",
    onComplete: () => {
      pageAnimations = undefined;
    },
  });
}

const takeAnime = (pageClassName) => {
  pageAnimations = gsap.to(`${pageClassName}`, {
    y: "0",
    duration: 1,
    ease: "linear",
    onComplete: () => {
      pageAnimations = undefined;
    },
  });
}

export function bringThePage(pageClassName) {
  if (pageAnimations !== undefined) {
    if (!pageAnimations.isActive) {
      bringAnime(pageClassName)
    }
  } else {
    bringAnime(pageClassName)
  }
}

export function takeThePage(pageClassName) {
  if (pageAnimations !== undefined) {
    if (!pageAnimations.isActive) {
      takeAnime(pageClassName);
    }
  } else {
    takeAnime(pageClassName);
  }
}
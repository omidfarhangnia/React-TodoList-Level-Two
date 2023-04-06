import { gsap } from "gsap";

let pageAnimations;

const bringAnime = (pageClassName) => {
  pageAnimations = gsap.to(`${pageClassName}`, {
    y: "-100vh",
    duration: .55,
    delay: .2,
    ease: "power4.out",
    onComplete: () => {
      pageAnimations = undefined;
    },
  });
}

const takeAnime = (pageClassName) => {
  pageAnimations = gsap.to(`${pageClassName}`, {
    y: "0",
    duration: .55,
    delay: .2,
    ease: "power4.out",
    onComplete: () => {
      pageAnimations = undefined;
    },
  });
}

export const deleteAnime = (todoId, callback) => {
  gsap.to(`#${todoId}`, {
    opacity: 0,
    duration: .7,
    ease: "expo.out",
    onComplete: () => {callback()}
  })
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
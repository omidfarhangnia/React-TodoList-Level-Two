// import { useContext, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { CtContainer } from "./App";

// export default function StartAnime({ children, animeId, className }) {
//   let container = useContext(CtContainer);
//   let tl = useRef();
//   const toggleTimeline = () => {
//     tl.current.reversed(!tl.current.reversed());
//   };

//   useLayoutEffect(() => {
//     const ctx = gsap.context((self) => {
//       const page = self.selector(`.${animeId}`);
//       tl.current = gsap
//         .timeline()
//         .to(page, {top: 0, duration: .5, linear: "ease", delay: .2})
//         .reverse();
//       return () => ctx.revert();
//     }, container);
//   }, []);

//   return <button onClick={toggleTimeline} className={className}>{children}</button>;
// }

// export function ReverseAnime({ children, animeId, className }) {
//   let container = useContext(CtContainer);
//   let tl = useRef();
//   const toggleTimeline = () => {
//     tl.current.reversed(!tl.current.reversed());
//   };

//   useLayoutEffect(() => {
//     const ctx = gsap.context((self) => {
//       const page = self.selector(`.${animeId}`);
//       tl.current = gsap
//         .timeline()
//         .to(page, {top: "100vh", duration: .5, linear: "ease", delay: .2})
//         .reverse();
//       return () => ctx.revert();
//     }, container);
//   }, []);

//   return <button onClick={toggleTimeline} className={className}>{children}</button>;
// }

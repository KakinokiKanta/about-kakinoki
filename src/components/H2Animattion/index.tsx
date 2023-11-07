"use client";

import { useInView } from "react-intersection-observer";
import styles from "./H2Animation.module.css";
import { rowdies } from "@/lib/fontManager";

type H2AnimationProps = {
  title: string;
  animation: string;
};

export const H2Animation = (props: H2AnimationProps) => {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  let animationClass = "";
  switch (props.animation) {
    case "fadein":
      animationClass = styles.fadein;
      break;
    case "slideleft":
      animationClass = styles.slideleft;
      break;
    default:
      animationClass = styles.slideright;
      break;
  }

  return (
    <h2
      ref={ref}
      className={`${styles.title} ${inView && animationClass} ${
        rowdies.className
      }`}
    >
      {props.title}
    </h2>
  );
};

"use client";

import { useInView } from "react-intersection-observer";
import styles from "./H1Animation.module.css";
import { rowdies } from "@/lib/fontManager";

type H1AnimationProps = {
  title: string;
  animation: string;
};

export const H1Animation = (props: H1AnimationProps) => {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  // let animationClass = "";
  // switch (props.animation) {
  //   case "fadein":
  //     animationClass = styles.fadein;
  //     break;
  //   case "slideleft":
  //     animationClass = styles.slideleft;
  //     break;
  //   default:
  //     animationClass = styles.slideright;
  //     break;
  // }

  return (
    <h1
      ref={ref}
      className={`${styles.title} ${styles.animation} ${rowdies.className}`}
    >
      {props.title}
    </h1>
  );
};
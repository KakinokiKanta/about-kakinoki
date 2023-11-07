"use client";

import { useInView } from "react-intersection-observer";
import styles from "./H2Animation.module.css";
import { rowdies } from "@/lib/fontManager";

export const H2Animation = (props: { title: string }) => {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <h2
      ref={ref}
      className={`${styles.title} ${inView && styles.fadein} ${
        rowdies.className
      }`}
    >
      {props.title}
    </h2>
  );
};

import React from "react";
import styles from "./Tooltip.module.css";

type TooltipProps = {
  text: string;
  children: JSX.Element;
};

export const Tooltip = (props: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      {props.children}
      <div className={styles.tooltiptext}>{props.text}</div>
    </div>
  );
};

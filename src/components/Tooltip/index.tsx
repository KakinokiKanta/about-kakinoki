import React from "react";
import styles from "./Tooltip.module.css";

type TooltipProps = {
  text: string;
  children: JSX.Element;
};

export const Tooltip = (props: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipText}>{props.text}</div>
      {props.children}
    </div>
  );
};

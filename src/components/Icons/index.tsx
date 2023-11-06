// "use client";

// import { useState } from "react";
import styles from "./Icons.module.css";

export const Menu = (props: { isOpen: boolean }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={props.isOpen ? styles.close : styles.menu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

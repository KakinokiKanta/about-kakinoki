"use client";

import { useState } from "react";
import styles from "./Icons.module.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={isOpen ? styles.close : styles.menu}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

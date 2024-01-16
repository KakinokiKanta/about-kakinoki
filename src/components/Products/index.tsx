"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { ModalWin } from "./ModalWin";

type ProductsProps = {
  title: string;
  image: string;
  alt: string;
  description: string[];
  tools: string[];
  links: {
    href: string;
    kinds: string;
  }[];
  children?: ReactNode;
};

export const Products = (props: ProductsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const manageModal = (e: React.MouseEvent) => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    } else if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const body = document.body;

    body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.content} onClick={manageModal}>
        {props.children}
      </div>
      {isOpen && (
        <ModalWin
          clickEvent={manageModal}
          clickButton={closeModal}
          {...props}
        />
      )}
    </>
  );
};

import Image from "next/image";
import styles from "./ModalWin.module.css";
import React from "react";

type ModalWinProps = {
  clickEvent: (e: React.MouseEvent) => void;
  title: string;
  image: string;
  alt: string;
  description: string[];
  tools: string[];
  links: {
    href: string;
    kinds: string;
  }[];
};

export const ModalWin = (props: ModalWinProps) => {
  return (
    <div className={styles.modalOverlay} onClick={props.clickEvent}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.parent}>
            <Image src={props.image} alt={props.alt} fill sizes="45vw" />
          </div>
        </div>
        <div className={styles.content}>
          <button onClick={props.clickEvent}>ばってん</button>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <ul>
            {props.links.map((item) => {
              return (
                <li key={item.href}>
                  <a href={item.href}>{item.kinds}</a>
                </li>
              );
            })}
          </ul>
          <h3>使用技術</h3>
          {props.tools.map((tool) => {
            return <div key={tool}>{tool}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
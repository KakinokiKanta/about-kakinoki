import Image from "next/image";
import styles from "./ModalWin.module.css";
import React from "react";

type ModalWinProps = {
  clickEvent: (e: React.MouseEvent) => void;
};

export const ModalWin = (props: ModalWinProps) => {
  return (
    <div className={styles.modalOverlay} onClick={props.clickEvent}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.parent}>
            <Image
              src="/products_imgs/portfolio_site/home_top.png"
              alt="portfolio site image"
              fill
              sizes="45vw"
            />
          </div>
        </div>
        <div className={styles.content}>
          <button onClick={props.clickEvent}>ばってん</button>
          <h3>TITLE</h3>
          <p>despriction</p>
          <a href="https://github.com/KakinokiKanta/about-kakinoki">GitHub</a>
          <a href="https://about-kakinoki.vercel.app/">リンク</a>
          <h3>使用技術</h3>
          <p>TypeScript、React、Next.js</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { H2Animation } from "@/components/Animation/H2Animattion";
import styles from "./HomeProducts.module.css";
import { Products } from "@/components/Products";
import { LinkButton } from "@/components/LinkButton";
import { PRODUCT_LIST } from "@/utils/productList";

// https://docs.google.com/presentation/d/1aWybADme1O4EncY2zE7ORNhTWaweKGhEy2FZg8a80DM/edit#slide=id.g2606e7a39ec_0_141

export const HomeProducts = () => {
  return (
    <section className={styles.section}>
      <H2Animation title="PRODUCTS" animation="fadein" />
      <div className={styles.container}>
        {PRODUCT_LIST.map((item, index) => {
          return (
            <React.Fragment key={item.title}>
              {index < 3 && <Products {...item} />}
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.button}>
        <LinkButton href="/products" />
      </div>
    </section>
  );
};

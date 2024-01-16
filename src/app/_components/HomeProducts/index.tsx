import React from "react";
import { H2Animation } from "@/components/Animation/H2Animation";
import styles from "./HomeProducts.module.css";
import { LinkButton } from "@/components/LinkButton";
import { PRODUCT_LIST } from "@/utils/productList";
import { ProductContainer } from "@/components/Products/ProductContainer";

export const HomeProducts = () => {
  return (
    <section className={styles.section}>
      <H2Animation title="PRODUCTS" animation="fadein" />
      <div className={styles.container}>
        {PRODUCT_LIST.map((item, index) => {
          return (
            <React.Fragment key={item.title}>
              {index < 3 && <ProductContainer {...item} />}
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.button}>
        <LinkButton href="/allProducts" />
      </div>
    </section>
  );
};

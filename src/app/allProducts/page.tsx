import React from "react";
import { H1Animation } from "@/components/Animation/H1Animation";
import { H2Animation } from "@/components/Animation/H2Animation";
import { Products } from "@/components/Products";
import { PRODUCT_LIST } from "@/utils/productList";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  return (
    <main>
      <section>
        <div className={styles.h1}>
          <H1Animation title="PRODUCTS" />
        </div>
        <div className={styles.container}>
          {PRODUCT_LIST.map((item, index) => {
            return (
              <React.Fragment key={item.title}>
                {index < 3 && <Products {...item} />}
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default AllProducts;

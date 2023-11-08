import Image from "next/image";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <Image
          className={styles.image}
          src={"/products_imgs/dena_CLI_ans.png"}
          alt="dena_CLI"
          fill
        />
      </div>
      <h3 className={styles.h3}>Communication Leading Interface</h3>
    </div>
  );
};

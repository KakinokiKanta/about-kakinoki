import Image from "next/image";
import styles from "./Products.module.css";

type ProductsProps = {
  title: string;
  image: string;
  alt: string;
};

export const Products = (props: ProductsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <Image
          className={styles.image}
          src={props.image}
          alt={props.alt}
          fill
        />
      </div>
      <h3 className={styles.h3}>{props.title}</h3>
    </div>
  );
};

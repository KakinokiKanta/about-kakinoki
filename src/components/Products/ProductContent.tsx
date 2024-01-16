import Image from "next/image";
import styles from "./ProductContent.module.css";

type ProductContent = {
  title: string;
  image: string;
  alt: string;
};

export const ProductContent = (props: ProductContent) => {
  return (
    <>
      <div className={styles.parent}>
        <Image
          className={styles.image}
          src={props.image}
          alt={props.alt}
          fill
          sizes="30vw"
        />
      </div>
      <h3 className={styles.h3}>{props.title}</h3>
    </>
  );
};

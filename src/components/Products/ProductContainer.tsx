import { Products } from ".";
import { ProductContent } from "./ProductContent";
import styles from "./ProductContainer.module.css";

type ProductContainerProps = {
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

export const ProductContainer = (props: ProductContainerProps) => {
  return (
    <div className={styles.container}>
      <Products {...props}>
        <ProductContent
          title={props.title}
          image={props.image}
          alt={props.alt}
        />
      </Products>
    </div>
  );
};

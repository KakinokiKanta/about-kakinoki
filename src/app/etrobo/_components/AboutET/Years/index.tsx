import styles from "./Years.module.css";
import Image from "next/image";

type YearsProps = {
  h3: string;
  img: string;
  alt: string;
  p: string[];
};

export const Years = (props: YearsProps) => {
  return (
    <div>
      <h3 className={styles.h3}>{props.h3}</h3>
      <div className={styles.container}>
        <span className={styles.parent}>
          <Image
            src={props.img}
            alt={props.alt}
            fill
            sizes="(max-width: 768px) 90%, 50%"
            style={{
              objectFit: "contain",
            }}
            className={styles.image}
          />
        </span>
        <div className={styles.text}>
          {props.p.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

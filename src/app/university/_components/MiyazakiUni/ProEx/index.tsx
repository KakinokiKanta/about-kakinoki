import styles from "./ProEx.module.css";
import Image from "next/image";

type ProExProps = {
  h3: string;
  img: string;
  alt: string;
  p: string[];
};

export const ProEx = (props: ProExProps) => {
  return (
    <div>
      <h3 className={styles.h3}>{props.h3}</h3>
      <div className={styles.container}>
        <div className={props.h3 === "プログラミング演習5" ? styles.parent5 : styles.parent6}>
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
        </div>
        <div className={styles.text}>
          {props.p.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

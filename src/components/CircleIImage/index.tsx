import Image from "next/image";
import styles from "./CircleImage.module.css";

type CircleImageProps = {
  image_path: string;
};

export const CircleImage = (props: CircleImageProps) => {
  return (
    <div className={styles.parent}>
      <Image
        className={styles.image}
        src={props.image_path}
        alt="Photo for self-introduction"
        fill
        sizes="50vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

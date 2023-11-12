import { CircleImage } from "@/components/CircleIImage";
import styles from "./HomeContent.module.css";
import { rowdies } from "@/lib/fontManager";
import { LinkButton } from "@/components/LinkButton";
import { H2Animation } from "@/components/Animation/H2Animation";

type HomeContentProps = {
  is_image_left: boolean;
  image_path: string;
  h2: string;
  p: string[];
  link: string;
};

export const HomeContent = (props: HomeContentProps) => {
  return (
    <section className={styles.section}>
      {/* 画像を左、テキストを右に配置する場合 */}
      {props.is_image_left && (
        <div className={styles.lcontainer}>
          <CircleImage image_path={props.image_path} />
          <div className={styles.vercel}>
            <H2Animation title={props.h2} animation="slideright" />
            {props.p.map((item) => {
              return (
                <p className={styles.description} key={item}>
                  {item}
                </p>
              );
            })}
            <LinkButton href={props.link} />
          </div>
        </div>
      )}
      {/* 画像を右、テキストを左に配置する場合 */}
      {!props.is_image_left && (
        <div className={styles.rcontainer}>
          <div className={styles.vercel}>
            <H2Animation title={props.h2} animation="slideleft" />
            {props.p.map((item) => {
              return (
                <p className={styles.description} key={item}>
                  {item}
                </p>
              );
            })}
            <LinkButton href={props.link} />
          </div>
          <CircleImage image_path={props.image_path} />
        </div>
      )}
    </section>
  );
};

import styles from "./KatLab.module.css"
import { H2Animation } from "@/components/Animation/H2Animation"

export const KatLab = () => {
  return (
    <section>
      <div className={styles.h2}>
        <H2Animation title="KatLab" animation="slideleft" />
      </div>
      <div>
        <p>
          私はETロボコンに研究室の有志メンバーと参加しています。チームはKatLab(カタラボ)といい、6年連続で全国大会に出場している結構強いチームです。
        </p>
      </div>
    </section>
  )
}
import Image from "next/image";
import styles from "./Skills.module.css";
import { H2Animation } from "@/components/Animation/H2Animation";
import { TECH_STACK_ICONS } from "@/utils/techStackIcons";

type SkillsProps = {
  skill: {
    icon: string;
    alt: string;
    h3: string;
    years: string;
    description: string;
    relatedSkills: string[];
  }[];
};

export const Skills = (props: SkillsProps) => {
  return (
    <section>
      <div className={styles.h2}>
        <H2Animation title="SKILLS" animation="slideleft" />
      </div>
      <ul className={styles.ul}>
        {props.skill.map((skill) => {
          return (
            <li className={styles.li} key={skill.h3}>
              <div className={styles.container}>
                <div className={styles.parent}>
                  <Image src={skill.icon} alt={skill.alt} fill />
                </div>
                <div className={styles.text}>
                  <div className={styles.top}>
                    <div className={styles.title}>
                      <div className={styles.parentSmall}>
                        <Image src={skill.icon} alt={skill.alt} fill />
                      </div>
                      <h3 className={styles.h3}>{skill.h3}</h3>
                    </div>
                    <p className={styles.years}>{`${skill.years}年目`}</p>
                  </div>
                  <p>{skill.description}</p>
                  <div className={styles.relatedSkills}>
                    {skill.relatedSkills.map((item, index) => {
                      return (
                        <p
                          className={styles.relatedSkill}
                          key={index}
                        >{`#${item}`}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <table className={styles.table}>
          <tbody>
          {TECH_STACK_ICONS.map((row) => {
            return (
              <tr key={row.style}>
                {row.image.map((item) => {
                  return (
                    <td key={item}>
                      <div className={styles.stackIcon}>
                        <Image src={item} alt="" fill />
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  );
};

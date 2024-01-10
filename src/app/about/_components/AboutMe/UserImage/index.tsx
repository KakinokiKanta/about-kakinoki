import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import styles from "./UserImage.module.css";

export const UserImage = () => {
  const GET_USER_INFO = gql`
    query ($userName: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $userName) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_USER_INFO, {
    variables: {
      userName: process.env.NEXT_PUBLIC_GITHUB_ID,
      from: `${new Date().getFullYear()}-01-01T00:00:00`,
      to: `${new Date().getFullYear()}-12-31T23:59:59`,
    },
  });
  console.log(data);
  console.log(error);

  return (
    <div className={styles.parent}>
      {/* TODO: githubAPI */}
      <Image
        src="/home_imgs/travel_back.JPG"
        alt="Kakinoki profile image"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 50%, 30%"
      />
    </div>
  );
};

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import styles from "./UserImage.module.css";

export const UserImage = () => {
  const GET_USER_INFO = gql`
    query ($userName: String!) {
      user(login: $userName) {
        contributionsCollection {
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
    variables: { userName: process.env.NEXT_PUBLIC_GITHUB_ID },
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

import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import styles from "./GithubContribution.module.css";

export const GithubContribution = () => {
  const YEAR = new Date().getFullYear() - 1;

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
      from: `${YEAR}-01-01T00:00:00`,
      to: `${YEAR}-12-31T23:59:59`,
    },
  });
  console.log(data);
  console.log(error);

  const date = loading
    ? new Date()
    : new Date(
        `${data.user.contributionsCollection.contributionCalendar.weeks[0].contributionDays[0].date}`
      );

  return (
    <>
      {!loading && (
        <>
          <p>
            {
              data.user.contributionsCollection.contributionCalendar
                .totalContributions
            }{" "}
            contributions in {YEAR}
          </p>
          {/* github apiで取得した最初の日付が何曜日かを判定(gridが何段目から始まるかを判断するため) */}
          <p>{date.getDay()}</p>
        </>
      )}
    </>
  );
};

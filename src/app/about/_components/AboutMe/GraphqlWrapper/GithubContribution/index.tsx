import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import styles from "./GithubContribution.module.css";
import React from "react";

export const GithubContribution = () => {
  type ApiResponse = {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Weeks;
        };
      };
    };
  };

  type Weeks = [
    {
      contributionDays: [
        {
          contributionCount: number;
          date: string;
        }
      ];
    }
  ];

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

  const { data, error, loading } = useQuery<ApiResponse>(GET_USER_INFO, {
    variables: {
      userName: process.env.NEXT_PUBLIC_GITHUB_ID,
      from: `${YEAR}-01-01T00:00:00`,
      to: `${YEAR}-12-31T23:59:59`,
    },
  });
  console.log(data);
  console.log(error);

  const contributionWeeks = loading
    ? []
    : [...data!.user.contributionsCollection.contributionCalendar.weeks];
  console.log(contributionWeeks);

  const colorJudge = (contributionCount: number) => {
    if (contributionCount === 0) {
      return styles.gray;
    } else if (contributionCount <= 4) {
      return styles.light;
    } else if (contributionCount <= 9) {
      return styles.normal;
    } else if (contributionCount <= 14) {
      return styles.dark;
    } else {
      return styles.black;
    }
  };

  return (
    <>
      {!loading && (
        <div className={styles.github}>
          <p>
            {
              data!.user.contributionsCollection.contributionCalendar
                .totalContributions
            }{" "}
            contributions in {YEAR} (from GitHub API)
          </p>
          {/* github apiで取得した最初の日付が何曜日かを判定(gridが何段目から始まるかを判断するため) */}
          <div className={styles.container}>
            <div className={styles.grid}>
              {contributionWeeks.map((week, index) => {
                return (
                  <div
                    className={index === 0 ? styles.columnStart : styles.column}
                    key={index}
                  >
                    {week.contributionDays.map((day) => {
                      return (
                        <React.Fragment key={day.date}>
                          <div
                            className={`${styles.panel} ${colorJudge(
                              day.contributionCount
                            )}`}
                          ></div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className={styles.bottom}>
              <span className={styles.learn}>
                Learn how we count contriburions
              </span>
              <span className={styles.svgIntro}>Less More</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import { HomeTop } from "@/app/_components/HomeTop";
import { HomeAbout } from "@/app/_components/HomeAbout";
import { HomeContent } from "./_components/HomeContent";
import { HomeProducts } from "./_components/HomeProducts";
import { Loading } from "./_loading/Loading";
import { Screen } from "./_loading/Screen";
import { Suspense } from "react";

const Home = () => {
  const HOME_CONTENTS = [
    {
      is_image_left: true,
      image_path: "/home_imgs/robocon_body.jpeg",
      h2: "ET ROBOT CONTEST",
      p: [
        "ETロボコンでは全チームが同じハードウェアを使用するため、ソフトウェアで優劣を競います。",
        "総合成績は「設計」+「競技」で決定します。",
        "私の所属するチームは、2023年の九州地区大会1位で、全国大会6位でした。",
      ],
      link: "/etrobo",
    },
    {
      is_image_left: false,
      image_path: "/home_imgs/testimonial.jpg",
      h2: "UNIVERSITY",
      p: [
        "学部生の頃は、工学部の情報システム工学科に在籍していました。現在は、工学研究科に在籍しています。",
        "演習を始め、様々な講義でプログラミングを学んでいます。講義の約8割でC言語を使用します。",
        "学部卒業時の成績は、学科次席でした。",
      ],
      link: "/university",
    },
  ];

  return (
    <>
      <Suspense fallback={<Screen />}>
        <Loading>
          <Screen />
        </Loading>
        <main>
          <HomeTop />
          <HomeAbout />
          {HOME_CONTENTS.map((item) => {
            return <HomeContent {...item} key={item.h2} />;
          })}
          <HomeProducts />
        </main>
      </Suspense>
    </>
  );
};

export default Home;

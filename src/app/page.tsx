import { HomeTop } from "@/app/_components/HomeTop";
import { HomeAbout } from "@/app/_components/HomeAbout";
import { HomeContent } from "./_components/HomeContent";
import { HomeProducts } from "./_components/HomeProducts";

const Home = () => {
  const HOME_CONTENTS = [
    {
      is_image_left: true,
      image_path: "/home_imgs/robocon_body.jpeg",
      h2: "ET ROBOT CONTEST",
      p: [
        "ETロボコンでは全チームが同じハードウェアを使用するため、ソフトウェアで優劣を競います。",
        "総合成績は「設計」+「競技」で決定します。",
        "私の所属するチームは、2023年の全国大会で6位、2024年の全国大会で5位でした。",
      ],
      link: "/etrobo",
    },
    {
      is_image_left: false,
      image_path: "/home_imgs/testimonial.jpg",
      h2: "UNIVERSITY",
      p: [
        "学部生の頃は工学部の情報システム工学科に、修士課程では工学研究科に在籍していました。",
        "大学の講義で学んだC言語が、初めて触れたプログラミング言語でした。",
        "学部卒業時の成績は、学科次席でした。",
      ],
      link: "/university",
    },
  ];

  return (
    <>
      <main>
        <HomeTop />
        <HomeAbout />
        {HOME_CONTENTS.map((item) => {
          return <HomeContent {...item} key={item.h2} />;
        })}
        <HomeProducts />
      </main>
    </>
  );
};

export default Home;

import { HomeTop } from "@/app/_components/HomeTop";
import { HomeAbout } from "@/app/_components/HomeAbout";
import { HomeContent } from "./_components/HomeContent";

const Home = () => {
  const HOME_CONTENTS = [
    {
      is_image_left: true,
      image_path: "/home_imgs/robocon_body.jpeg",
      h2: "ET Robot Contest",
      p: [
        "ETロボコンでは全チームが同じハードウェアを使用するため、ソフトウェアで優劣を競います。",
        "総合成績は「設計」+「競技」で決定します。",
        "私の所属するチームは、今年(2023年)の九州地区1位で、全国大会出場が決定しています。",
      ],
      link: "/etrobo",
    },
    {
      is_image_left: false,
      image_path: "/home_imgs/testimonial.jpg",
      h2: "University",
      p: [
        "ETロボコンでは全チームが同じハードウェアを使用するため、ソフトウェアで優劣を競います。",
        "総合成績は「設計」+「競技」で決定します。",
        "私の所属するチームは、今年(2023年)の九州地区1位で、全国大会出場が決定しています。",
      ],
      link: "/university",
    },
  ];

  return (
    <main>
      <HomeTop />
      <HomeAbout />
      {HOME_CONTENTS.map((item) => {
        return <HomeContent {...item} key={item.h2} />;
      })}
    </main>
  );
};

export default Home;

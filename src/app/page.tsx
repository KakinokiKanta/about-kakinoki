import { HomeTop } from "@/app/_components/HomeTop";
import { HomeAbout } from "@/app/_components/HomeAbout";
import { HomeEtrobo } from "./_components/HomeEtrobo";
import { HomeUniversity } from "./_components/HomeUniversity";

const Home = () => {
  return (
    <main>
      <HomeTop />
      <HomeAbout />
      <HomeEtrobo />
      <HomeUniversity />
    </main>
  );
};

export default Home;

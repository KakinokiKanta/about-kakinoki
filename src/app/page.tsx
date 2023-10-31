import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Kakinoki Kanta</h1>
      <Image
        src="/home_imgs/travel_back.JPG"
        alt="Photo for self-introduction"
        width={1280}
        height={960}
        priority
      ></Image>
    </main>
  );
}

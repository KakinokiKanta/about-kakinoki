export const PRODUCT_LIST = [
  {
    title: "Portfolio Site",
    image: "/products_imgs/portfolio_site/home_top.png",
    alt: "this site",
    description: [
      "このWebサイトです。TypeScriptとReact、Next.jsを用いて開発しました。CSSはCSSモジュールを採用しました。",
      "最近、Next.js(App Router)について学んだので、ルーティングはApp Routerを採用しています。",
      "簡単なCSSアニメーションやモーダルウィンドウ、レスポンシブデザインなど、Webフロントの基礎を学びながら開発を進めました。",
      "個人的な一押しポイントは、技術スタックのアイコンが背景をスライドし続けるCSSアニメーションです。これによって、エンジニア志望の学生らしいポートフォリオサイトにできたと思います!!",
    ],
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "CSSモジュール",
      "Git",
      "GitHub",
      "Vercel(デプロイ)",
    ],
    links: [
      {
        href: "https://github.com/KakinokiKanta/about-kakinoki",
        kinds: "GitHub",
      },
      {
        href: "https://about-kakinoki.vercel.app/",
        kinds: "Web App",
      },
    ],
  },
  {
    title: "Communication Leading Interface",
    image: "/products_imgs/dena_autumn/dena_CLI_ans.png",
    alt: "dena autumn hackason product",
    description: [
      "株式会社DeNA様のオータムハッカソン2023で開発したWebアプリです。私はフロントエンドの開発を担当し、このWebアプリでハッカソンを優勝しました!",
      "このアプリは、在宅ワークが多く業務以外の交流が図りづらいエンジニア向けの「CLIで操作できる自己紹介リレー」アプリです。",
      "エンジニアライクなアプリとするために、アプリの操作はCLIで行います。",
      "フロントエンド側はTypeScript+Next.js(App Router)をVercelでデプロイしています。",
    ],
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Xterm.js(Web上でのCUIの実装)",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel(デプロイ)",
    ],
    links: [
      {
        href: "https://github.com/KakinokiKanta/dena-autumn2023-frontend",
        kinds: "GitHub",
      },
      {
        href: "https://docs.google.com/presentation/d/1aWybADme1O4EncY2zE7ORNhTWaweKGhEy2FZg8a80DM/edit#slide=id.g2606e7a39ec_0_141",
        kinds: "Slide",
      },
    ],
  },
  {
    title: "ECO MEAL",
    image: "/products_imgs/rakuten_intern/logo.png",
    alt: "rakuten internship product",
    description: [
      "このWebアプリは、フードロス削減を目的とした食のポータルアプリです。楽天グループ株式会社様のハッカソン形式の夏インターンシップで開発しました。",
      "飲食店で提供する料理の皿にQRコードを仕込むことで、料理を食べきったらQRコードを読み取ってポイントを獲得でき、獲得したポイントを使って、飲食店などで発生する廃棄前食品と交換することができます。",
      "また、獲得したポイントで、たまごっちのようにキャラ育成をしていくことができ、キャラを育成しきったら、更にポイントを獲得することができます。この機能により、子供が積極的にフードロス削減に貢献できるような仕組みを実現しています。",
      "技術的な工夫としては、サイドバーを共通化することで、デザインの一体化や画面遷移に関する機能の共通化を図っています。また、グローバルなポイントの状態管理も実現しています。",
    ],
    tools: [
      "JavaScript",
      "React",
      "Next.js",
      "styled-components",
      "Figma",
      "Git",
      "GitHub",
    ],
    links: [
      {
        href: "https://github.com/KakinokiKanta/rakuten_sintern",
        kinds: "GitHub",
      },
    ],
  },
  {
    title: "ロボコン2022 走行体システム",
    image: "/products_imgs/robocon2022_sys/main_image.jpg",
    alt: "robocon2022 main system product",
    description: [
      "このシステムは、ETロボコン2022大会で開発したロボット側のシステムです。C++とPythonを用いてラズパイ上に実装しました。",
      "私はロボコン初参加だったため、先輩方のアドバイスを受けながら、OnOff制御やPID制御などの組み込み開発における重要な点を学びながら実装を進めました。",
      "本年のユニークなポイントとしては、走行の信頼性を高めるために、リアカメラを用いて走行を補正する「回頭補正」を導入した点です。",
      "個人的なこの開発の強みは、コードレビューをする(される)ことです。自分の実装に対して、毎週のように人からフィードバックを受けることができ、また、他人の実装に対してフィードバックをするために頭を悩ませることで、かなり実力が付いたと思います。",
    ],
    tools: [
      "C++",
      "Python",
      "OpenCV",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Raspberry Pi",
    ],
    links: [
      {
        href: "https://github.com/KatLab-MiyazakiUniv/etrobocon2022",
        kinds: "GitHub",
      },
    ],
  },
  {
    title: "ロボコン2022 カメラシステム",
    image: "/products_imgs/robocon2022_camera/game_course_2022.png",
    alt: "robocon2022 camera system product",
    description: [
      "このシステムは、ETロボコン2022大会で開発したカメラシステムです。カメラシステムはノートPC上で起動し、USB接続したWebカメラからの画像を処理することで、ロボット側に走行経路を指示します。",
      "ランダムに設置されたカラーブロックを、同じカラーのブロックが目印となっている4箇所の設置場所まで運んでいきます。なお、この設置場所のカラーもランダムに決まります。",
      "Webカメラから取得したコース画像を基に、ブロックの位置を把握し、設置場所までの走行経路を算出します。",
      "走行経路を算出する際には、A*アルゴリズムを用いた経路探索を行っています。",
    ],
    tools: ["Python", "OpenCV", "Git", "GitHub", "GitHub Actions"],
    links: [
      {
        href: "https://github.com/KatLab-MiyazakiUniv/etrobocon2022-camera-system",
        kinds: "GitHub",
      },
    ],
  },
  {
    title: "ロボコン2023 走行体システム",
    image: "/products_imgs/robocon2023_sys/main_image.png",
    alt: "robocon2023 main system product",
    description: [
      "このシステムは、ETロボコン2023大会で開発したロボット側のシステムです。C++とPythonを用いてラズパイ上に実装しました。",
      "本年の開発では、ゲーム内容に顔認識が必要だったため、YOLOを用いた物体検出を導入しました。また、昨年以上に精密な走行を実現するために、モーターのパワーで直接的に走行を制御するのではなく、ロボットの走行速度の実測値と指定値の差から次の指定値を判定する速度フィードバック制御を導入しました。",
    ],
    tools: [
      "C++",
      "Python",
      "OpenCV",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Raspberry Pi",
    ],
    links: [
      {
        href: "https://github.com/KatLab-MiyazakiUniv/etrobocon2023",
        kinds: "GitHub",
      },
    ],
  },
  {
    title: "ECO MEAL",
    image: "/products_imgs/rakuten_intern/logo.png",
    alt: "rakuten internship product",
    description: [
      "このWebアプリは、フードロス削減を目的とした食のポータルアプリです。楽天グループ株式会社様のハッカソン形式の夏インターンシップで開発しました。",
      "飲食店で提供する料理の皿にQRコードを仕込むことで、料理を食べきったらQRコードを読み取ってポイントを獲得でき、獲得したポイントを使って、飲食店などで発生する廃棄前食品と交換することができます。",
      "また、獲得したポイントで、たまごっちのようにキャラ育成をしていくことができ、キャラを育成しきったら、更にポイントを獲得することができます。この機能により、子供が積極的にフードロス削減に貢献できるような仕組みを実現しています。",
      "技術的な工夫としては、サイドバーを共通化することで、デザインの一体化や画面遷移に関する機能の共通化を図っています。また、グローバルなポイントの状態管理も実現しています。",
    ],
    tools: [
      "JavaScript",
      "React",
      "Next.js",
      "styled-components",
      "Figma",
      "Git",
      "GitHub",
    ],
    links: [
      {
        href: "https://github.com/KakinokiKanta/rakuten_sintern",
        kinds: "GitHub",
      },
    ],
  },
];

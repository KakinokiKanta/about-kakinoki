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
];

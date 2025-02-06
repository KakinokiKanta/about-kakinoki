/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  swcMinify: false,
  // 以下を追加
  // compiler: {
  //   styledComponents: {
  //     ssr: true,
  //   },
  // },
  webpack: (config) => {
    // config.module.rules.unshift({
    //   test: /pdf\.worker\.(min\.)?mjs/,
    //   use: [
    //     {
    //       loader: "file-loader",
    //       options: {
    //         name: "[contenthash].[ext]",
    //         publicPath: "/_next/static/worker",
    //         outputPath: "static/worker",
    //       },
    //     },
    //   ],
    // });
    config.resolve.alias.canvas = false;
    // Important: return the modified config
    // config.module.rules.push({
    //   test: /\.node/,
    //   use: "raw-loader",
    // });
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate")

module.exports = {
  swcMinify: false,
  compiler: { removeCosole: { exclude: ["log"] } },

  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.node = {
        fs: false,
        path: false
      }
    }
    return config
  },
  trailingSlash: true,
  staticPageGenerationTimeout: 1000000,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = { topLevelAwait: true }
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    )
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config
  },
  images: {
    loader: "imgix",
    path: "",
    // formats: ["image/avif", "image/webp"],
    domains: ["assets.abraacdn.com", "s101.abraacdn.com", "www.abraa.com"]
  },
  optimizeFonts: false,
  resolve: {
    fallback: {
      fs: false
    }
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:all*(svg|jpg|png)",
  //       locale: false,
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=9999999999, must-revalidate"
  //         }
  //       ]
  //     }
  //   ]
  // },
  experimental: {
    // unstable_runtimeJS: false,
    output: "standalone",
    esmExternals: false
  }
}

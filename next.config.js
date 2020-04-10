const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({ public: ["API_URL", "API_KEY"] });

const nextConfig = {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html",
        },
        browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html",
        },
    },
    publicRuntimeConfig: {
        PROXY_MODE: process.env.PROXY_MODE,
        API_URL: process.env.API_URL,
        API_KEY: process.env.API_KEY,
        STATIC_PATH: process.env.STATIC_PATH,
    },
};

module.exports = withConfig(
    withPlugins([[withCSS], [withSass], [withBundleAnalyzer]], nextConfig)
);

// import withSass from "@zeit/next-sass";
// import withCSS from "@zeit/next-css";

// export default withCSS(
//     withSass({
//         webpack(config) {
//             config.module.rules.push({
//                 test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//                 use: {
//                     loader: "url-loader",
//                     options: {
//                         limit: 100000,
//                     },
//                 },
//             });

//             return config;
//         },
//     })
// );

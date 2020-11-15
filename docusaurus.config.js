const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: "算法珠玑",
  tagline: "以少胜多",
  url: "https://soulmachine.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "soulmachine", // Usually your GitHub org/user name.
  projectName: "algorithm-essentials", // Usually your repo name.
  stylesheets: [
    // from https://github.com/KaTeX/KaTeX#starter-template
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    navbar: {
      title: "算法珠玑",
      logo: {
        alt: "算法珠玑",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/soulmachine/algorithm-essentials",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "02f7be89c899e6289492d2f3822fa580",
      indexName: "algorithm_essentials_soulmachine",
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    googleAnalytics: {
      trackingID: "UA-7583537-12",
    },
    gtag: {
      trackingID: "UA-7583537-12",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // docs-only mode
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/soulmachine/algorithm-essentials/edit/master/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

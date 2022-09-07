const math = require('remark-math');
const katex = require('rehype-katex');

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
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
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
      appId: 'SJ9D0I9C67',
      apiKey: "f611fdd8408b5a18f8cb862bdebf72fb",
      indexName: "algorithm_essentials_soulmachine",
      searchParameters: {}, // Optional (if provided by Algolia)
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
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "UA-7583537-12",
        },
        googleAnalytics: {
          trackingID: "UA-7583537-12",
        },
      },
    ],
  ],
};

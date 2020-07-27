const configs = require("./config");

module.exports = {
  title: "30 Seconds of Typescript- Inspired by 30-seconds-of-code",
  tagline:
    "30 Seconds of Typescript, Code Snippets to increase productivity[WIP]",
  url: "https://decipher.dev",
  baseUrl: "/30-seconds-of-typescript/",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "30-seconds-of-typescript", // Usually your repo name.
  ...configs,
  themeConfig: {
    ...configs.themeConfig,
    navbar: {
      title: "30 Seconds of Typescript",
      logo: {
        alt: "30 Seconds of Typescript Logo",
        src: "img/logo.svg",
        href: "https://decipher.dev/",
        target: "_self",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/deepakshrma/30-seconds-of-typescript",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/deepakshrma/30-seconds-of-typescript/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

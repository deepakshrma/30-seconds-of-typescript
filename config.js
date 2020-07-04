const path = require("path");
console.log(
  require.resolve(path.resolve(__dirname, "plugins/tags-creator.js"))
);
module.exports = {
  plugins: [
    // require.resolve("@docusaurus/plugin-google-analytics"),
    require.resolve("@docusaurus/plugin-sitemap"),
    [require.resolve("docusaurus-lunr-search"), { languages: ["en"] }],
    // path.resolve(__dirname, 'plugins/tags-creator.js')
  ],
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap",
      type: "text/css",
    },
  ],
  themeConfig: {
    // sidebarCollapsible: false,
    prism: {
      defaultLanguage: "ts",
    },
    // googleAnalytics: {
    //   trackingID: "",
    // },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "30 Seconds of Typescript",
              to: "docs/",
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2/',
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Medium.com",
              href: "https://medium.com/@deepak_v",
            },
            {
              label: "Discord",
              href: "https://discord.com/channels/@deepakv",
            },
            {
              label: "Linkdin",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/deepakshrma/deepakshrma.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma, Inc. Built with Docusaurus.`,
    },
  },
  themes: [require.resolve("@docusaurus/theme-classic")],
};

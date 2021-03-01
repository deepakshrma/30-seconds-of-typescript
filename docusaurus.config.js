const path = require("path");
console.log(
  require.resolve(path.resolve(__dirname, "plugins/tags-creator.js"))
);
module.exports = {
  title: "30 Seconds of Typescript- Inspired by 30-seconds-of-code",
  tagline:
    "30 Seconds of Typescript, Code Snippets to increase productivity[WIP]",
  url: "https://decipher.dev",
  baseUrl: "/30-seconds-of-typescript/",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "30-seconds-of-typescript", // Usually your repo name.
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap",
      type: "text/css",
    },
  ],
  themeConfig: {
    prism: {
      defaultLanguage: "ts",
    },
    googleAnalytics: {
      trackingID: "UA-172955705-1",
    },
    // algolia: {
    //   apiKey: 'e71b47af92b1daef0e43bbbfa2b4a70a',
    //   indexName: 'decipher_dev',
    // },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "30 Seconds of Typescript",
        src: "img/favicon.ico",
        href: "https://decipher.dev/",
        target: "_self",
      },
      items: [
        {
          to: "/",
          label: "30 Seconds of Typescript",
          position: "left",
        },
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
    footer: {
      style: "dark",
      links: [
        {
          title: "Follow me",
          items: [
            {
              label: "Linkdin",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
            {
              label: "Medium.com",
              href: "https://medium.com/@deepak_v",
            },
            {
              label: "Discord",
              href: "https://discord.com/channels/@deepakv",
            },
          ],
        },
        {
          title: "Friend with me",
          items: [
            { label: "Twitter", href: "https://twitter.com/nalayakshrma" },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nalayaksharma_poetry/",
            },
            {
              label: "Unsplash",
              href: "https://unsplash.com/@deepak_v",
            },
          ],
        },
        // {
        //   title: "Contact me",
        //   items: [
        //     {
        //       label: "Email me",
        //       href: "mailto:contact-me@decipher.dev?subject=Say Hi!&body=Hi,\n",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma`,
    },
  },
  themes: [],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/deepakshrma/30-seconds-of-typescript/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    // require.resolve("@docusaurus/plugin-google-analytics"),
    // [require.resolve("docusaurus-lunr-search"), { languages: ["en"] }],
    // path.resolve(__dirname, 'plugins/tags-creator.js')
  ],
};

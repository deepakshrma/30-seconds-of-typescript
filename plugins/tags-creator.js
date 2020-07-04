const path = require("path");

module.exports = function (context, options) {
  return {
    name: "tags-creator",
    getPathsToWatch() {
      return [`${path.resolve(context.siteDir)}/docs/**/*.{md,mdx}`];
    },
    async loadContent() {
      return 1 + Math.floor(Math.random() * 10);
    },
    async contentLoaded({ content, actions }) {
      console.log({ content, actions });
      // The contentLoaded hook is done after loadContent hook is done.
      // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)
    },
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: "https://www.github.com",
            },
          },
        ],
        preBodyTags: [
          {
            tagName: "script",
            attributes: {
              charset: "utf-8",
              src: "/noflash.js",
            },
          },
        ],
        postBodyTags: [`<div> This is post body </div>`],
      };
    },
    /* other lifecycle API */
  };
};

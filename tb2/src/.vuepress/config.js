// const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Tom Bartindale",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    search: false,
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "About",
        link: "/",
      },
      {
        text: "Research",
        link: "/research/",
      },
      {
        text: "Projects",
        link: "/projects/",
      },
      {
        text: "Roles",
        link: "/roles/",
      },
    ],
    smoothScroll: true,
    sidebar: {
      // "/guide/": [
      //   {
      //     title: "Guide",
      //     collapsable: false,
      //     children: ["", "using-vue"],
      //   },
      // ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.bib$/i,
          use: "raw-loader",
        },
      ],
    },
  },
};

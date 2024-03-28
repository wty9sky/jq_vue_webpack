const router = [
  {
    name: "首页",
    filename: "index.html",
    chunks: ["index-css", "index-js"],
    template: "./src/pages/index/index.html",
  },
  {
    name: "other",
    filename: "other.html",
    chunks: ["other-css", "other-js"],
    template: "./src/pages/other/index.html",
  },
  {
    name: "vue-template",
    filename: "template.html",
    chunks: ["babel-polyfill", "vue-template-js"],
    template: "./src/pages/vue-template/index.html",
  },
];

module.exports = {
  router,
};

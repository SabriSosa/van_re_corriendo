module.exports = {
  content: ["./build/index.html", "./build/**/*.js", "./build/**/*.html"],
  css: ["./node_modules/bootstrap/dist/css/bootstrap.min.css"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: ["html", "body"],
    deep: [/^col/,/^container/, /^navbar/, /^nav/, /^carousel/,/^btn/,/^modal/],
  },
};

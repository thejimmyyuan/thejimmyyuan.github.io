module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/jyresume.pdf");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
      dir: {
        input: "src",
        output: "docs",
      },
    };
  };
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  }
}

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: 'https://staging.aides-territoires.incubateur.net',
  }
}

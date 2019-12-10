module.exports = {
  transpileDependencies: ["vuetify"],
  filenameHashing: false,
  outputDir: "build",
  assetsDir: "static",
  publicPath: "./",
  devServer: {
    // proxy: {
    //   "/services": {
    //     target:
    //       "http://pno-pc.levallois.eudoweb.com" +
    //       "/Specif/EUDO_EXTENSION_ENQUETE/root/SectionORM/modules/enquete"
    //   }
    // }
  }
};

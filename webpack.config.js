const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { resolve } = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sinbad",
    projectName: "mf-test",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      // https://medium.com/weekly-webtips/create-react-app-import-modules-using-aliases-with-webpack-and-typescript-439017d84eb9
      alias: {
        "@home/application": resolve(
          __dirname,
          "./src/pages/home/application/"
        ),
        "@home/style": resolve(__dirname, "./src/assets/styles/"),
        "@home/assets": resolve(__dirname, "./src/assets/"),
        "@home/entity": resolve(__dirname, "./src/pages/home/domain/entity/"),
        "@home/repository": resolve(
          __dirname,
          "./src/pages/home/domain/repository/"
        ),
        "@home/infrastructure": resolve(__dirname, "./src/infrastructure/"),
        "@redux-store/*": resolve(__dirname, "./src/store/"),
      },
    },
    devServer: {
      https: {
        cacert: "./cert/localhost.pem",
        key: "./cert/localhost.key",
        cert: "./cert/localhost.crt",
      },
    },
  });
};

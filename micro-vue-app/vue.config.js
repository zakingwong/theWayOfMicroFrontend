const { defineConfig } = require("@vue/cli-service");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new WebpackManifestPlugin({
        fileName: "asset-manifest.json", // 输出的JSON文件名
        publicPath: "/", // 输出的公共路径，根据您的实际部署路径进行调整
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.app.filter(
            (fileName) => !fileName.endsWith(".map")
          );
          const funs = {
            mount: "mountMicroVueApp",
            unmount: "unmountMicroVueApp",
          };
          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
            funs,
          };
        },
      }),
    ],
  },
});

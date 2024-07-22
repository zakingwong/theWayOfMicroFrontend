module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    return devServerConfig;
  },
};

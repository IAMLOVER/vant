const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
// 当前环境
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  lintOnSave: !IS_PROD,
  productionSourceMap: !IS_PROD,
  chainWebpack: config => {
    // 压缩图片
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: "65-90", speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      });
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  }
};

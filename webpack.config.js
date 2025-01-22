const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["imagemin-mozjpeg", { quality: 80 }], // Comprime JPEG
              ["imagemin-pngquant", { quality: [0.6, 0.8] }], // Comprime PNG
              ["imagemin-gifsicle", { optimizationLevel: 3 }], // Comprime GIF
              ["imagemin-svgo", {}], // Comprime SVG
              ["imagemin-webp", { quality: 80 }], // Comprime WebP
            ],
          },
        },
      }),
    ],
  },
};

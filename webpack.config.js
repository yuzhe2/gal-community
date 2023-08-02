const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      view: path.resolve(__dirname, "./src/view"),
      assets: path.resolve(__dirname, "./src/assets"),
      component: path.resolve(__dirname, "./src/component"),
      network: path.resolve(__dirname, "./src/network"),
      src: path.resolve(__dirname, "./src"),
    },
    extensions: [".vue", ".jpg", ".png", ".webp", "..."],
    mainFiles: ["index", "home"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 打包vue文件时必须要有的
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-runtime",
              [
                "component",
                {
                  "libraryName": "element-ui",
                  "styleLibraryName": "theme-chalk"
                }
              ]
            ]
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 如果要在vue文件中使用scoped属性的话,必须要用
          // vue-style-loader不能用style-loader
          {
            loader: "vue-style-loader",
          },
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     localIdentName: "[path][name]__[local]",
            //   }
            // },
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                'src/common/scss/varibles.scss',
                'src/common/scss/theme.scss'
              ]
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "vue-style-loader",
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg|webp)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    open: false,
    port: 8080,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  plugins: [new VueLoaderPlugin()],
  mode: "development",
};

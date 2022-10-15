const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: { main: path.resolve (__dirname,'./src/index.js')
},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/  ,

        use: [
          MiniCssExtractPlugin.loader, 
         
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({filename: 'style.css'})
],
};

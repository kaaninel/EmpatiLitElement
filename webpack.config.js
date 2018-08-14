const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './Source/Index.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.json"})],
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  watch: true,
  mode: "development"
};
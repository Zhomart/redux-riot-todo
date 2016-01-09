var webpack = require('webpack')

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + "/public",
        publicPath: "/public/",
        filename: "bundle.js"
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.ProvidePlugin({ riot: 'riot' })
    ],
    module: {
      preLoaders: [
        { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
      ],
      loaders: [
        { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'] } }
      ]
    }
};

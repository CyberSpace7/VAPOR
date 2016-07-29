var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    main: ['webpack-hot-middleware/client',
    './client/Index']
  },
    output: {
    path: path.join(__dirname, 'static'),
    filename: 'main.js',
    publicPath: '/static/',
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel?cacheDirectory=tmp'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'client'),
            }
        ]
    }
};

/**
 * Created by Victoria on 05.01.2017.
 */

module.exports = {
    entry: "./main",
    output: {
        filename: "build.js"
    },

    module: {
      loaders: [
        {test: /\.(scss|sass)$/, loader: 'style!css?importLoaders=1&sourceMap!sass?outputStyle=expanded&sourceMap' },
      ]
    }

};


var webpack          = require ('webpack');
var WebpackDevServer = require ('webpack-dev-server');
var config           = require ('./webpack.config.js');

var compiler = webpack (config);

var server = new WebpackDevServer (compiler, {
  contentBase: config.output.path,
  publicPath:  config.output.publicPath,

  hot:                true,
  historyApiFallback: true,

  quiet:  true,
  noInfo: true,
  stats:  {colors: true},
});

function displayStats (stats) {
  var now = new Date ().toLocaleTimeString ();
  var msg = now + ': hot rebuild; ';

  if (stats.hasErrors ()) {
    msg += '\x1B[31m' + 'has errors';
    stats.compilation.errors.forEach (function (err) {
      msg += '\n--------- ';
      msg += err.error.toString ();
    });
  } else if (stats.hasWarnings ()) {
    msg += '\x1B[33m' + 'has warnings';
  } else {
    msg += '\x1B[32m' + 'successful √';
  }

  console.log ('\x1B[0m' + msg + '\x1B[0m');
}

compiler.plugin ('done', displayStats);

server.listen (3000, 'localhost', function (err) {
  if (err) {
    console.error (err);
    throw err;
  }
  console.log ('WebpackDevServer listening at http://localhost:3000');
});

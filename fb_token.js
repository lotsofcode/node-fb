var https = require('https');

exports.init = function(config, callback) {

  var options = {
    host:'graph.facebook.com',
    path:'/oauth/access_token?client_id=' + config.client_id + '&client_secret=' + config.client_secret + '&grant_type=client_credentials'
  }

  https.get(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        access_token = chunk.split('=')[1];
        console.log('access_token: ' + access_token)
        callback(access_token);
      });
  });
}

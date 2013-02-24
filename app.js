var unio = require('unio'),
    fb_token = require('./fb_token'),
    fb_config = require('./fb_config');

var fb_search = function (access_token) {

  var fb_params = {
    q: 'css3',
    access_token: access_token
  };

  unio()
    .use('fb')
    .get('search', fb_params, function (err, reply) {
      console.log(reply.data[0])
    });
};

fb_token.init(fb_config.config, fb_search);

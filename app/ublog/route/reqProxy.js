/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/6
 * Time: 19:46
 */

var crypto = require('crypto');
var queryString = require('qs');
var interfaceConf = require('../config.interface');
var http = interfaceConf.http;
var apiHost = interfaceConf.host;
var apiPort = interfaceConf.port;
var apiMethod = interfaceConf.method;
var apiCollection = interfaceConf.interfaces;

module.exports = {
  interfaces: apiCollection,
  request: function(api, _req, _res, callback){
    var params = _req.body;
    var headers = _req.headers;
    if(api === 'doLogin'){
      var md5 = crypto.createHash('md5');
      params['user.password'] =  md5.update(params['user.password'] || '').digest('hex');
    }
    var postData = queryString.stringify(params);
    //console.log('Send request data: ' + postData);
    var reqOptions = {
      host: apiHost,
      port: apiPort,
      method: apiCollection[api]['method'] || apiMethod,
      path: apiCollection[api]['url'],
      headers: headers,
      rejectUnauthorized: false
    };
    reqOptions['headers']['content-length'] = postData.length;
    /*console.log('=============== headers =================');
    console.log(reqOptions['headers']);
    console.log('=============== headers end =================');*/
    var body = '';
    var req = http.request(reqOptions, function(res) {
      //console.log('Got response status code: ' + res.statusCode);
      if(res.statusCode === 302){
        _res.redirect('/');
        return;
      }
      res.on('data',function(d){
        body += d;
      }).on('end', function(){
        //console.log('Got response body: ' + body);
        callback(null, res, body);
      });
    }).on('error', function(err) {
      //console.log('Got error: ' + err.message);
      callback(err)
    });
    req.write(postData);
    req.end();
  }
};
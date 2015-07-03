/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/3
 * Time: 10:47
 */

var url = require('url');
var crypto = require('crypto');

var TOKEN = 'shaman2015';

module.exports = {
  getService: function(req, res){
    var reqObj = url.parse(req.url, true);
    var params = reqObj['query'];
    var signature = params['signature'];
    var timestamp = params['timestamp'];
    var nonce = params['nonce'];
    var echostr = params['echostr'];
    var tmpArr = [TOKEN, timestamp, nonce];
    tmpArr.sort();
    var tmpStr = tmpArr.join();
    console.log(tmpArr, tmpStr);
    var shasum = crypto.createHash('sha1');
    shasum.update(tmpStr);
    var shaResult = shasum.digest('hex');
    console.log('shaResult:' + shaResult, 'signature:' + signature);
    if(shaResult === signature){
      res.send(echostr);
    }else{
      console.log('Not weixin server!');
      res.send('Not weixin server!');
    }
  },

  postService: function(req, res, next){}
};
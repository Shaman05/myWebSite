/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

var reqProxy = require('./reqProxy');
var interfaces = reqProxy.interfaces;

module.exports = {
  login: function(req, res){
    res.render('login', {});
  },
  page: function(req, res){
    var pageName = req.params.page;
    if(interfaces[pageName]) {
      reqProxy.request(pageName, req, res, function (err, proxyRes, data) {
        var proxyResData = JSON.parse(data);
        if (!err) {
          if(pageName === 'logout'){
            res.clearCookie();
            res.redirect('/');
          }else{
            if(pageName === 'integralCalculation' || pageName === 'redeemRule'){
              res.render(pageName, {list: proxyResData['data']});
            }else if(pageName === 'myIntegral' || pageName === 'currentIntegral'){
              res.render(pageName, {data: proxyResData['data'] || {}});
            }else{
              res.render(pageName, proxyResData['data'] || {});
            }
          }
        } else {
          res.render('error', {});
        }
      });
    }else{
      res.render(req.params.page, {});
    }
  },
  pageMore: function(req, res){
    res.render('page/' + req.params.page, {});
  },

  //接口 post
  api: function(req, res){
    var api = req.params.api;
    reqProxy.request(api, req, res, function(err, proxyRes, data){
      if(!err){
        res.set('Set-Cookie', proxyRes['headers']['set-cookie']);
        res.json(JSON.parse(data));
      }else{
        res.json({
          isSuccess: false,
          data: null,
          errorMsg: '调用接口异常!'
        });
      }
    });
  }
};
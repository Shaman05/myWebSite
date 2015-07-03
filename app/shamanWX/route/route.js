/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/4
 * Time: 15:47
 */

var wx = require('./wx');

module.exports = {
  wx: wx.getService,
  wx_post: wx.postService,
  index: function(req, res){
    res.render('index', {
      content: 'Hello!'
    });
  }
};
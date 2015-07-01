/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/6
 * Time: 19:11
 */

var http = require('http');
var https = require('https');

var env = 'prd'; //环境切换 local：本地 ， test: 测试， prd: 生产
var hostConf = {
  local: {
    host: '127.0.0.1',
    port: 3011,
    http: http
  },
  test: {
    host: '10.50.28.17',
    port: 8088,
    http: http
  },
  prd: {
    host: 'ubsp.upg.cn',
    port: 443,
    http: https
  }
};

module.exports = {
  title: 'ubsp数据接口集合定义',
  version: '0.1.0',
  engine: 'java',
  http: hostConf[env]['http'],
  host: hostConf[env]['host'],
  port: hostConf[env]['port'],
  method: 'POST',
  interfaces: {
    doLogin: {
      name: '登录',
      url: '/app/login_login.jhtml',
      params: {
        userNo: '',
        password: '',
        miNo: ''
      }
    },
    logout: {
      name: '退出',
      url: '/app/login_logout.jhtml',
      params: {}
    },
    myIntegral: {
      name: '我的积分',
      url: '/integral/integral_myInfo.jhtml',
      params: {}
    },
    currentIntegral: {
      name: '当期新增积分',
      url: '/integral/integral_append.jhtml',
      params: {}
    },
    pIntegralList: {
      name: '个人排名',
      url: '/integral/integral_personRank.jhtml',
      params: {
        page: '',
        rows: ''
      }
    },
    cIntegralList: {
      name: '分公司排名',
      url: '/integral/integral_branchRank.jhtml',
      params: {
        page: '',
        rows: ''
      }
    },
    integralCalculation: {
      name: '积分计算说明',
      url: '/integral/integral_describe.jhtml',
      params: {}
    },
    redeemRule: {
      name: '积分兑换',
      url: '/integral/integral_exchange.jhtml',
      params: {}
    }
  }
};
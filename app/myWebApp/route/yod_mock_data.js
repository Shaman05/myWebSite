/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/5
 * Time: 11:54
 */

var yod = require('yod-mock');

yod.type('User', {
  firstName: '@First',
  lastName: '@Last',
  sex: '@Sex',
  fullName: '@Self.firstName @Self.lastName',
  nickName: '@Nick',
  chineseName: '@ChineseName',
  age: '@Age(adult)',
  to100: '` 100 - @Self.age `',
  telephone: '@Tel',
  avatar: '@Avatar',
  others: {
    words: 'Hello, my name is @Parent.fullName, you can call me @Parent.nickName.',
    bestFriends: '@Nick.repeat(2, 3).join(", ")',
    myFirstNameLength: '@Parent.firstName.length',
    favouriteLetter: '@([A, B, C]).sample'
  }
});

yod.type('Product', {
  amountUnit: '@Range(1, 10).sample',
  amountUnitName: "鑫合汇",
  condition: '@Range(30, 70).sample',
  deadlineUnit: '@Range(1, 10).sample',
  deadlineUnitName: "万元",
  feature: '@Range(30, 50).sample',
  maxAmount: '@Range(1000, 2000).sample',
  maxDeadline: 3,
  maxRate: 5,
  minAmount: 1,
  minDeadline: 1,
  minRate: 1,
  prodName: '@(["E百万", "一键通"]).sample',
  prodNo: '@(["XHH001", "xhh002"]).sample',
  rateUnit: "1",
  rateUnitName: "鑫合汇",
  slogan: "222"
});

module.exports = {
  user: function(){
    return yod('@User');
  },
  products: function(){
    return yod('@Product.repeat(2, 5)');
  }
};
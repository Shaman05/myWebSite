/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/7/6
 * Time: 10:03
 */

var conf = require('./config.web')['db_conf'] || {};
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : conf.host,
  user     : conf.user,
  password : conf.password,
  database : conf.database
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;



/*
connection.query('select * from shop', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});

connection.end();*/

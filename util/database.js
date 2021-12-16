const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b8dc133e0f516c',
  database: 'heroku_eb86933fec20644',
  password: '11f4917b',
});

module.exports = pool.promise();
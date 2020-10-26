/** @format */

const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: '192.168.64.2',
	user: 'carlos',
	password: '1234',
	database: 'empresa',
	port: '3306',
});

mysqlConnection.connect(function (err) {
	if (err) {
		console.error(err);
		return;
	} else {
		console.log('db is connected');
	}
});

module.exports = mysqlConnection;

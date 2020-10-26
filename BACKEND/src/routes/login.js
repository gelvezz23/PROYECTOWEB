/** @format */

const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');

// GET all Employees
router.get('/login', (req, res) => {
	mysqlConnection.query('SELECT * FROM categoria', (err, rows, fields) => {
		if (!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

// GET An Employee
router.get('/login/:email/:name', (req, res) => {
	const { email, name } = req.params;
	mysqlConnection.query(
		'SELECT * FROM empresa WHERE emailcontacto = ? AND nombre = ? ',
		[email, name],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 200, message: 'Encontrado.', user: rows[0] });
			} else {
				console.log(err);
			}
		}
	);
});

module.exports = router;

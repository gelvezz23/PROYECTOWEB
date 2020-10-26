/** @format */

const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Employees
router.get('/categoria', (req, res) => {
	mysqlConnection.query('SELECT * FROM categoria', (err, rows, fields) => {
		if (!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

// GET An Employee
router.get('/categoria/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'SELECT * FROM categoria WHERE id = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				console.log(err);
			}
		}
	);
});

// DELETE An Employee
router.delete('/categoria/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'DELETE FROM categoria WHERE id = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Employee Deleted' });
			} else {
				console.log(err);
			}
		}
	);
});

// INSERT An Employee
router.post('/categoria/', (req, res) => {
	const { categoria, estado } = req.body;
	console.log(categoria, estado);
	const query = ` INSERT INTO categoria ( descripcion, estado ) VALUES (?, ?)`;
	mysqlConnection.query(query, [categoria, estado], (err, rows, fields) => {
		if (!err) {
			res.json({ status: 200, message: 'registro exitoso' });
		} else {
			res.send(err);
			console.log(err);
		}
	});
});

router.put('/categoria/:id', (req, res) => {
	const { descripcion, estado } = req.body;
	const { id } = req.params;
	const query = ` UPDATE categoria SET descripcion = ? , estado = ?  WHERE id = ?;
	`;
	mysqlConnection.query(query, [descripcion, estado, id], (err, rows, fields) => {
		if (!err) {
			res.json({ status: 'Category Updated' });
		} else {
			res.send(err);
			console.log(err);
		}
	});
});

module.exports = router;

/** @format */

const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Employees
router.get('/producto', (req, res) => {
	mysqlConnection.query('SELECT * FROM producto', (err, rows, fields) => {
		if (!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

// GET An Employee
router.get('/producto/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'SELECT * FROM producto WHERE id = ?',
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
router.delete('/producto/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'DELETE FROM producto WHERE id = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 200, message: 'eliminado.' });
			} else {
				console.log(err);
			}
		}
	);
});

// INSERT An Employee
router.post('/producto/', (req, res) => {
	const {
		categorias,
		descripcion,
		detalle,
		estado,
		imagen,
		nombre,
		referencia,
		valor,
	} = req.body;

	const query = ` INSERT INTO producto ( referencia, nombre, descripcioncorta, detalle, valor, estado, categoria_id, img, cantidad) VALUES ( ?,?,?,?,?,?,?,?, ?)`;
	mysqlConnection.query(
		query,
		[referencia, nombre, descripcion, detalle, valor, estado, categorias, imagen, 0],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 200, message: 'Registro exitoso' });
			} else {
				res.send(err);
				console.log(err);
			}
		}
	);
});

router.put('/producto/:id', (req, res) => {
	const { descripcion, estado } = req.body;
	const { id } = req.params;
	const query = ` UPDATE producto SET descripcion = ? , estado = ?  WHERE id = ?;
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

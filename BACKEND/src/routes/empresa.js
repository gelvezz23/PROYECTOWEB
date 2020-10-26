/** @format */

const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Employees
router.get('/empresa', (req, res) => {
	mysqlConnection.query('SELECT * FROM empresa', (err, rows, fields) => {
		if (!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

// GET An Employee
router.get('/empresa/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'SELECT * FROM empresa WHERE id = ?',
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
router.delete('/empresa/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query('DELETE FROM empresa WHERE id = ?', [id], (err, rows, fields) => {
		if (!err) {
			res.json({ status: 200, message: 'eliminado.' });
		} else {
			console.log(err);
		}
	});
});

// INSERT An Employee
router.post('/empresa/', (req, res) => {
	const {
		name,
		telefono,
		QuienesSomos,
		direccion,
		email,
		facebook,
		instagram,
		twitter,
	} = req.body;
	const query = ` INSERT INTO empresa (nombre, quienessomos, emailcontacto, direccion, telefonocontacto, facebook, twitter, instagram ) VALUES (?,?,?,?,?,?,?,?)`;
	mysqlConnection.query(
		query,
		[name, QuienesSomos, email, direccion, telefono, facebook, twitter, instagram],
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

router.put('/empresa/:id', (req, res) => {
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

/** @format */

const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/login.js'));
app.use(require('./routes/categoria.js'));
app.use(require('./routes/empresa.js'));
app.use(require('./routes/producto'));
// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});

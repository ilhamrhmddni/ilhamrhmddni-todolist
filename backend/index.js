require('dotenv').config();

const express = require('express');
const app = express();
const db = require('./config/db');
const rootRoutes = require('./routes');
const PORT = process.env.PORT;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Connected to the database');
});

app.use(express.json());
app.use(rootRoutes);

app.listen(PORT, () => {
	console.log('Server Berjalan di Port :' + PORT);
});

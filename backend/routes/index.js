const express = require('express');
const route = express.Router();
const todoRoute = require('./todo-route');
const authRoute = require('./auth-route');
const userRoute = require('./user-route');

route.get('/', (req, res) => {
	res.json('Selamat Datang di Server Ilhamrhmddni');
});

route.use('/auth', authRoute);
route.use('/user', userRoute);
route.use('/todo', todoRoute);

module.exports = route;

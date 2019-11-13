const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const apiRoutes = require('./api/index.js');
const app = express()
const mongoose = require('mongoose');

mongoose.connect(
	'DB_CONNECTION=mongodb://heroku_kbp0kwhw:X4rqRGkf@ds039088.mlab.com:39088/heroku_kbp0kwhw', {
	useNewUrlParser: true
},
	() => {
		console.log("Connected to db!");
	}
);
mongoose.set('useCreateIndex', true);

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/../dist')))

// this * route is to serve project on different page routes except root `/`
// app.get(/.*/, function (req, res) {
// 	res.sendFile(path.join(__dirname, '/dist/index.html'))
// });


app.use('/api/v1', apiRoutes);

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: http://localhost:${port}`);
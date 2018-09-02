const express = require('express')
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')

mongoose.connect('mongodb://localhost/brand');

const brand = mongoose.model('Brand', { name: String , ctime: Date});

let app = express()

app.use('/lib', express.static(path.join(__dirname, './lib/')))

app.get('/', function (req, res) {
	fs.readFile('./views/add-brand.html', function (err, data) {
		res.send(data.toString())
	})
})
	.get('/queryAll', function (req, res) {
		brand.find(function (err, data) {
			console.log(data)
		})
	})

app.listen(3000, function () {
	console.log('running..')
})
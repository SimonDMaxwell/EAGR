require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const path = require('path')
const app = express()
const API_V1 = require('./api/v1/hub.js')
const PORT = process.env.PORT || 8080
const APP_NAME = process.env.NAME || 'Express API'

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(['*']))
app.use(
	session({
		secret: process.env.SESSION_SECRET || 'secret8080',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24, // day in milliseconds
		},
	})
)
// Establish APIapp.get("", (req, res) => {
   res.json({name: process.env.NAME, versions: ["v1"]})
})
app.use("/api/v1", API_V1)

// Start express app
const _app = app.listen(PORT, require('os').hostname(), () => {
	console.log(`\n\t${APP_NAME} listening on http://${_app.address().address}:${_app.address().port}\n`)
})

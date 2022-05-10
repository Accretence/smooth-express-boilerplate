const path = require('path')
const resolvedDirectory = path.resolve()
const express = require('express')
const cors = require('cors')
const colors = require('colors')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const { notFound, errorHandler } = require('./middleware/errorMiddleware') // Middlewares
const routes = require('./routes/routes') // Routes

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/route', routes)
app.get('/', (req, res) => {
	res.send('API is running....')
})

app.use(notFound)
app.use(errorHandler)

app.listen(
	PORT,
	console.error(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
			.inverse
	)
)

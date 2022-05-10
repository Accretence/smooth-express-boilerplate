const asyncHandler = require('express-async-handler')
const colors = require('colors')
const url = require('url')
const path = require('path')

// @desc    Return a basic response
// @route   POST /api/route
// @access  Public
const getResponse = asyncHandler(async (req, res) => {
	try {
		res.json('Hello World!')
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getResponse,
}

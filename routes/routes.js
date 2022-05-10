const express = require('express')
const router = express.Router()
const { getResponse } = require('../controllers/controller.js')

router.route('/').get(getResponse)

module.exports = router

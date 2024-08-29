const express = require('express')
const router = express.Router()
const { getFilesData } = require('../controllers')

// routes
router.get('/files/data', getFilesData)

module.exports = router

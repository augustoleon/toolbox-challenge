const express = require('express')
const router = express.Router()
const { getFilesData, getFilesList } = require('../controllers')

// routes
router.get('/files/data', getFilesData)
router.get('/files/list', getFilesList)

module.exports = router

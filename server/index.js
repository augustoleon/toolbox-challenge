const express = require('express')
const app = express()
const cors = require('cors')

// Controller
const fileRouter = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/v1', fileRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

module.exports = app

const express = require('express')
const app = express()
const cors = require('cors')

// Controller
const fileRouter = require('./routes')

app.use(cors({
    origin: '*', // Permitir todas las solicitudes (no recomendado en producción)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/v1', fileRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

module.exports = app

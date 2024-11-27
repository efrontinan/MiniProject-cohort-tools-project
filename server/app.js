const express = require('express')
const logger = require('morgan')
const cors = require("cors")
const PORT = 5005

//Instancia de la app

require('./db')

const app = express()
app.use(
    cors(
        { origin: ['http://localhost:5173'] }
    )
)

// Configuración

app.use(logger('dev'))
app.use(express.json())

// Creación de endpoints

require('./routes')(app)

// const routesFunction = require('./routes')
// routesFunction(app)

// Levantamos el server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

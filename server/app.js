const express = require('express')
const logger = require('morgan')
const cors = require("cors")
const PORT = 5005
//Instancia de la app


const app = express()
app.use(
    cors(
        { origin: ['http://localhost:5005', 'http:/5005.com'] }
    )
)
// Configuración

app.use(logger('dev'))
app.use(express.json())

// Creación de endpoints

app.get('/api/cohorts', (req, res) => {

    const cohortsInfo = require('./cohorts.json')

    res.json(cohortsInfo)
})

app.get('/api/students', (req, res) => {

    const studentsInfo = require('./students.json')

    res.json(studentsInfo)
})


app.get('/*', (req, res) => {



    res.sendStatus(404)
})
// Levantamos el server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
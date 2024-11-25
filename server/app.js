const express = require('express')
const logger = require('morgan')

//Instancia de la app

const app = express()

// Configuración

app.use(logger('dev'))
app.use(express.json())

// Creación de endpoints

app.get('/api/cohorts', (req,res) => {
    
    const cohortsInfo = require('./cohorts.json')

    res.json(cohortsInfo)
})

app.get('/api/students', (req,res) => {
    
    const studentsInfo = require('./students.json')

    res.json(studentsInfo)
})

// Levantamos el server

app.listen (5005, () => console.log('Server running on port 5005'))
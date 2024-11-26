const express = require('express')
const logger = require('morgan')
const cors = require("cors")
const PORT = 5005
const Student = require('./models/student.model')
const Cohort = require('./models/cohort.model')
//Instancia de la app


const app = express()
app.use(
    cors(
        { origin: ['http://localhost:5173'] }
    )
)
require('./db')
// Configuración

app.use(logger('dev'))
app.use(express.json())

// Creación de endpoints

app.get('/api/cohorts', (req, res) => {

    Cohort
        .find()
        .then(cohorts => res.json(cohorts))
        .catch(err => console.log(err))


})

app.post('/api/cohorts', (req, res) => {


    const {
        inProgress,
        cohortSlug,
        cohortName,
        program,
        campus,
        startDate,
        endDate,
        programManager,
        leadTeacher,
        totalHours,
        format
    } = req.body

    Cohort
        .create({
            inProgress,
            cohortSlug,
            cohortName,
            program,
            campus,
            startDate,
            endDate,
            programManager,
            leadTeacher,
            totalHours,
            format
        })
        .then(createdCohort => res.json(createdCohort))
        .catch(err => console.log('empirismo es un error', err))
})


app.get('/api/cohorts/:cohortId', (req, res) => {

    const { cohortId } = req.params

    Cohort
        .findById(`${cohortId}`)
        .then(cohort => res.json(cohort))
        .catch(err => console.log(err))
})



app.delete('/api/cohorts/:cohortId', (req, res) => {

    const { cohortId } = req.params

    Cohort
        .findByIdAndDelete(`${cohortId}`)
        .then(removeCohort => res.json(removeCohort))
        .catch(err => console.log('hubo un problema:', err))
})


app.put('/api/cohorts/:cohortId', (req, res) => {

    const { cohortId } = req.params

    Cohort
        .findByIdAndUpdate(`${cohortId}`, req.body)
        .then(cohort => res.json(cohort))
        .catch(err => console.log('hubo un problema:', err))

})

app.get('/api/students', (req, res) => {

    Student
        .find()
        .then(students => res.json(students))
        .catch(err => console.log(err))
})


app.post('/api/students', (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        linkedinUrl,
        languages,
        program,
        background,
        image,
        cohort,
        projects
    } = req.body

    Student
        .create({
            firstName,
            lastName,
            email,
            phone,
            linkedinUrl,
            languages,
            program,
            background,
            image,
            cohort,
            projects
        })
        .then(createdStudent => res.json(createdStudent))
        .catch(err => console.log('empirismo es un error', err))
})



app.get('/api/students/:studentId', (req, res) => {

    const { studentId } = req.params

    Student
        .findById(`${studentId}`)
        .then(student => res.json(student))
        .catch(err => console.log(err))
})




app.delete('/api/students/:studentId', (req, res) => {

    const { studentId } = req.params

    Student
        .findByIdAndDelete(`${studentId}`)
        .then(removeStudent => res.json(removeStudent))
        .catch(err => console.log('hubo un problema:', err))

})

app.put('/api/students/:studentId', (req, res) => {

    const { studentId } = req.params

    Student
        .findByIdAndUpdate(`${studentId}`, req.body)
        .then(student => res.json(student))
        .catch(err => console.log('hubo un problema:', err))

})




app.get('/api/students/cohort/:cohortId', (req, res) => {

    const { cohortId } = req.params

    Student
        .find({ cohort: cohortId })
        .then(cohort => res.json(cohort))
        .catch(err => console.log(err))
})







app.get('/*', (req, res) => {



    res.sendStatus(404)
})
// Levantamos el server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const Cohort = require("../models/cohort.model") //aunque las rutas estén separadas, son necesarios en este caso los dos modelos porque para hacer el populate necesitamos el modelo.
const Student = require("../models/student.model")

module.exports = app => {

    //cohorts routes

    app.get('/api/cohorts', (req, res, next) => {

        Cohort
            .find()
            .then(cohorts => res.json(cohorts))
            .catch(err => {
                next(err)
            })

    })


    app.post('/api/cohorts', (req, res, next) => {

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
            .catch(err => {
                next(err)
            })

    })


    app.get('/api/cohorts/:cohortId', (req, res, next) => {

        const { cohortId } = req.params

        Cohort
            .findById(`${cohortId}`)
            .then(cohort => res.json(cohort))
            .catch(err => {
                next(err)
            })

    })


    app.delete('/api/cohorts/:cohortId', (req, res, next) => {

        const { cohortId } = req.params

        Cohort
            .findByIdAndDelete(`${cohortId}`)
            .then(removeCohort => res.json(removeCohort))
            .catch(err => {
                next(err)
            })

    })


    app.put('/api/cohorts/:cohortId', (req, res, next) => {

        const { cohortId } = req.params

        Cohort
            .findByIdAndUpdate(`${cohortId}`, req.body)
            .then(cohort => res.json(cohort))
            .catch(err => {
                next(err)
            })

    })

    //Students routes

    app.get('/api/students', (req, res, next) => {

        Student
            .find()
            .sort({ firstName: 1 })
            .select({ image: 1, program: 1, firstName: 1, email: 1, phone: 1 })
            .populate('cohort') //nombre del campo a popular
            .then(students => res.json(students))
            .catch(err => {
                next(err)
            })

    })


    app.post('/api/students', (req, res, next) => {
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
            .catch(err => {
                next(err)
            })
    })


    app.get('/api/students/:studentId', (req, res, next) => {

        const { studentId } = req.params

        Student
            .findById(studentId)
            .populate('cohort')
            .then(student => res.json(student))
            .catch(err => {
                next(err)
            })

    })


    app.delete('/api/students/:studentId', (req, res, next) => {

        const { studentId } = req.params

        Student
            .findByIdAndDelete(studentId)
            .then(removeStudent => res.json(removeStudent))
            .catch(err => {
                next(err)
            })

    })


    app.put('/api/students/:studentId', (req, res, next) => {

        const { studentId } = req.params

        Student
            .findByIdAndUpdate(studentId, req.body)
            .then(student => res.json(student))
            .catch(err => {
                next(err)
            })

    })


    app.get('/api/students/cohort/:cohortId', (req, res, next) => {

        const { cohortId } = req.params

        Student
            .find({ cohort: cohortId })
            .then(cohort => res.json(cohort))
            .catch(err => {
                next(err)
            })

    })

}
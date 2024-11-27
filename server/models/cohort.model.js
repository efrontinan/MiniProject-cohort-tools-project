const {Schema, model} = require(`mongoose`)

const cohortSchema = Schema({

    inProgress: Boolean,
    cohortSlug: String,
    cohortName: String,
    program: String,
    campus: String,
    startDate: Date,
    endDate: Date,
    programManager: String,
    leadTeacher: String,
    totalHours: Number,
    format: String

})

const Cohort = model('cohort', cohortSchema)

module.exports = Cohort
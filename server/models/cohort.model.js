const mongoose = require(`mongoose`)
const cohortSchema = mongoose.Schema({

    inProgress: Boolean,
    cohortSlug: String,
    cohortName: String,
    program: String,
    campus: String,
    startDate: String,
    endDate: String,
    programManager: String,
    leadTeacher: String,
    totalHours: Array

})
const Cohort = mongoose.model('cohort', cohortSchema)
module.exports = Cohort
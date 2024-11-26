const mongoose = require(`mongoose`)
const cohortSchema = mongoose.Schema({

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
const Cohort = mongoose.model('cohort', cohortSchema)
module.exports = Cohort
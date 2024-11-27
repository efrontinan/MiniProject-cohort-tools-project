const {Schema, model} = require('mongoose')

const studentSchema = Schema({

    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: Array,
    program: String,
    background: String,
    image: String,
    cohort: { type: mongoose.Schema.Types.ObjectId, ref: "cohort" },
    projects: Array
})

const Student = model('student', studentSchema)

module.exports = Student

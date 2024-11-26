const mongoose = require(`mongoose`)
const studentSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: Array,
    program: String,
    background: String,
    image: String,
    cohort: { type: mongoose.Schema.Types.ObjectId },
    projects: Array
})

const Student = mongoose.model('student', studentSchema)

module.exports = Student

const mongoose = require('mongoose')

const Salary = new mongoose.Schema({
    _id: String,
    title: {
        type: String,
        required: true,

    },
    salary: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        required: true,

    },
    skills: {
        type: String,
        required: true,

    }
}, {
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model("salary", Salary, "salary");
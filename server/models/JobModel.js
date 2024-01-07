const mongoose = require('mongoose')

const Job = new mongoose.Schema({
    _id: String,
    companyName:{
        type:String,
        required:[true,"Please provide the company Name"]
    },
    jobTitle:{
        type:String,
        required:[true,"Please provide the job Title "]
    },
    companyLogo:{
        type:String,
        required:[true,"Please provide the company Logo "]
    },
    minPrice:{
        type:String,
        required:[true,"Please provide the min Price "]
    },
    maxPrice:{
        type:String,
        required:[true,"Please provide the max Price "]
    },
    salaryType:{
        type:String,
        required:[true,"Please provide the salary Type "]
    },
    jobLocation:{
        type:String,
        required:[true,"Please provide the job Location  "]
    },
    postingDate:{
        type:String,
    },
    experienceLevel:{
        type:String,
        required:[true,"Please provide the experience Level "]
    },

    postingBy : {
        type:String,
        required:[true,"Please provide the posting  By "]
    },
    employmentType:{
        type:String,
    
    },
    description:{
        type:String
    },
    skills:Array

}, {
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
}
)

module.exports = mongoose.model("Jobs",Job,"jobs")
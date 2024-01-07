const JobModel = require('./JobModel')
const uuid = require('uuid')

async function findjobs(page = 1, pageSize = 10) {
    try {
        const skipJobs = (page - 1) * pageSize;

        const jobs = await JobModel.find()
            .skip(skipJobs)
            .limit(pageSize)
            .lean();

        return jobs;
    } catch (error) {
        console.error('Error in findJobs:', error);
        throw error;
    }
}

async function addJob(body) {
    try {
        const data = {
            _id: await uuid.v4().split('-')[0],
            ...body
        }
        return new JobModel(data).save()
    } catch (error) {
        throw error
    }
}


async function findJobsMyMail(email, page = 1, pageSize = 10) {
    try {
        const skipJobs = (page - 1) * pageSize;

        const jobs = await JobModel.find({ "postingBy": email })
            .skip(skipJobs)
            .limit(pageSize)
            .lean();

        return jobs;
    } catch (error) {
        console.error('Error in findJobs:', error);
        throw error;
    }
}

async function deleteJobById(id){
    try {
       return  await  JobModel.findByIdAndDelete({_id:id})
    } catch (error) {
        throw error 
    }
}

async function findJobsMyId(id) {
    try {
        return await  JobModel.findById({_id:id}).lean()
    } catch (error) {
        console.error('Error in findJobs:', error);
        throw error;
    }
}

async function updateJobDetails(id,data){
    try {
        return JobModel.findByIdAndUpdate({_id:id},{$set:{...data}})
    } catch (error) {
        console.error('Error in update Job:', error);
        throw error;
    }
}

module.exports = {
    findjobs,
    addJob,
    findJobsMyMail,
    deleteJobById,
    findJobsMyId,
    updateJobDetails
}
const { findjobs, addJob, findJobsMyMail, deleteJobById,findJobsMyId, updateJobDetails } = require('../models/Job')
const { validateJob } = require('../helper/validation')

const getAllJobs = async (req, res) => {
    try {
        const { page, limit } = req.query
        const result = await findjobs(page, limit)
        return res.status(200).json({ message: 'successfull', data: result })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong", error: error })
    }
}

const createJob = async (req, res) => {
    try {
        const body = req.body
        const validate = await validateJob(body)
        console.log("validate", validate);
        if (validate) {
            return res.status(400).json({ message: validate })
        }
        await addJob(body)
        return res.status(200).json({status:true, message: 'Job create successfull' })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong", error: error })
    }
}

const getJobByMail = async (req, res) => {
    try {
        const { email, page, limit } = req.query
        if (!email) {
            return res.status(400).json({ message: "Please Provide the email" })
        }
        const result = await findJobsMyMail(email, page, limit)
        const message = result.length ? "successfull" : "No data found "
        return res.status(200).json({ message: message, data: result })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong", error: error })
    }
}

const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = id !== undefined ? await findJobsMyId(id) : undefined;
        const message =  result && Object.keys(result).length !== 0 ? "Successful": "Please provide a valid job id or No data found";
        const status = result ? (Object.keys(result).length !== 0 ? 200 : 404) : 400;
        return res.status(status).json({ message: message, data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong", error: error });
    }
};



const deleteJobDetailsById = async (req, res) => {
    try {
        const { id } = req.query
        console.log("id",id);
        if(!id){
            return res.status(400).json({status:false,message:'Please provide the id'})
        }
        await deleteJobById(id)
        return res.status(200).json({status: true, message: 'Job Deleted successfull' })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong", error: error })
    }
}

const updateJobById =async (req,res)=>{
    try {
        const { id } = req.query
        const body=req.body
        const result = await updateJobDetails(id,body)
        return res.status(200).json({status: true, message: 'Job Details updated  successfull' ,data:result})
    } catch (error) {
        return res.status(500).json({ message: "something went wrong", error: error })
    }
}

module.exports = {
    getAllJobs,
    createJob,
    getJobByMail,
    deleteJobDetailsById,
    getJobById,
    updateJobById
}
const router = require('express').Router()
const {getAllJobs,createJob,getJobByMail, deleteJobDetailsById, getJobById,updateJobById} = require('../controllers/Jobs')


router.get('/',getAllJobs)
router.post('/addJob',createJob)
router.get('/getJobByMail',getJobByMail)
router.get('/getJobById/:id',getJobById)
router.delete('/deleteJobById',deleteJobDetailsById)
router.patch('/updateJobDetails',updateJobById)

module.exports = router
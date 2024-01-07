const  SalaryModel = require('./SalaryModel')
const uuid = require('uuid')


async function createSalary(data) {
    try {
        const body = {
            _id: await uuid.v4().split('-')[0],
            status: true,
            ...data
        }
        return await new SalaryModel(body).save()
    } catch (error) {
        console.log("error", error);
        throw error
    }
}

async function findSalary(page = 1, pageSize = 10) {
    try {
      const skipAmount = (page - 1) * pageSize;
  
      const salaries = await SalaryModel.find()
        .skip(skipAmount)
        .limit(pageSize)
        .lean();
  
      return salaries;
    } catch (error) {
      console.error('Error in findSalary:', error);
      throw error;
    }
  }
  

async function updateSalary(id, data) {
    try {
        return await SalaryModel.findOneAndUpdate({ _id:id }, { $set: { ...data }})
    } catch (error) {
        throw error
    }
}

module.exports = {
    createSalary,
    findSalary,
    updateSalary

}
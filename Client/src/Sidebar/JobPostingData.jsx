import React from 'react'
import InputField from '../Components/InputField'

function JobPostingData({handleChange}) {
    const now = new Date()
    let twentyFourHoursAgo= new Date(now-24 * 60 * 60 *1000)
    let sevenDaysAgo= new Date(now- 7 * 24 * 60 * 60 *1000)
    let thirtyDayssAgo= new Date(now- 30 * 24 * 60 * 60 *1000)

    //convert Date to String 
    twentyFourHoursAgo = twentyFourHoursAgo.toISOString().slice(0,10)
    sevenDaysAgo = sevenDaysAgo.toISOString().slice(0,10)
    thirtyDayssAgo = thirtyDayssAgo.toISOString().slice(0,10)

   
   
  return (
    <div>
    <h4 className='text-lg font-medium mb-2 '>Date Of posting</h4>
    <div>
        <label className='sidebar-label-container'>
            <input type='radio' name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span> All Time
        </label>
        <InputField handleChange={handleChange} value={twentyFourHoursAgo} title="Last 24 Hours" />
        <InputField handleChange={handleChange} value={sevenDaysAgo} title="Last 7 Days"  />
        <InputField handleChange={handleChange} value={thirtyDayssAgo} title="Last Month"  />

    </div>
</div>
  )
}

export default JobPostingData
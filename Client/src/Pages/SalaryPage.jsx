import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'

function SalaryPage() {
    const [searchText,setSearchText]= useState("")
    const [salary,setSalary] = useState([])
    useEffect(()=>{
        fetch("salary.json").then((res)=> res.json()).then((data)=> setSalary(data))
    },[searchText])
    const handleSearch = () => {
        const filter = salary.filter((job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
        console.log(filter);
        setSalary(filter)
        // setIsLoading(false)
    }
  return (
    <div className='max-w-screen-2x1  conatiner mx-auto x1:px-24 px-4'>
        <PageHeader title={"Estimate Salary"} path={"Salary"}/>
        <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
            <input type='text' name='search' id='search'  onChange ={(ele)=> setSearchText(ele.target.value)}className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'/>
            <button  onClick = {handleSearch} className='bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search </button>

        </div>
        </div>

        {/** */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
            {
                salary.map((data)=>(
                    <div className=' shadow px-4 py-8' key={data.id}>
                        <h4 className='font-semibold text-x1'>{data.title}</h4>
                        <p className='my-2 font-medium text-blue-800 text-lg'>{data.salary}</p>
                        <div className='flex flex-wrap gap-4'>
                            <a href='/' className='underline'>{data.status}</a>
                            <a href='/' className='underline'>{data.skills}</a>

                    </div>


                 </div>

                ))
            }
        </div>
    </div>
  )
}

export default SalaryPage
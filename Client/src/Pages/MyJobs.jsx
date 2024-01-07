import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MyJobs() {
    const email = "myMail@gmail.com"
    const [jobs, setJobs] = useState([])
    const [searchText, setSearchText] = useState("")
    const [isLoding, setIsLoading] = useState(true)
    const [currentPage, setIsCurrentPage] = useState(1)
    const itemPerPage = 6

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:4000/api/v1/jobs/getJobByMail?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json()).then((result) => {
                console.log("result", result.data)
                setJobs(result.data)

            }).catch((err) => {
                console.log("err", err)
                alert(err)
            })
        setIsLoading(false)
    }, [searchText])

    {/**Pagination */ }

    const indexOfLastItem = currentPage + itemPerPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const currentJobs = jobs.slice(indexOfFirstItem, indexOfFirstItem)


    // next and prev button 

    const nextPage = () => {
        if (indexOfLastItem < jobs.length) {
            setIsCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setIsCurrentPage(currentPage - 1)
        }
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/api/v1/jobs/deleteJobById?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json()).then((result) => {
                if (result.status === true) {
                    alert(result.message)
                }
                console.log(result)
            }).catch((err) => {
                console.log("err", err)
                alert(err)
            })
    }

    const handleSerach = () => {
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
        setJobs(filter)
        setIsLoading(false)
    }
    return (
        <div className='max-w-screen-2x1 container mx-auto x1:px-24 px-4'>
            <div className='my-jobs-conatiner'>
                <h1 className='text-center p-4'>My Jobs</h1>
                <div className='search-box p-2 text-center mb-2 '>
                    <input onChange={(e) => setSearchText(e.target.value)} type='text' name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
                    <button className='bg-blue-800 text-white font-semibold px-8 py-2 ml-1rounded-sm mb-4 ' onClick={handleSerach}>Search</button>
                </div>

            </div>
            {/** Table  Data*/}
            <section className="py-1 bg-blueGray-50">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">Page Visits</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="/post-job">
                                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post a new Job</button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            NO.
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            TITLE
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            COMPANY NAME
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            SALARY
                                        </th>

                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            EDIT
                                        </th>

                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            DELETE
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {isLoding ? (
                                        <tr>
                                            <td colSpan="6" className='flex items-center justify-center'>
                                                <p>Loading...</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        jobs.map((job, index) => (
                                            <tr key={index}>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                    {index + 1}
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    {job.jobTitle} {/* Replace 'someProperty' with the actual property of your job object */}
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {job.companyName} {/* Replace 'anotherProperty' with the actual property of your job object */}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {/* Add the appropriate property for salary */}
                                                    {job.salaryType}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                    46,53%
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <button><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <button onClick={() => handleDelete(job._id)} className='bg-red-700 py-2 px-6 text-white rounded-sm'>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>



                            </table>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center text-black-800 space-x-8 mb-8'>
                    {
                        currentPage > 1 && (<button className='hover:underline' onClick={prevPage}>Previous</button>)

                    }
                    {
                        indexOfLastItem < jobs.length && (<button className='hover:underline' onClick={nextPage}>Next</button>)

                    }

                </div>
            </section>
        </div>
    )
}

export default MyJobs
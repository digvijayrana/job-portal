import Banner from "../Components/Banner"
import { useEffect, useState } from "react"
import Card from "../Components/Card"
import Jobs from "./Jobs"
import Sidebar from "../Sidebar/Sidebar"
import NewsLetter from "../Components/NewsLetter"


function Home() {
    const [query, setQuery] = useState("")
    const [selectCategory, setSelectCategory] = useState("")
    const [jobs, setJobs] = useState([])
    const [isLoding, setIsLoading] = useState(true)
    const [currentPage, setIsCurrentPage] = useState(1)
    const itemPerPage = 6
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    useEffect(() => {
        setIsLoading(true)
        fetch("jobs.json").then((res) => res.json()).then((data) => setJobs(data))
        setIsLoading(false)
    }, [])

    //filter jobs by title 
    const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    // Radio base filtering 

    const handleChange = (event) => {
        setSelectCategory(event.target.value)
    }

    //button based filtering
    const handleClick = () => {
        setSelectCategory(event.target.value)
    }
    // main function 
    const filterdData = (jobs, selected, query) => {
        let filteredJob = jobs
        if (query) {
            filteredJob = filterItems
        }
        //category filter

        if (selected) {
            filteredJob = filteredJob.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => jobLocation.toLowerCase() === selected.toLowerCase() || experienceLevel.toLowerCase() === selected.toLowerCase() 
                || parseInt(maxPrice) <= parseInt(selected) || salaryType.toLowerCase() === selected.toLowerCase() || employmentType.toLowerCase() === selected.toLowerCase() || postingDate>= selected)
        }

        //slice the data based on current page
        const { startIndex, endIndex } = calculatePageRange()
        filteredJob = filteredJob.slice(startIndex, endIndex)
        return filteredJob.map((data, i) => <Card key={i} data={data} />)
    }

    //calculate the index

    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemPerPage
        const endIndex = startIndex + itemPerPage
        return { startIndex, endIndex }

    }

    //function for the next Page 
    const nextPage = () => {
        if (currentPage < Math.ceil(filterItems.length / itemPerPage)) {
            setIsCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setIsCurrentPage(currentPage - 1)
        }
    }

    const result = filterdData(jobs, selectCategory, query)

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange} />
            {/** Main content  */}
            <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
                {/* Left side */}
                <div className="bg-white p-4 rounded ">
                    <Sidebar handleChange={handleChange} handleClick={handleClick} />
                </div>
                {/*Job Cards */}

                <div className="col-span-2 bg-white p-4 rounded-sm">
                    {isLoding ? (<p className="font-medium">Loading...</p>) : result.length > 0 ? <Jobs result={result} /> : <>
                        <h3 className="text-lg font-black">{result.length} Jobs</h3>
                        <p>No Data found</p>
                    </>}
                    {/* define pagination */}
                    {
                        result.length > 0 ? (
                            <div className="flex justify-center mt-4 space-x-8">
                                <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline">Previous</button>
                                <span className="mx-2">Page {currentPage} of {Math.ceil(filterItems.length / itemPerPage)}</span>
                                <button
                                    onClick={nextPage}
                                    disabled={currentPage === Math.ceil(filterItems.length / itemPerPage)}
                                    className="hover:underline" > Next
                                </button>


                            </div>

                        ) : ""

                    }

                </div>
                {/* Right side */}
                <div className="bg-white p-4 rounded"> 
                <NewsLetter/>
                </div>

            </div>
        </div>
    )
}

export default Home
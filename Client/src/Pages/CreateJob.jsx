import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable'
import axios from 'axios'

function CreateJob() {

    const fecthOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectOption, setSelectOption] = useState(null)

    const onSubmit = (data) => {
        data.skills = selectOption
        fetch("http://localhost:4000/api/v1/jobs/addJob", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json()).then((result) => {
                console.log("result", result)
                if (result.status === true) {
                    alert('Job Posted successfull!!')
                    reset()
                }
            }).catch((err) => {
                console.log("err", err)
                alert(err)
            })
    }
    const options = [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'csharp', label: 'C#' },
        { value: 'php', label: 'PHP' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'swift', label: 'Swift' },
        { value: 'go', label: 'Go' },
        { value: 'kotlin', label: 'Kotlin' },
        { value: 'rust', label: 'Rust' },
        { value: 'scala', label: 'Scala' },
        // Add more languages as needed
    ];

    return (
        <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-4'>
            {/** Form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/** First Row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Job Title</label>
                            <input
                                type='text'
                                placeholder={'Web Developer'}
                                {...register('jobTitle')}
                                className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Company Name</label>
                            <input
                                type='text'
                                placeholder='Ex Microsoft'
                                {...register('companyName')}
                                className='create-job-input'
                            />
                        </div>
                    </div>
                    {/**Second Row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input
                                type='text'
                                placeholder='$20k'
                                {...register('minPrice')}
                                className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Maximum Salary</label>
                            <input
                                type='text'
                                placeholder='$80k'
                                {...register('maxPrice')}
                                className='create-job-input'
                            />
                        </div>
                    </div>
                    {/* Third Row*/}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>

                                <option value="female">Choose your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>

                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input
                                type='text'
                                placeholder='Ex: New York '
                                {...register('jobLocation')}
                                className='create-job-input'
                            />
                        </div>
                    </div>
                    {/** fourth Row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Job Posting Date</label>
                            <input
                                type='date'
                                placeholder='01/12/2023'
                                {...register('postingDate')}
                                className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience Level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>

                                <option value="female">Choose your Experience</option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>

                        </div>
                    </div>


                    {/** fifth Row */}
                    <div>
                        <label className='block mb-2 text-lg'>Required Skill Set</label>
                        <CreatableSelect defaultValue={selectOption} onChange={setSelectOption} options={options} isMulti className=' create-job-input py-4' />

                    </div>

                    {/**6th Row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'> Company Logo</label>
                            <input
                                type='url'
                                placeholder='post your company logo url: https:example.com'
                                {...register('companyLogo')}
                                className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employee Type</label>
                            <select {...register("experienceLevel")} className='create-job-input'>

                                <option value="female">Choose your Experience</option>
                                <option value="Full-Time">Full Time</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="Temporary">Temporary</option>
                            </select>

                        </div>
                    </div>

                    {/**7th row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                            defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
                            rows={6}
                            placeholder='Job Description'
                            {...register('description')} />
                    </div>

                    {/**Last Row */}
                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Posted</label>
                        <input
                            type='email'
                            placeholder='your email'
                            {...register('postingBy')}
                            className='create-job-input'
                        />
                    </div>

                    <input type='submit' className='block mt-12 bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
    );
}

export default CreateJob;

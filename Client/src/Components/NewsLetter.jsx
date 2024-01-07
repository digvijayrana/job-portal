import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

function NewsLetter() {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
                    <FaEnvelopeOpenText />  Email me for Jobs
                </h3>
                <p className='text-black text-base mb-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s
                </p>
                <div className='w-full flex flex-col items-center space-y-4'>
                    <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type='submit' value={'Subscribe'} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-800 rounded-sm text-white cursor-pointer font-semibold' />
                </div>

            </div>
            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
                    <FaRocket /> Get Noticed Faster
                </h3>
                <p className='text-black text-base mb-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s
                </p>
                <div className='w-full flex flex-col items-center space-y-4'>
                    <input type='submit' value={'Upload your resume'} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-800 rounded-sm text-white cursor-pointer font-semibold' />
                </div>

            </div>
        </div>
    )
}

export default NewsLetter
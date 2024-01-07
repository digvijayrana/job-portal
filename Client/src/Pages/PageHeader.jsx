import React from 'react'

function PageHeader(title,path) {
  return (
    <div className='py-24 mt-3 bg-white rounded flex items-center justify-center'>
        <div>
            <h1 className='text-3x1 text-blue-800 font-medium mb-1 text-center'>Estimate Salary</h1>
            <p className='text-sm text-center'><a href='/'>Home</a>/Estimate</p>
        </div>
    </div>
  )
}

export default PageHeader
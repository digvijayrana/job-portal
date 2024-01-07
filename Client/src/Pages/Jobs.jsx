import React from 'react'

export default function Jobs({ result }) {
    return (
        <>
            <div>
                <h3 className="text-lg font-black">{result.length} Jobs</h3>
                <section> {result}</section>
            </div>
        </>

    )
}

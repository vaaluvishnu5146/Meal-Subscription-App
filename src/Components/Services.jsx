import React from 'react'

function Services({ data = [] }) {
    return (
        <div className='container mb-5'>
            <h2 className='mb-5 text-center'>Why MyMealPlan?</h2>
            <div className='d-flex'>
                <div className='row container-fluid'>
                    {data.map((_d, index) => <div key={`${_d.title}-${index}`} className='col-md-4 col-lg-2 col-sm-6'>
                        <div className='card reason-card'>
                            <div className='card-body d-flex flex-column align-items-center'>
                                <img className="mb-3" src={_d.image} />
                                <p className="text-center">{_d.title}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Services;
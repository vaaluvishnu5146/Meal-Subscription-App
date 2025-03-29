import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Subscriptions({ data = [] }) {
    const navigate = useNavigate();
    return (
        <div className='container mb-5'>
            <h2 className='mb-5 text-center'>Our Affordable Subscriptions</h2>
            <div className='row'>
                {
                    data.map((_d, index) =>
                        <div key={`${_d.title}-${index}`} className='col-lg-4'>
                            <div className='card subscription-card'>
                                <div className='overlay'>
                                    <div className='card-body'>
                                        <h3>{_d.title}</h3>
                                        <p className='mb-3'>{_d.description}</p>
                                        <button className="btn btn-success" onClick={() => navigate(`/subscriptions/${_d.id}`)}>Know more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

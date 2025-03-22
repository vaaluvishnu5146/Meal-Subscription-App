import React from 'react'

export default function Hero() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-sm-12'>
                    <img className='mealbox-image' src='./mealbox.png' />
                </div>
                <div className='col-xl-6 col-lg-6 col-sm-12'>
                    <div class="mealbox-content d-flex flex-column justify-content-center">
                        <h1 className='mealbox-message mb-3 text-success'>Order once! <br /><span className='text-dark fs-3'>Get it delivered every single day...</span></h1>
                        <p className='mb-3'>Right from vegetarian to Non-vegetarian. Either chinese or japanese or Korean or Punjabi or Chettinad we serve your meal on any cuisine with delicacy.</p>
                        <button className='btn btn-success btn-lg'>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

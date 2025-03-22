import React from 'react'

export default function AppAd() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h2>Download App Now!</h2>
                    <p>Get 30% OFF on First Subscription</p>
                </div>
                <div className='col-md-6'>
                    <img src='./appstore.jpg' style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

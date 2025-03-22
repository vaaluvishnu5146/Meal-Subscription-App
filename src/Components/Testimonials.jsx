import React from 'react'
import Slider from 'react-slick';
import Ratings from './Ratings';

export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div className='container mb-5'>
      <h2 className='mb-5 text-center'>What our customer Feel!</h2>
      <div>
        <Slider {...settings}>
          <div className='d-flex flex-column align-items-center'>
            <Ratings />
            <p className='text-center mt-3 mb-3'>Good One</p>
            <h4>Vishnu</h4>
            <p><em>Customer</em></p>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <Ratings />
            <p className='text-center mt-3 mb-3'>Good Two</p>
            <h4>Tharun</h4>
            <p><em>Customer</em></p>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <Ratings />
            <p className='text-center mt-3 mb-3'>Good Three</p>
            <h4>Muhammed</h4>
            <p><em>Customer</em></p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

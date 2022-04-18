import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
  return (
    <div className='banner'>
      <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-black'>University Application Process</h3>
          <p > You get a rational, insightful, fact-driven approach so that you can achieve your educational and career aspirations.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='text-black'>
            Credits, academic matters, and eligibility..</h3>
          <p >When it's about academic matters we ensure quality and eligibility for selection into universities. We will help you decide about course selection and how many credits to take.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-black'>Get the correct information </h3>
          <p >You will avail precise information about permits for working while studying and compare opportunities at multiple universities and regions. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;
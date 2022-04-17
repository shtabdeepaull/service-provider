import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
    return (
        <Carousel fade >
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-black'>First slide label</h3>
            <p className='text-black'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 h-25"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='text-black'>Second slide label</h3>
            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={banner3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 className='text-black'>Third slide label</h3>
            <p className='text-black'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;
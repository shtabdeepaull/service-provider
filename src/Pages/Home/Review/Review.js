import React from 'react';
import './Review.css';

const Review = ({review}) => {

    const {name, picture, description} =review;
     return (
        <div className='review mt-2 shadow-lg'>
            <img className='mt-2'  src={picture} alt="" />
            <p className='mt-2'>Name:{name}</p>
            <div className='review-icon'>
            <p><i className="fa-solid fa-star"></i></p>
            <p><i className="fa-solid fa-star"></i></p>
            <p><i className="fa-solid fa-star"></i></p>
            <p><i className="fa-solid fa-star-half-stroke"></i></p>
            </div>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Review;
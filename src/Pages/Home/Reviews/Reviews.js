import React, { useEffect, useState } from 'react';
import Review from '../../Home/Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('person.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div id='reviews' className='reviews'>
           <h2 className='text-center mt-4'>Reviews</h2> 
          <div className='review-container'>
          {
               reviews.map(review => <Review
               key={review._id}
               review={review}
               ></Review>)
           }
          </div>
        </div>
    );
};

export default Reviews;

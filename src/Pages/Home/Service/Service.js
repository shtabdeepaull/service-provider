import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, picture, description, price} =service
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>
                {
                    description.length > 150 ? description.slice(0,150)+'...':description
                }
                </small></p>
            <button className='btn btn-dark'>Book Now</button>
        </div>
    );
};

export default Service;
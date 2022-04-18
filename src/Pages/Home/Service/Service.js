import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, picture, description, price} =service;
    const navigate = useNavigate()
    const navigateToCheckOut = id =>{
        navigate(`/service/${id}`)
    }
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
            <button onClick={() => navigateToCheckOut(_id)} className='btn btn-dark'>Book Now</button>
        </div>
    );
};

export default Service;
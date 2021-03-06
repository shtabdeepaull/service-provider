import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] =useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div id='services' className='mt-4'>
            <h1 className='services-title'>Services</h1>
           <div className='services-container'>
           {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;
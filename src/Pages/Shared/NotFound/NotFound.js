import React from 'react';
import './NotFound.css';
import picture from '../../../images/404picture.png';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img  src={picture} alt="" />
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const handleSubmit = () =>{
        toast("Thanks For The Booking")
    }
    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }}>Your Information</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your Email' required />
            <input type="text" name="address" id="" placeholder='Your Address' required />
            <input type="text" name="phone" id="" placeholder='Your Phone Number' required />
            <input
                className='w-50 mx-auto btn btn-primary mt-2'
                type="submit"
                value="Submit" />
        </form>
        <p>Already have an Account?? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link></p>
        <ToastContainer/>
        </div>
    );
};

export default CheckOut;
import React from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Your Password'required/>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Terms and Conditions </label>
                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="register" />
            </form>
            <p>Already have an Account?? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

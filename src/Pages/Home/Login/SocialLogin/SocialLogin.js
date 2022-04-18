import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        
         errorElement= <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
         
    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <i className="fa-brands fa-google px-2"></i>
                    Google Sign In
                </button>
                <button
                onClick={() => signInWithGithub()}
                    className='btn btn-primary w-50 d-block mx-auto'>
                    <i class="fa-brands fa-github px-2"></i>
                    Sign In With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
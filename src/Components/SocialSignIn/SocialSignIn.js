import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../Images/Google.png'
import './SocialSignIn.css'

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/')
    }

    let errorElement
    if (error) {
        errorElement = <p style={{ fontSize: '10px', color: 'red' }} className='d-flex justify-content-center'>Error: {error.message}</p>
    }
    if (loading) {
        return <p className='text-center text-warning'>Loading...</p>;
    }
    return (
        <div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center'>
                <button className=' border-0 bg-white fw-bolder' onClick={() => signInWithGoogle()}><img src={google} alt="" />Google Sign IN</button>
            </div >
        </div>
    );
};

export default SocialSignIn;
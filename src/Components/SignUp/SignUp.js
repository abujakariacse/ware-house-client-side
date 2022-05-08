import React, { useState } from 'react';
import './SignUp.css'
import sign from '../../Images/login.webp'
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setCPassword(event.target.value)
    }
    const handleSignUp = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password, cPassword)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <p className='text-center text-warning'>Loading...</p>;
    }
    let errorElement
    if (error) {
        errorElement = <p style={{ fontSize: '10px', color: 'red' }} className='d-flex justify-content-center'>Error: {error.message}</p>
    }
    return (
        <div className='container login-con'>
            <div className="row">
                <div className="col-lg-6">
                    <img className='login-img' src={sign} alt="" />
                </div>
                <div className="col-lg-6 sign-doc">
                    <form onSubmit={handleSignUp} className='login-container'>
                        <div className='login mt-5 p-3 shadow'>
                            <h3 className='text-center mt-3'>Sign UP</h3>
                            <div className='d-flex justify-content-center flex-column line mt-4'>
                                <label htmlFor="email">Email</label> <br />
                                <input onBlur={handleEmail} type="email" name="" id="1" required />
                            </div>
                            <div className='d-flex justify-content-center flex-column line mt-4'>
                                <label htmlFor="password">Password</label> <br />
                                <input onBlur={handlePassword} type="password" name="" id="2" required />
                            </div>
                            <div className='d-flex justify-content-center flex-column line mt-4'>
                                <label htmlFor="confirm-password">Confirm Password</label> <br />
                                <input onBlur={handleConfirmPassword} type="password" name="" id="3" required />
                            </div>
                            <input className='container border-0 mt-4 btn-primary' type="submit" value="Sign Up" />
                            <div className='d-flex justify-content-center font mt-2'>
                                <small className='fw-bold'>Already have an account ?</small><CustomLink className='link-color ms-2 fw-bold' to='/login'>Login</CustomLink>
                            </div>
                            {errorElement}
                            <div className='d-flex justify-content-around'>
                                <hr />
                                <span>or</span>
                                <hr />
                            </div>
                            <SocialSignIn></SocialSignIn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
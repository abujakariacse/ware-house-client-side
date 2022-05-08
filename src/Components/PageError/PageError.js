import React from 'react';
import './PageError.css'
import pageError from '../../Images/p-404.webp'
const PageError = () => {
    return (
        <div className='pageError'>
            <img className='img-fluid' src={pageError} alt="" />
        </div>
    );
};

export default PageError;
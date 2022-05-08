import React from 'react';
import pic1 from '../../Images/pic-1.png'
import pic2 from '../../Images/pic-3.png'
import pic3 from '../../Images/pic-4.png'
import './Review.css'

const Review = () => {
    return (
        <div className='mb-5'>
            <div className='container'>
                <h3 className='text-center text-success'>Client Says</h3>
                <div className='container row mt-5'>
                    <div className="col-lg-4 ">
                        <div className="card color1 shadow mb-5 bg-white rounded h-70">
                            <div>
                                <p className='text-center fw-bold'><i className="fa-solid fa-quote-left"></i> All fruits are very fresh and juicy. <i className="fa-solid fa-quote-right"></i></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className='rounded-circle' src={pic1} alt="" />
                            </div>
                            <h6 className='text-center text-success'>Flowers Tyson</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="card color2 shadow mb-5 bg-white rounded h-70">
                            <div>
                                <p className='text-center fw-bold'><i className="fa-solid fa-quote-left"></i> This warehouse fruits are very fresh and well.. <i className="fa-solid fa-quote-right"></i></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className='rounded-circle' src={pic3} alt="" />
                            </div>
                            <h6 className='text-center text-success'>Joy Medina</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="card color shadow mb-5 bg-white rounded h-70">
                            <div>
                                <p className='text-center fw-bold'><i className="fa-solid fa-quote-left"></i> This warehouse fruits are awesome and juicy ...<i className="fa-solid fa-quote-right"></i></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className='rounded-circle' src={pic2} alt="" />
                            </div>
                            <h6 className='text-center text-success'>Tammie Ortiz</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Review;
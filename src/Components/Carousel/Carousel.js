import React from 'react';
import './Carousel.css'
import banner1 from '../../Images/Banner1.png';
import banner2 from '../../Images/Banner2.png';
import banner3 from '../../Images/Banner3.webp';

const Carousel = () => {
    return (
        <div>
            <section className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row align-items-center p-5 carousel-back">
                                <div className="col-lg-4">
                                    <h1 className='carousel-font'><span className='font-color'>100%</span> Fresh Fruits Dear</h1>
                                    <p>This is the best Fruits Warehouse Dear.100% authentic and Fresh fruits dear.</p>
                                </div>
                                <div className="col-lg-7">
                                    <img src={banner1} className=" w-100 banner1" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center p-5 carousel-back">
                                <div className="col-lg-5">
                                    <h1 className='carousel-font'><span className='font-color'>100% Authentic</span> warehouse Baby</h1>
                                    <p>Maintains Hygienic Packaging , Storage and Home Delivery.</p>
                                </div>
                                <div className="col-lg-7">
                                    <img src={banner2} className="w-100 banner2" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center p-5 carousel-back">
                                <div className="col-lg-5">
                                    <h1 className='carousel-font'><span className='font-color'>Fresh Fruits</span> directly to your door</h1>
                                    <p>Top-quality fresh Fruits. Properly packed.and free delivery dear..</p>
                                </div>
                                <div className="col-lg-7">
                                    <img src={banner3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Carousel;
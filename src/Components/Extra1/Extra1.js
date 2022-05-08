import React from 'react';
import './Extra1.css'
import all from '../../Images/All-Fruits.png'
import juicy from '../../Images/Juicy-Fruits.png'
import beauty from '../../Images/Beauty-Fruits.png'


const Extra1 = () => {
    return (
        <div className="container mt-5">
            <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                    <div className="d-flex p-2 justify-content-between align-items-center color">
                        <h2>All Fruits Collection</h2>
                        <img className='img-fluid' src={all} alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="d-flex p-2 justify-content-between align-items-center color1">
                        <h2>Juicy Fruits Collection</h2>
                        <img className='img-fluid' src={juicy} alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="d-flex p-2 justify-content-between align-items-center color2">
                        <h2>Beauty Fruits</h2>
                        <img className='img-fluid' src={beauty} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extra1;
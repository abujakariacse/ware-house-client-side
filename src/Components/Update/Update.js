import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Update.css'

const Update = () => {
    const { inventoryId } = useParams();
    const [Items, setItems] = useState({});

    useEffect(() => {
        const url = `https://ancient-oasis-24969.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));

    }, [Items])

    const handleFruitsUpdate = (e) => {
        e.preventDefault()
        const quantity = parseInt(e.target.quantity.value) + parseInt(Items.quantity)
        const updateFruits = { quantity }

        const url = `https://ancient-oasis-24969.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFruits)
        })
            .then(res => res.json())
            .then(result => {
                console.log("success", result);
                alert('Quantity Update Successful');
                e.target.reset();
            })
    }

    const handleDeliver = id => {
        const quantityUpdate = Items?.quantity
        const updateQuantity = { quantityUpdate }
        fetch(`https://ancient-oasis-24969.herokuapp.com/items/deliver/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })
    }


    return (
        <div>
            <div className="row">
                <div className="col-lg-6 update">
                    <Card className='update-container'>
                        <div>
                            <Card.Img variant="white img-fluid" src={Items.img} />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-success'>*{Items.name}*</Card.Title>
                            <h6><span className='fw-bold'>Price:</span> ${Items.price}</h6>
                            <p>{Items.description}</p>
                            <div className='line'>
                                <p><span className='fw-bold'>Quantity/In-Stock:</span><span className='text-danger fw-bold'> {Items.quantity} KG</span></p>
                                <p><span className='fw-bold'>Color:</span> {Items.Color}</p>
                                <p><span className='fw-bold'>SupplierName:</span> {Items.supplierName}</p>
                                <p><span className='fw-bold'>Gender:</span> {Items.gender}</p>
                                <p><span className='fw-bold'>Email: </span> {Items.email}</p>
                                <p><span className='fw-bold'>Phone: </span> {Items.phone}</p>
                                <p><span className='fw-bold'>Address: </span> {Items.address}</p>
                                <p><span className='fw-bold'>Date: </span>{Items.registered}</p>
                                <p><span className='fw-bold'>Time: </span>{Items.Time}</p>
                            </div>
                        </Card.Body>

                        {
                            Items.quantity === 0 ?
                                <button className='btn-danger border-0 text-white p-2'>sold out</button>
                                :
                                <button onClick={() => handleDeliver(inventoryId)} className='border-0 p-2 btn-primary'>Delivered</button>
                        }


                    </Card>
                </div>


                <div className='col-lg-6 update mt-3'>
                    <h3 className='text-success'>Restock The Items Bro/Baby</h3>
                    <h4 className='text-success'>Name: {Items.name}</h4>
                    <form onSubmit={handleFruitsUpdate} className='d-flex flex-column'>
                        <label className='fw-bold' htmlFor="quantity">Stock*</label>
                        <input type="number" name="quantity" id="" required /> <br />
                        <input className='border-0 btn-primary' type="submit" value="increase" />
                    </form>
                </div>
            </div >
            <div className='mb-5 d-flex justify-content-center align-items-center'>
                <CustomLink to='/inventory'><button className='login-btn'>Inventory Page</button></CustomLink>
            </div>
        </div >
    );
};

export default Update;
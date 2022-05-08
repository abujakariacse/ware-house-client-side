import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InItems.css'

const InItems = ({ item, handleDelete }) => {
    const { name, price, description, img, _id, quantity, supplierName } = item
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div>
            <CardGroup className='shadow p-1 mb-5 bg-body rounded'>
                <Card>
                    <div>
                        <Card.Img variant="white img-fluid" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h6>Price: ${price}</h6>
                        <p>{description}</p>
                        <p><span className='fw-bold'>Quantity/In-Stock:</span> <span className='text-danger fw-bold'> {quantity} KG</span></p>
                        <p><span className='fw-bold'>SupplierName:</span> {supplierName}</p>
                    </Card.Body>
                    <div className='d-flex justify-content-between card-footer'>
                        <button onClick={() => handleDetails(_id)} className='border-0 btn-primary update-btn rounded'>Update</button>
                        <button onClick={() => handleDelete(_id)} className='border-0 btn-danger delete-btn rounded'>Delete</button>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default InItems;
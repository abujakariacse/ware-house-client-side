import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './MyItem.css'

const MyItem = ({ myItem, handleItemDelete }) => {
    const { email, name, price, description, img, quantity, supplierName, _id } = myItem
    return (
        <div>
            <CardGroup className='shadow p-1 mb-5 bg-body rounded'>
                <Card>
                    <div>
                        <Card.Img variant="white img-fluid" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <h6>UserEmail: {email}</h6>
                        <h6>Price: ${price}</h6>
                        <p>{description}</p>
                        <p><span className='fw-bold'>Quantity/In-Stock:</span> <span className='text-danger fw-bold'> {quantity} KG</span></p>
                        <p><span className='fw-bold'>SupplierName:</span> {supplierName}</p>
                    </Card.Body>
                    <button onClick={() => handleItemDelete(_id)} className='border-0 btn-dark p-2'>Delete</button>
                </Card>
            </CardGroup>
        </div >
    );
};

export default MyItem;
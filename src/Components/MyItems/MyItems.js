import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axiosPrivate from '../api/axiosPrivate';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://ancient-oasis-24969.herokuapp.com/myItems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getItems();

    }, [user])

    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://ancient-oasis-24969.herokuapp.com/myItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    return (
        <div className='inn-margin container'>
            <h2 className='text-center text-primary'>My Items</h2>
            <div className='grid mt-5'>
                {
                    myItems.map(myItem => <MyItem
                        key={myItem._id}
                        myItem={myItem}
                        handleItemDelete={handleItemDelete}
                    ></MyItem>)
                }
            </div>
        </div >
    );
};

export default MyItems;
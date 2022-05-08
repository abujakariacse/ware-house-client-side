import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mb-5'>
            <div className='jwt'>
                <h2 className='text-center mt-5 text-danger'>Question and Answer</h2>
            </div>
            <div className='container mt-5'>
                <h4>1. Difference between JavaScript and Nodejs .?</h4>
                <div className='row mt-5'>
                    <div className='col-lg-6 shadow p-2 mb-5 bg-white rounded'>
                        <h5 className='text-center'>JavaScript</h5>
                        <p>1. Javascript is a programming language that is used for writing scripts on the website. </p>
                        <p>2. Javascript can only be run in the browsers.</p>
                        <p>3. It is basically used on the client-side.</p>
                    </div>
                    <div className="col-lg-6 shadow p-2 mb-5 bg-white rounded">
                        <h5 className='text-center'>Nodejs</h5>
                        <p>1. NodeJS is a Javascript runtime environment.</p>
                        <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p>3. It is mostly used on the server-side.</p>
                    </div>
                </div>
            </div>
            <div className='container mt-5 shadow p-3 mb-5 bg-white rounded'>
                <h4>2.Differences between SQL and NoSQL databases .?</h4>
                <div className='row mt-5'>
                    <div className='col-lg-6 '>
                        <h5 className='text-center'>SQL</h5>
                        <p>1. Relational database management system</p>
                        <p>2. These databases have fixed or static or predefined schema</p>
                        <p>3. These databases are not suited for hierarchical data storage.</p>
                    </div>
                    <div className="col-lg-6 ">
                        <h5 className='text-center'>NoSQL</h5>
                        <p>1. Non-relational or distributed database system.</p>
                        <p>2. They have dynamic schema</p>
                        <p>3. These databases are best suited for hierarchical data storage.</p>
                    </div>
                </div>
            </div>
            <div className='container mt-5 d-flex justify-content-center align-items-center flex-column shadow p-3 mb-5 bg-white rounded'>
                <h4>3. What is the purpose of jwt and how does it work .?</h4>
                <div className='mt-5 w-50'>
                    <p>JWT (JSON Web Token) is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
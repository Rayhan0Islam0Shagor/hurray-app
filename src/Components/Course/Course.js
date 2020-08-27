import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Course.css';


const Course = (props) => {
    const { name, img, instructor, price, id, oldPrice, description } = props.product;

    return (
        <div className="product d-flex m-2 p-4">
            <div>
                <img className="img" src={img} alt="" />
            </div>
            <div className="ml-4 w-50">
                <h3 className="font-weight-bold">{name}</h3>
                <small><strong>Create By: {instructor}</strong></small><br />
                <p><strong>{description.substring(40, 0) + '...'}</strong></p>
                <h5 className="mt-3"><strong>Price: ${price} <small><strike className="text-dark"> ${oldPrice}</strike></small></strong></h5>
            </div>
            <div className="mt-5">
                <button
                    onClick={() => props.handleAddProduct(id)} className="btn btn-danger mt-5 ml-5">
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Course;
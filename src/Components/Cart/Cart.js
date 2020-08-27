import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + Number(product.price), 0);

    return (
        <div className="cart">
            <h2 className="bg-dark mt-4 text-light">Dashboard</h2>
            <h5 className="mt-3 text-center">Your Course: {cart.length}</h5>
            {
                cart.map(data =>
                    <div key={data.id}>
                        <p className="p-2">
                            <small className="mr-4">{data.name.substring(7, 0) + '...'}</small>
                            <small className="ml-5">${data.price}</small>
                        </p>
                    </div>)
            }
            <h6 className="p-3 mb-2 bg-success text-center text-body">Checkout <small className="bg-light taka">${totalPrice.toFixed(2)}</small></h6>
        </div>
    );
};

export default Cart;
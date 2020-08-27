import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Home.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';



const Home = () => {
    const first15 = fakeData.slice(0, 15);
    const [course, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (id) => {
        const newCart = fakeData.find(item => item.id === id);
        const newCourse = [...cart, newCart];
        setCart(newCourse);
    }

    return (
        <div className="container-fluid d-flex mt-5">
            <div className="product-container w-75 ml-5">
                {
                    course.map(course => <Course handleAddProduct={handleAddProduct} key={course.id} product={course}></Course>)
                }
            </div>
            <div className="cart-container ml-lg-4">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;
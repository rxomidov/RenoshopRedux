import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Hello from home page</h1>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    );
};

export default Homepage;
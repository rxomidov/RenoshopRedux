import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/Renoshopbee.svg";

const Homepage = () => {
    return (
        <div>
            <h1>Hello from home page</h1>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img  className="h-16 w-12" src={logo} alt="logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-red-100">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>Header Component</div>
            <ul>
                <div className="header-middle-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/laptop">Laptop</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/desktop">Desktop</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/phone">Phone</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/accessories">Accessories</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Header;
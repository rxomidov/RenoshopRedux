import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, emptyCart} from "../../redux/Cart/CartActions";

const CartPage = () => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    console.log(cartItems)

    const RemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    };

    if (cartItems.cartItems.length === 0) {
        return (
            <div>
                <h1>Cart Empty</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Cart page</h1>
            <div>
                <h3>Products finally there</h3>
                {cartItems.cartItems.map((cartItem, index) => {
                    return (
                        <div key={index} style={{display: "flex"}}
                            //onClick={()=>AddToCart(product)}
                        >
                            <div>{cartItem.title}</div>
                            <button onClick={() => RemoveFromCart(cartItem.id)}>Remove</button>
                        </div>
                    )
                })}
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
        </div>
    );
};

export default CartPage;
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, emptyCart} from "../../redux/Cart/CartActions";

const WishListPage = () => {
    const wishItems = useSelector(state => state.wishItems);
    const dispatch = useDispatch();
    console.log(wishItems)

    const RemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    };

    if (wishItems.wishItems.length === 0) {
        return (
            <div>
                <h1>Wishlist Empty</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Wishlist page</h1>
            <div>
                <h3>Products finally there</h3>
                {wishItems.wishItems.map((cartItem, index) => {
                    return (
                        <div key={index} style={{display: "flex"}}
                            //onClick={()=>AddToCart(product)}
                        >
                            <div>{cartItem.title}- &#36;{cartItem.price}</div>
                            <button onClick={() => RemoveFromCart(wishItems.id)}>Remove</button>
                        </div>
                    )
                })}
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
        </div>
    );
};

export default React.memo(WishListPage);
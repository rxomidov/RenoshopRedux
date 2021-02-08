import React from 'react';
import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../redux/Products/ProductActions";
import {addToCart} from "../../redux/Cart/CartActions";

function Products(props) {
    const history = useHistory();

    const products = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getProducts())
    }, []);

    const AddToCart = (product) => {
        const existingItem = cartItems.cartItems.find(cartItem => cartItem.id === product.id);
        //console.log(existingItem, "exist");
        if (existingItem){
            history.push("/cart");
            alert("This item is already exist!");
        } else {
            dispatch(addToCart(product));
        }
        history.push("/cart");
    };

    console.log(products);
    if (products.loading === true) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <h3>Products finally there</h3>
            {products.products.map((product, index) => {
                return (
                    <div key={index}
                         onClick={()=>AddToCart(product)}
                    >
                        <div>{product.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;
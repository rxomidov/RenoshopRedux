import React from 'react';
import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../redux/Products/ProductActions";
import {addToCart} from "../../redux/Cart/CartActions";
import {addToWishList} from "../../redux/WishList/WishListActions";

function Products(props) {
    const history = useHistory();

    const products = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cartItems);
    const wishItems = useSelector(state => state.wishItems);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getProducts())
    }, []);

    const AddToCart = (product) => {
        const existingItem = cartItems.cartItems.find(cartItem => cartItem.id === product.id);
        //console.log(existingItem, "exist");
        if (existingItem) {
            history.push("/cart");
            alert("This item is already exist!");
        } else {
            dispatch(addToCart(product));
        }
        history.push("/cart");
    };

    const AddToWishList = (product) => {
        const existingItem = wishItems.wishItems.find(wishItem => wishItem.id === product.id);
        //console.log(existingItem, "exist");
        if (existingItem) {
            history.push("/wishlist");
            alert("This item is already exist!");
        } else {
            dispatch(addToWishList(product));
        }
        history.push("/wishlist");
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
            <div className="container mx-auto px-32">
                <h3>Products finally there</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.products.map((product, index) => {
                        return (
                            <div
                                className="p-6 w-full h-full mx-auto bg-white rounded-xl shadow-md flex flex-col items-center justify-between"
                                key={index}
                            >
                                <div className="h-1/2 w-full overflow-hidden hover:bg-gray-100">
                                    <img className="h-72 transform hover:scale-110 transition-all mx-auto"
                                         src={product.image} alt={product.title}/>
                                </div>
                                <div className="text-center z-10">{product.title.slice(0,32)}</div>
                                <div className="bg-purple-100">
                                    <button onClick={() => AddToCart(product)}
                                            className="rounded-full py-1 px-6 ring ring-purple-600 ring-offset-4 ring-offset-purple-100 text-lg text-blue-600">
                                        Add to cart
                                    </button>
                                    <button onClick={() => AddToWishList(product)}
                                            className="rounded-full py-1 px-6 ring ring-purple-600 ring-offset-4 ring-offset-purple-100 text-lg text-blue-600">
                                        Add to wishlist
                                    </button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products;
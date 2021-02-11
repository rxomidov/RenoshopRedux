import {combineReducers} from "redux";

import PostReducer from "./Posts/PostReducer";
import ProductReducer from "./Products/ProductReducer"
import CartReducer from "./Cart/CartReducer";
import WishListReducer from "./WishList/WishListReducer";

export const rootReducer = combineReducers({
    posts: PostReducer,
    products: ProductReducer,
    cartItems: CartReducer,
    wishItems: WishListReducer,
});
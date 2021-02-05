import {combineReducers} from "redux";

import PostReducer from "./Posts/PostReducer";
import ProductReducer from "./Products/ProductReducer"

export const rootReducer = combineReducers({
    posts: PostReducer,
    products: ProductReducer
});
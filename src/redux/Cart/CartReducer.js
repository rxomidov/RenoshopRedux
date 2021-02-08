import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, EMPTY_CART} from "./CartActions";

const initialState = {
    cartItems: [],
};
export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
                //     state.cartItems.map(cartItem =>
                //     cartItem.id !== action.payload.id
                //     ? [...state.cartItems, action.payload] : cartItem,
                // ),
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.id ),
            };
        case ADD_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(product =>
                    product.id === action.id
                        ? {...product, quantity: product.quantity + 1}
                        : product,
                ),
            };
        case SUB_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            };
        case EMPTY_CART:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};
import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, ADD_QUANTITY, SUB_QUANTITY, EMPTY_WISH_LIST} from "./WishListActions";

const initialState = {
    wishItems: [],
};
export default function WishListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_WISH_LIST:
            return {
                ...state,
                wishItems: [...state.wishItems, action.payload]
                //     state.cartItems.map(cartItem =>
                //     cartItem.id !== action.payload.id
                //     ? [...state.cartItems, action.payload] : cartItem,
                // ),
            };
        case REMOVE_FROM_WISH_LIST:
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
        case EMPTY_WISH_LIST:
            return {
                ...state,
                wishItems: []
            };
        default:
            return state;
    }
};
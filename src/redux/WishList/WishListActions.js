export const ADD_TO_WISH_LIST = 'ADD_TO_CART';
export const REMOVE_FROM_WISH_LIST  = 'REMOVE_FROM_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const EMPTY_WISH_LIST  = 'EMPTY_CART';

export const addToWishList = product => {
    console.log(product);
    return {
        type: ADD_TO_WISH_LIST,
        payload: product,
    };
};
export const removeFromWishList = id => {
    return {
        type: REMOVE_FROM_WISH_LIST,
        id,
    };
};
export const subtractQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
export const addQuantity = id => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};
export const emptyWishList = () => {
    return {
        type: EMPTY_WISH_LIST,
    };
};
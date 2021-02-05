export const SET_LOADING = "FETCH_POSTS";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const setLoading = () => {
    return { type: SET_LOADING };
};
export const getProducts = () => {
    return async function(dispatch) {
        dispatch(setLoading());
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );
        const data = await response.json();
        dispatch({ type: GET_PRODUCTS, payload: data });
    };
};
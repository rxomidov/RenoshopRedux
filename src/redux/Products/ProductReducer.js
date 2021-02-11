import {SET_LOADING, GET_PRODUCTS} from "./ProductActions";

const defaultState = {
    loading: false,
    products: [],
    menClothing: [],
    jewelery: [],
    electronics: []
};

export default function (state = defaultState, action) {
    if (action.type === SET_LOADING) {
        return {...state, loading: true};
    }
    if (action.type === GET_PRODUCTS) {
        return {...state, loading: false, products: action.payload,
            menClothing: action.payload.filter(menClothing => menClothing.category === "men clothing"),
            jewelery: action.payload.filter(jewelery => jewelery.category === "jewelery"),
            electronics: action.payload.filter(electronic => electronic.category === "electronics")};
    }
    return state;
}
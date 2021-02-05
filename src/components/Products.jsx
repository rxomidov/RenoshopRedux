import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../redux/Products/ProductActions";

function Products(props) {
    const products = useSelector(state=>state.products);
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getProducts())
    },[]);

    console.log(products);
    return (
        <div>
            <h3>Products finally there</h3>
            {/*<button */}
            {/*    onClick={()=>dispatch(getProducts())}*/}
            {/*    className="btn-outline-success">*/}
            {/*    GET PRODUCTS*/}
            {/*</button>*/}
        </div>
    )
}

export default Products;
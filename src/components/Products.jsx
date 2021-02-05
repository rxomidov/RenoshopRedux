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
    if (products.loading === true){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <h3>Products finally there</h3>
            {products.products.map((product,index)=>{
                return (
                    <div key={index}>
                        <div>{product.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;
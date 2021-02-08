import React,{Suspense,lazy} from 'react';
import { Route, useHistory, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HomePage = lazy(()=>import("../pages/HomePage/Homepage"));
const ProductsPage = lazy(()=>import("../pages/ProductsPage/Products"));
const CartPage = lazy(()=>import("../pages/CartPage/CartPage"));

const Routes = () => {
    return (
        <Suspense fallback={
            <>
                <Header/>
            </>

        }>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/products" component={ProductsPage}/>
                <Route path="/cart" component={CartPage}/>
            </Switch>
            <Footer/>
        </Suspense>
    );
};

export default Routes;
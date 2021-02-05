import React from "react";
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";

import store from "./redux/Store";
import Products from "./components/Products";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    {/*<Posts/>*/}
                    {/*<PostForm/>*/}
                    <Products/>
                </div>
            </div>
        </Provider>
    );
}

export default App;

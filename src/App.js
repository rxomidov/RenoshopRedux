import React from "react";
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Posts/>
            <PostForm/>
        </div>
    </div>
  );
}

export default App;

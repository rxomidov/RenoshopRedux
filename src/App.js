import React from "react";
import './App.css';
import {useHistory} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/Routes";

function App() {
    const history = useHistory();
    //api.subscribe(history);

    return (
        <div>
            <Routes/>
        </div>
    );
}

export default App;

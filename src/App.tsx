import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";


const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path={'/'} component={Home}/>
            </Switch>
        </div>
    );
};

export default App;

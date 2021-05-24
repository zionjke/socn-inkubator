import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";

const App: React.FC = () => {
    return (
        <div className="App">
            <Switch>
                <Route path={'/'}
                       render={() => <Home />}/>
            </Switch>
        </div>
    );
};

export default App;

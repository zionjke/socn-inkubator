import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {StateType} from "./types/types";


type Props = {
    state: StateType
}

const App: React.FC<Props> = ({state}) => {
    return (
        <div className="App">
            <Switch>
                <Route path={'/'}
                       render={() => <Home state={state}/>}/>
            </Switch>
        </div>
    );
};

export default App;

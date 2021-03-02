import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {StateType} from "./types/types";



type Props = {
    state: StateType,
    addNewPost: (postMessage:string) => void
}

const App: React.FC<Props> = ({state,addNewPost}) => {
    return (
        <div className="App">
            <Switch>
                <Route path={'/'}
                       render={() => <Home addNewPost={addNewPost} state={state}/>}/>
            </Switch>
        </div>
    );
};

export default App;

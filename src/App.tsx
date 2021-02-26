import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {DialogType, MessageType, PostType, StateType} from "./types/types";


type Props = {
    state: StateType
}

const App: React.FC<Props> = ({state}) => {
    return (
        <div className="App">
            <Switch>
                <Route path={'/'}
                       render={() => <Home posts={state.posts} dialogs={state.dialogs} messages={state.messages}/>}/>
            </Switch>
        </div>
    );
};

export default App;

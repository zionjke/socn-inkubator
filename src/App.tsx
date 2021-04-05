import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {MessageType, PostType, StateType} from "./types/types";
import {v1} from 'uuid'


const App: React.FC = () => {

    const [state, setState] = useState<StateType>({
        profilePage: {
            posts: [
                {id: v1(), likesCount: 0, message: 'Its my first post'},
                {id: v1(), likesCount: 7, message: 'Its my second post'},
            ]
        },
        messagesPage: {
            dialogs: [
                {id: 1, userName: 'John', avatarLink: "https://static.toiimg.com/photo/76729750.cms"},
                {
                    id: 2,
                    userName: 'Mike',
                    avatarLink: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                },
                {
                    id: 3,
                    userName: 'Nick',
                    avatarLink: "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                },
                {
                    id: 4,
                    userName: 'Dan',
                    avatarLink: "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                },
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you'},
                {id: v1(), message: 'Im fine'},
            ]
        }
    })

    const addNewPost = (postMessage: string) => {
        let newPost: PostType = {
            id: v1(),
            likesCount: 5,
            message: postMessage
        }
        setState({
            ...state,
            profilePage: {
                ...state.profilePage,
                posts: [...state.profilePage.posts, newPost]
            }
        })
    }

    const addNewMessage = (message: string) => {
        let newMessage: MessageType = {
            id: v1(),
            message: message
        }
        setState({
            ...state,
            messagesPage: {
                ...state.messagesPage,
                messages: [...state.messagesPage.messages, newMessage]
            }
        })
    }


    return (
        <div className="App">
            <Switch>
                <Route path={'/'}
                       render={() => <Home addNewMessage={addNewMessage} addNewPost={addNewPost} state={state}/>}/>
            </Switch>
        </div>
    );
};

export default App;

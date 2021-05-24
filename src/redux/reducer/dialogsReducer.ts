import {MessagesPageType, MessageType} from "../../types/types";
import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE'


const initialState: MessagesPageType = {
    dialogs: [
        {
            id: 1,
            userName: 'John',
            avatarLink: "https://static.toiimg.com/photo/76729750.cms"
        },
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

export const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessageType = {
                id: v1(),
                message: action.payload
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}


export const addNewMessageActionCreator = (payload: string) => ({type: SEND_MESSAGE, payload})


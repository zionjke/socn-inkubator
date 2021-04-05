import {MessagesPageType, MessageType} from "../../types/types";

const SEND_MESSAGE = 'SEND_MESSAGE'


const initialState: MessagesPageType = {
    dialogs: [],
    messages: []
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}


export const addNewMessageActionCreator = (payload: MessageType) => ({type: SEND_MESSAGE, payload})


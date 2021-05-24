import {PostType, ProfilePageType} from "../../types/types"
import {v1} from "uuid";

const ADD_POST = 'ADD_POST'

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), likesCount: 0, message: 'Its my first post'},
        {id: v1(), likesCount: 7, message: 'Its my second post'},
    ]
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST :
            let newPost: PostType = {
                id: v1(),
                likesCount: 5,
                message: action.payload
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        default:
            return state
    }
}

export const addNewPostActionCreator = (payload: string) => {
    return {
        type: ADD_POST,
        payload
    }
}


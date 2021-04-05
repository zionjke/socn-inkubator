import {PostType, ProfilePageType} from "../../types/types"

const ADD_POST = 'ADD_POST'

const initialState: ProfilePageType = {
    posts: []
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}

export const addNewPostActionCreator = (payload: PostType) => {
    return {
        type: ADD_POST,
        payload
    }
}


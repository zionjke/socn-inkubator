import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profileReducer";
import {dialogsReducer} from "./reducer/dialogsReducer";


const rootReducer = combineReducers({
    profile: profileReducer,
    dialog: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

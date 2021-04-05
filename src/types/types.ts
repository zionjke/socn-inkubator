export type DialogType = {
    id:number
    userName: string
    avatarLink:string
}

export type MessageType = {
    id:string
    message:string
}

export type PostType = {
    id:string
    likesCount:number
    message:string
}


export type ProfilePageType = {
    posts: Array<PostType>
}

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage:MessagesPageType
}

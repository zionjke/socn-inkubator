export type DialogType = {
    id:number
    userName: string
    avatarLink:string
}

export type MessageType = {
    id:number
    message:string
}

export type PostType = {
    id:number
    likesCount:number
    message:string
}

export type StateType = {
    posts:Array<PostType>
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}

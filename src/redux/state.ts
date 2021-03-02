import {PostType, StateType} from "../types/types";

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, likesCount: 0, message: 'Its my first post'},
            {id: 2, likesCount: 7, message: 'Its my second post'},
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
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Im fine'},
        ]
    }
}

export const addNewPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 3,
        likesCount: 5,
        message: postMessage
    }
    state.profilePage.posts.push(newPost)
}

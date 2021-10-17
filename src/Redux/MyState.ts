
type PostDataType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePostsType = {
    postsData: Array<PostDataType>
}

type UsersType = {
    name: string
    id: number
}

type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
}

export type StateType = {
    profile: ProfilePostsType
    dialogs: DialogsType
}

export const state: StateType = {

    profile : {
        postsData: [
            { id: 1, message: 'Hello, Boy', likeCount: 10},
            { id: 2, message: 'Boy', likeCount: 33}
        ],
    },

    dialogs: {
        messages: [
            { id: 1, message: "Im your father" },
            { id: 2, message: "Hello Boy!" },
            { id: 3, message: "It's a joke;3" }
        ],
        users: [
            {id: 1, name: "Leon"},
            {id: 2, name: "Alex"}
        ]
    }
}


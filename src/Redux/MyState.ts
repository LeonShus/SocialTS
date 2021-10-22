export type PostDataType = {
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

export type DispatchType = {
    type: 'ADD-NEW-POST'
    text?: string
}

export type StoreType = {
    _state: StateType
    _subscribe: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action : DispatchType) => void

}

//STORE

export const store: StoreType = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: "Hello, Boy", likeCount: 10},
                {id: 2, message: "Boy", likeCount: 33}
            ],
        },

        dialogs: {
            messages: [
                {id: 1, message: "Im your father"},
                {id: 2, message: "Hello Boy!"},
                {id: 3, message: "It's a joke;3"}
            ],
            users: [
                {id: 1, name: "Leon"},
                {id: 2, name: "Alex"}
            ]
        }
    },

    _subscribe() {
        console.log("a")
    },

    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        this._subscribe = observer
    },

    // addNewPost(post: string) {
    //     let newPost: PostDataType = {
    //         id: 5,
    //         message: post,
    //         likeCount: 0
    //     }
    //     this._state.profile.postsData.push(newPost)
    //     this._subscribe()
    // }

    dispatch(action : DispatchType){
        switch (action.type){
            case 'ADD-NEW-POST':
                let newPost: any = {
                    id: 5,
                    message: action.text,
                    likeCount: 0
                }
                this._state.profile.postsData.push(newPost)
                this._subscribe()
        }
    }

}

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

export type MessageType = {
    id: number
    message: string
}
export type UsersType = {
    id: number
    name: string
}

const initState = {
    messages: [
        {id: 1, message: "Hi, bro!"},
        {id: 2, message: "GL!"},
        {id: 3, message: "Bye;)"},
    ] as Array<MessageType>,

    users: [
        {id: 1, name: "Leon"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Bob"}
    ] as Array<UsersType>,
}

export type DialogsInitStateType = typeof initState

export const dialogsReducer = (state: DialogsInitStateType = initState, action: any) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMes: MessageType = {
                id: 4,
                message: action.text
            }
            return {
                ...state,
                messages: [...state.messages, newMes]
            }
        default:
            return state
    }
}

type SendNewMessageActionCreatorTYpe = {
    type: typeof ADD_NEW_MESSAGE
    text: string
}
export const sendNewMessageActionCreator = (text: string): SendNewMessageActionCreatorTYpe => ({
    type: ADD_NEW_MESSAGE,
    text
})
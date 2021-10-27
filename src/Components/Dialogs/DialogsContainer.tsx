import React, {useState} from "react";
import {MessageType, SendNewMessage, UsersType} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";


export type DialogsContainerPropsType = {
    messages: Array<MessageType>
    users: Array<UsersType>
    dispatch: any
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = ({messages, users, dispatch}) => {

    let [newMessage, SetNewMessage] = useState("")

    const changeNewMessage = (text: string) => {
        SetNewMessage(text)
    }

    const SendMessage = () => {
        dispatch(SendNewMessage(newMessage))
        SetNewMessage("")
    }

    return (
        <Dialogs messages={messages}
                 users={users}
                 sendMessage={SendMessage}
                 changeNewMessage={changeNewMessage}
                 newMessage={newMessage}
        />
    )
}

export default DialogsContainer
import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessageType, UsersType} from "../../Redux/Reducers/DialogsReducer";


export type DialogsPropsType = {
    messages: Array<MessageType>
    users: Array<UsersType>
    sendMessage: () => void
    changeNewMessage: (text: string) => void
    newMessage: string
}

const Dialogs: React.FC<DialogsPropsType> = ({messages, users, sendMessage, changeNewMessage, newMessage}) => {

    let usersArr = users.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageArr = messages.map((el) => <Message key={el.id} message={el.message}/>)

    const messageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewMessage(e.currentTarget.value)
    }
    const send = () => {
        sendMessage()
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {usersArr}
            </div>
            <div className={classes.window}>
                <div className={classes.chatWindow}>
                    {messageArr}
                </div>
                <textarea onChange={messageChange}
                          rows={3}
                          value={newMessage}></textarea>
                <button onClick={send}>Send</button>
            </div>
        </div>

    )
}

export default Dialogs
import React, {useState} from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {SendNewMessage} from "../../Redux/Reducers/DialogsReducer";

const Dialogs = (props: any) => {
    console.log(props,'Dialogs')

    let [newMessage, SetNewMessage] = useState('')

    const changeNewMessage = (text : string) => {
        SetNewMessage(text)
    }

    const SendMessage = () => {
        props.dispatch(SendNewMessage(newMessage))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                { props.users.map((el:any) => <DialogItem key={el.id} name={el.name} id={el.id}/>) }
            </div>
            <div className={classes.window}>
                <div className={classes.chatWindow}>
                    { props.messages.map((el:any) => <Message key={el.id} message={el.message}/>) }
                </div>
                <textarea onChange={(e) => changeNewMessage(e.currentTarget.value)}
                          rows={3} value={newMessage}></textarea>
                <button onClick={SendMessage}>Send</button>
            </div>
        </div>

    )
}

export default Dialogs
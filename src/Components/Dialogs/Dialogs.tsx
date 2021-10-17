import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType} from "../../Redux/MyState";

const Dialogs = (props: DialogsType) => {
    console.log(props,'Dialogs')
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                { props.users.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>) }
            </div>
            <div className={classes.window}>
                <div className={classes.chatWindow}>
                    { props.messages.map(el => <Message key={el.id} message={el.message}/>) }
                </div>
                <textarea rows={3}></textarea>
                <button>Send</button>
            </div>
        </div>

    )
}

export default Dialogs
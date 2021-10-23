import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {
    console.log(props,'Dialogs')
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                { props.users.map((el:any) => <DialogItem key={el.id} name={el.name} id={el.id}/>) }
            </div>
            <div className={classes.window}>
                <div className={classes.chatWindow}>
                    { props.messages.map((el:any) => <Message key={el.id} message={el.message}/>) }
                </div>
                <textarea rows={3}></textarea>
                <button>Send</button>
            </div>
        </div>

    )
}

export default Dialogs
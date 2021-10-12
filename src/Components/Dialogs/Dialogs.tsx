import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <DialogItem name="Leon" id={1}/>
                <DialogItem name="Alex" id={2}/>

            </div>
            <div className={classes.window}>
                <Message message={"Im your father"}/>
                <Message message={"Hello Boy!"}/>
                <Message message={"It's a joke;3"}/>
            </div>
        </div>

    )
}

export default Dialogs
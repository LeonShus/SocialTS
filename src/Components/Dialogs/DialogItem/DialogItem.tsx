import classes from "../Dialogs.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div>
            <img className={classes.avatar} src={userDef} alt="avatar"/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
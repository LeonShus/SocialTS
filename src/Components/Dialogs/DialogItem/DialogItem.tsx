import classes from "./DialogItem.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} src={userDef} alt="avatar"/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
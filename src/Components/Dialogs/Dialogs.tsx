import React from "react";
import classes from "./Dialogs.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"
import { NavLink } from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                <div>
                    <img className={classes.avatar} src={userDef} alt="avatar"/>
                    <NavLink to="/dialogs/1">Leon</NavLink>
                </div>
                <div>
                    <img className={classes.avatar} src={userDef} alt="avatar"/>
                    <NavLink to="/dialogs/2">Alex</NavLink>
                </div>
            </div>
            <div className={classes.window}>
                <div>
                    hello
                </div>
                <div>
                    how are you
                </div>
            </div>
        </div>

    )
}

export default Dialogs
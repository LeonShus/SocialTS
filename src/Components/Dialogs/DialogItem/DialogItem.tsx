import React from "react";
import classes from "./DialogItem.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import {NavLink} from "react-router-dom";
import {Avatar, Grid, Paper} from "@mui/material";

type DialogItemPropsType = {
    name: string
    id: string | number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <Paper sx={{minWidth: "200px", mb: "15px"}}
               elevation={3}
        >
            <Grid container sx={{padding: "10px"}} spacing={1}>
                <Grid item>
                    <Avatar alt={props.name} src={userDef}/>
                </Grid>
                <Grid item>
                    <NavLink className={classes.navLinkStyle} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default DialogItem
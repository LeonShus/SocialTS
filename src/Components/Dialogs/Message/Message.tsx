import { Grid } from "@mui/material";
import React from "react";
import classes from "./Message.module.css"

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <Grid container>
            <Grid item>
                {props.message}
            </Grid>

        </Grid>
    )
}

export default Message
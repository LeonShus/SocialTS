import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import classes from "./Message.module.css"

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <Grid container sx={{ backgroundColor: 'gray'}}>
            <Grid item>
                    <Typography variant={'body1'} sx={{ backgroundColor: 'white' }} >
                        {props.message}
                    </Typography>
            </Grid>
        </Grid>
    )
}

export default Message
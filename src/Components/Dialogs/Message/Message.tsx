import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import classes from "./Message.module.css"

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <Grid container
              sx={{
                  mb: "7px",
                  padding: "2px",
                  maxWidth: "300px",
                  wordWrap: "break-word",
              }}
        >
            <Grid item>
                <Typography variant={"body1"}
                            sx={{
                                color: 'white',
                                backgroundColor: "#1976D2",
                                padding: "7px",
                                borderRadius: '5px'
                            }}>
                    {props.message}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Message
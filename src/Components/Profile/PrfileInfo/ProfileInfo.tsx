import classes from "./ProfileInfo.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import React, {ChangeEvent, memo, useState} from "react";
import {UserType} from "../../../Redux/Reducers/ProfileReducer";
import {Avatar, Grid, TextField, Typography} from "@mui/material";

type ProfileInfoPropsType = {
    user: UserType
}

const ProfileInfo = memo(({user}: ProfileInfoPropsType) => {
    const [status, setStatus] = useState(user.aboutMe)
    const [editStatus, setEditStatus] = useState(false)
    const getUserPhoto = () => {
        return user.photos && user.photos.small ? user.photos.small : userDef
    }
    const editModeOn = () => {
        setEditStatus(true)
    }
    const editModeOff = (e: any) => {
        if(e.charCode === 13) {

        }
    }
    const onBlurHandler = () => {
        setEditStatus(false)
    }
    const changeStatusText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <Grid container
              sx={{
                  border: "1px solid black",
                  mb: "40px"
              }}
        >
            <Grid item>
                <Avatar className={classes.avatar}
                        src={getUserPhoto()}
                        alt={user.fullName}
                        sx={{width: "150px", height: "150px"}}
                />
            </Grid>
            <Grid item
                  sx={{ml: "20px"}}
            >
                <Typography sx={{fontSize: "2.2rem", fontWeight: "300"}}>
                    {user.fullName}
                </Typography>

                <Grid container>
                    {editStatus
                        ? <TextField autoFocus
                                     size={"small"}
                                     variant={"outlined"}
                                     onKeyPress={editModeOff}
                                     onChange={changeStatusText}
                                     onBlur={onBlurHandler}
                        />

                        : <Typography
                            onDoubleClick={editModeOn}
                            sx={{fontSize: "1.2rem"}}
                        >
                            {user.aboutMe}
                        </Typography>
                    }

                </Grid>
            </Grid>


        </Grid>
    )
})

export default ProfileInfo
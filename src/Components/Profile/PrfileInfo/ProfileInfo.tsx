import classes from "./ProfileInfo.module.css";
import userDef from "../../../DefaultItems/Img/userDef.png";
import React, {ChangeEvent, memo, useState} from "react";
import {changeStatusT, UserType} from "../../../Redux/Reducers/ProfileReducer";
import {Avatar, Grid, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";

type ProfileInfoPropsType = {
    user: UserType
}

const ProfileInfo = memo(({user}: ProfileInfoPropsType) => {
    const dispatch = useDispatch()
    const userStatus = useSelector((state: AppStateType) => state.profilePage.status)
    const mainUser = useSelector((state: AppStateType) => state.authUser.id)


    const [status, setStatus] = useState(userStatus)
    const [editStatus, setEditStatus] = useState(false)

    console.log(user)
    console.log(userStatus)

    const getUserPhoto = () => {
        return user.photos && user.photos.small ? user.photos.small : userDef
    }
    const editModeOn = () => {
        mainUser === user.userId &&
        setEditStatus(true)
    }
    const editModeOff = (e: any) => {
        if (e.charCode === 13) {
            setEditStatus(false)
            dispatch(changeStatusT(status))
        }
    }
    const onBlurHandler = () => {
        setEditStatus(false)
        dispatch(changeStatusT(status))
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
                            {userStatus}
                        </Typography>
                    }
                </Grid>
            </Grid>


        </Grid>
    )
})

export default ProfileInfo
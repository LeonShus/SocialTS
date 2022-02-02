import React, {ChangeEvent, useState} from "react"
import {Grid, TextField, Typography} from "@mui/material";
import {changeStatusT, UserType} from "../../../../Redux/Reducers/ProfileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../Redux/ReduxStore";

type StatusPropsType = {
    user: UserType
}

export const Status = ({user}: StatusPropsType) => {
    const userStatus = useSelector<AppStateType, string>(state => state.profilePage.status)
    let mainUserId = useSelector<AppStateType, number | null>(state => state.authUser.id)

    const [editStatus, setEditStatus] = useState(false)
    const [status, setStatus] = useState(userStatus)

    const dispatch = useDispatch()

    const editModeOn = () => {
        mainUserId === user.userId &&
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
    )
}
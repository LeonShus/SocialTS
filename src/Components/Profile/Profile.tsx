import React, {memo, useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {setProfileT, setUserStatusT, UserType} from "../../Redux/Reducers/ProfileReducer";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import MyPosts from "./MyPosts/MyPosts";
import {useParams} from "react-router-dom";


export const Profile = memo(() => {
    let dispatch = useDispatch()
    let mainUserId = useSelector<AppStateType, number | null>(state => state.authUser.id)
    let user = useSelector<AppStateType, UserType>((state: AppStateType) => state.profilePage.user)

    let params = useParams()
    let userToRender = params.userId && +params.userId || mainUserId

    useEffect(() => {
        if (userToRender) {
            dispatch(setProfileT(userToRender))
            dispatch(setUserStatusT(userToRender))
        }
    }, [userToRender])

    if (!user) {
        return <Preloader/>
    }

    return (
        <Paper>
            <Grid container
                  sx={{padding: "20px"}}
            >
                <ProfileInfo user={user} mainUserId={mainUserId}/>
                <MyPosts/>
            </Grid>
        </Paper>
    )
})
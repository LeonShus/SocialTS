import React, {useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {setProfileT} from "../../Redux/Reducers/ProfileReducer";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import {Redirect, withRouter} from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";


export const Profile = withRouter((props: any) => {

    let user = useSelector((state: AppStateType) => state.profilePage.user)
    let dispatch = useDispatch()
    let isAuth = useSelector((state: AppStateType) => state.authUser.isAuth)

    let userId = props.match.params.userId

    if (!userId) {
        userId = 2
    }

    useEffect(() => {
        dispatch(setProfileT(userId))
    }, [])


    if (!user) {
        return <Preloader/>
    }
    if(!isAuth){
        return <Redirect to={'/login'}/>
    }
    return (
        <Paper>
            <Grid container
                  sx={{padding: "20px"}}
            >
                <ProfileInfo user={user}/>
                <MyPosts/>
            </Grid>
        </Paper>
    )
})

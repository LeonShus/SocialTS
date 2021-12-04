import React, {useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {setProfileT} from "../../Redux/Reducers/ProfileReducer";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import {withRouter} from "react-router-dom";


export const ProfileContainer = withRouter((props: any) => {

    let user = useSelector((state: AppStateType) => state.profilePage.user)
    let dispatch = useDispatch()

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
    return (
        <Paper>
            <Grid container
                  sx={{padding: "20px"}}
            >
                <ProfileInfo user={user}/>

                <MyPostsContainer/>
            </Grid>
        </Paper>
    )
})

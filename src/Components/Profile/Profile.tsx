import React, {memo, useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {setProfileT, setUserStatusT} from "../../Redux/Reducers/ProfileReducer";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import {withRouter} from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import {WithAuthHOC} from "../../HOC/WithAuth";


export const Profile = memo(WithAuthHOC(withRouter((props: any) => {

    let user = useSelector((state: AppStateType) => state.profilePage.user)
    let dispatch = useDispatch()


    let userId = props.match.params.userId

    if (!userId) {
        userId = 19076
    }

    useEffect(() => {
        dispatch(setProfileT(userId))
        dispatch(setUserStatusT(userId))
    }, [userId])


    if (!user) {
        return <Preloader/>
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
})))

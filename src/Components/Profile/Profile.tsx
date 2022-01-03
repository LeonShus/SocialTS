import React, {memo, useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {setProfileT, setUserStatusT, UserType} from "../../Redux/Reducers/ProfileReducer";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import {RouteComponentProps, withRouter} from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import {WithAuthHOC} from "../../HOC/WithAuth";
import {compose} from "redux";



const Profile = memo((props: RouteComponentProps<any>) => {
    let mainUserId = useSelector<AppStateType,number | null>(state => state.authUser.id)
    let user = useSelector<AppStateType,UserType>((state: AppStateType) => state.profilePage.user)
    let dispatch = useDispatch()


    let userId = props.match.params.userId

    if (!userId) {
        userId = mainUserId
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
                <ProfileInfo user={user} mainUserId={mainUserId}/>
                <MyPosts/>
            </Grid>
        </Paper>
    )
})

export default compose(WithAuthHOC,withRouter)(Profile)
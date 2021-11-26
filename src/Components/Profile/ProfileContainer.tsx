import React, {useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {setUserToProfilePageAC, SetUserToProfilePageACType, UserType} from "../../Redux/Reducers/ProfileReducer";
import axios from "axios";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";

type MapStatePropsType = {
    user: UserType
}

type MapDispatchToProps = {
    setUserToProfilePageAC: (user: UserType) => SetUserToProfilePageACType
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps


const ProfileContainer = ({user, setUserToProfilePageAC}: ProfileContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                setUserToProfilePageAC(response.data)
            })
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
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        user: state.profilePage.user
    }
}


export default connect<MapStatePropsType,
    MapDispatchToProps, {},
    AppStateType>(mapStateToProps, {setUserToProfilePageAC})(ProfileContainer)
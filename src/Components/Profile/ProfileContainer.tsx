import React, {useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {setUserToProfilePageAC, SetUserToProfilePageACType, UserType} from "../../Redux/Reducers/ProfileReducer";
import axios from "axios";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router"

type MapStatePropsType = {
    user: UserType
}

type MapDispatchToProps = {
    setUserToProfilePageAC: (user: UserType) => SetUserToProfilePageACType
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps & RouteComponentProps<any>


const ProfileContainer = ({user, setUserToProfilePageAC, ...props}: ProfileContainerPropsType) => {

    let userId = props.match.params.userId

    if(!userId){
        userId = "2"
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


type PropsType = {
    userId: string
}

export default connect<MapStatePropsType,
    MapDispatchToProps, {},
    AppStateType>(mapStateToProps, {setUserToProfilePageAC})(withRouter(ProfileContainer))
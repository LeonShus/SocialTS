import React, {useEffect} from "react";
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {ProfileReducerThunkType, setProfileT, UserType} from "../../Redux/Reducers/ProfileReducer";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid, Paper} from "@mui/material";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router"

type MapStatePropsType = {
    user: UserType
}
type MapDispatchToProps = {
    setProfileT: (userId: number) => ProfileReducerThunkType
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps & RouteComponentProps<any>


const ProfileContainer = ({user, setProfileT, ...props}: ProfileContainerPropsType) => {

    let userId = props.match.params.userId

    if (!userId) {
        userId = "2"
    }

    useEffect(() => {
        setProfileT(userId)
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
    AppStateType>(mapStateToProps, {setProfileT})(withRouter(ProfileContainer))
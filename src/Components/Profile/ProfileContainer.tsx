import React, {useEffect} from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {UserType} from "../../Redux/Reducers/ProfileReducer";
import axios from "axios";


type ProfileContainerPropsType = {
    user: UserType
}

const ProfileContainer = (props: ProfileContainerPropsType) => {
    console.log(props.user)

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => console.log(response.data))
    })

    return (
        <div className={classes.container}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        user: state.profilePage.user
    }
}


export default connect(mapStateToProps, {})(ProfileContainer)
import React, {useEffect} from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {setUserToProfilePageAC, SetUserToProfilePageACType, UserType} from "../../Redux/Reducers/ProfileReducer";
import axios from "axios";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";


type ProfileContainerPropsType = {
    user: UserType
    setUserToProfilePageAC: (user: UserType) => SetUserToProfilePageACType
}

const ProfileContainer = ({user, setUserToProfilePageAC}: ProfileContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                console.log(response.data)
                setUserToProfilePageAC(response.data)
            })
    }, [])

    if (!user) {
        return <Preloader/>
    }

    return (
        <div className={classes.container}>
            <ProfileInfo user={user}/>
            <MyPostsContainer/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        user: state.profilePage.user
    }
}


export default connect(mapStateToProps, {setUserToProfilePageAC})(ProfileContainer)
import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import {PostDataType} from "../../Redux/Reducers/ProfileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    postsData: Array<PostDataType>
    dispatch: any
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    console.log(props, "Profile")
    return (
        <div className={classes.container}>
            <ProfileInfo/>
            <MyPostsContainer postsData={props.postsData} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile
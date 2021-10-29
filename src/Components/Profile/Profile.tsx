import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./PrfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={classes.container}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <main className={classes.container}>
            <ProfileInfo/>

            <MyPosts/>
        </main>
    )
}

export default Profile
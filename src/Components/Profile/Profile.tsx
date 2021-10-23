import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrfileInfo/ProfileInfo";


const Profile = (props: any) => {
    console.log(props, "Profile")
    return (
        <main className={classes.container}>
            <ProfileInfo/>

            <MyPosts postsData={props.postsData} dispatch={props.dispatch}/>
        </main>
    )
}

export default Profile
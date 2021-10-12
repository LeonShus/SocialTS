import React from "react";
import classes from "./Profile.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <main className={classes.container}>
            <div>
                <img className={classes.avatar} src={userDef} alt="avatar"/>
            </div>
            <div>
                Name
            </div>
            <div>
                Info
            </div>

            <div>
                <MyPosts/>
            </div>
        </main>
    )
}

export default Profile
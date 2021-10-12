import React from "react";
import classes from "./Post.module.css"
import userDef from "../../../../DefaultItems/Img/userDef.png"

const Post = () => {
    return (
        <div>
            <img className={classes.avatar} src={userDef} alt="avatar"/>
            <div>Hello</div>
            like
        </div>
    )
}

export default Post
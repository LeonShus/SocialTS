import React from "react";
import classes from "./Post.module.css"
import userDef from "../../../../DefaultItems/Img/userDef.png"

type PostPropsType = {
    message: string
    likeCount: number
}

const Post = (props : PostPropsType) => {
    return (
        <div>
            <img className={classes.avatar} src={userDef} alt="avatar"/>
            <div>{props.message}</div>
            &#9825;{ props.likeCount}
        </div>
    )
}

export default Post
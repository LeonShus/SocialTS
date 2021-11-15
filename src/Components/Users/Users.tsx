import React from "react";
import {FollowACType, SetUsersACType, UnFollowACType, UserType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Users.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"


export type UsersPropsType = {
    users: Array<UserType>
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
    setUsersAC: (users: Array<UserType>) => SetUsersACType
}

const Users = ({users, ...props}: UsersPropsType) => {

    const changeToFollow = (id: string | number) => {
        props.followAC(id)
    }
    const changeToUnfollow = (id: string | number) => {
        props.unfollowAC(id)
    }

    const usersJsxArray = users.map(u => {
        const followButton = !u.followed ? <button onClick={() => changeToFollow(u.id)}>follow</button>
            : <button onClick={() => changeToUnfollow(u.id)}>Unfollow</button>

        return (
            <div key={u.id} className={classes.container}>
                <img className={classes.avatar} src={!u.photos.small ? userDef : u.photos.small} alt="avatar"/>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {followButton}
                </div>
            </div>
        )
    })

    return (
        <div>
            {usersJsxArray}
        </div>
    )
}

export default Users
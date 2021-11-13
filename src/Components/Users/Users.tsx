import React from "react";
import {FollowACType, UnFollowACType, UserType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Users.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"

type UsersPropsType = {
    users: Array<UserType>
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
}

const Users = ({users, ...props}: UsersPropsType) => {
    console.log(props, 'qqqqqqqqqqqqqq')
    const changeToFollow = (id: string | number) =>{
        props.followAC(id)
    }
    const changeToUnfollow = (id: string | number) =>{
        props.unfollowAC(id)
    }

    const usersJsxArray = users.map(u => {
        const followButton = !u.follow ? <button onClick={() => changeToFollow(u.id)}>follow</button>
            : <button onClick={() => changeToUnfollow(u.id)}>Unfollow</button>

        return (
            <div key={u.id} className={classes.container}>
                <img className={classes.avatar} src={`${!u.avatar && userDef}`} alt="avatar"/>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.country}
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
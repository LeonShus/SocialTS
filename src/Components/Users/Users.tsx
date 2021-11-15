import React, {useEffect} from "react";
import {FollowACType, setUsersAC, SetUsersACType, UnFollowACType, UserType} from "../../Redux/Reducers/UsersReducer";
import classes from "./Users.module.css"
import userDef from "../../DefaultItems/Img/userDef.png"
import * as axios from "axios"

type UsersPropsType = {
    users: Array<UserType>
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
    setUsersAC: (users: Array<UserType>) => SetUsersACType
}

const Users = ({users, ...props}: UsersPropsType) => {

    useEffect(() => {
        // @ts-ignore
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => props.setUsersAC(response.data.items))
    },[])




    const changeToFollow = (id: string | number) =>{
        props.followAC(id)
    }
    const changeToUnfollow = (id: string | number) =>{
        props.unfollowAC(id)
    }

    const usersJsxArray = users.map(u => {
        const followButton = !u.followed ? <button onClick={() => changeToFollow(u.id)}>follow</button>
            : <button onClick={() => changeToUnfollow(u.id)}>Unfollow</button>

        return (
            <div key={u.id} className={classes.container}>
                <img className={classes.avatar} src={`${!u.photos.small && userDef}`} alt="avatar"/>
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
import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    FollowACType,
    setTotalUsersCountAC,
    setTotalUsersCountACType,
    setUsersAC,
    SetUsersACType,
    unfollowAC,
    UnFollowACType,
    UserType
} from "../../Redux/Reducers/UsersReducer";
import * as axios from "axios";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";


type UsersContainerPropsType = {
    users: Array<UserType>
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
    setTotalUsersCountAC: (totalUsersCount: number) => setTotalUsersCountACType
    setUsersAC: (users: Array<UserType>) => SetUsersACType
    totalUsersCount: number
    pageSize: number
    currentPage: number
}


const UsersContainer = (props: UsersContainerPropsType) => {

    useEffect(() => {
        if (props.users.length === 0) { // Must Change!!!!!!!!!!!
            // @ts-ignore
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    props.setUsersAC(response.data.items)
                    props.setTotalUsersCountAC(response.data.totalCount)
                })
        }
    }, [])

    return (
        <>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
            />
            <Users users={props.users}
                   followAC={props.followAC}
                   unfollowAC={props.unfollowAC}
            />
        </>

    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

export default connect(mapStateToProps, {followAC, unfollowAC, setUsersAC, setTotalUsersCountAC})(UsersContainer)
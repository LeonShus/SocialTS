import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    FollowACType,
    setCurrentPageAC,
    setCurrentPageACType, setIsFetchingAC, setIsFetchingACType,
    setTotalUsersCountAC,
    setTotalUsersCountACType,
    setUsersAC,
    SetUsersACType,
    unfollowAC,
    UnFollowACType,
    UserType
} from "../../Redux/Reducers/UsersReducer";
import axios from "axios";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Container, Grid} from "@mui/material";


type UsersContainerPropsType = {
    users: Array<UserType>
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
    setTotalUsersCountAC: (totalUsersCount: number) => setTotalUsersCountACType
    setUsersAC: (users: Array<UserType>) => SetUsersACType
    setCurrentPageAC: (currentPage: number) => setCurrentPageACType
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    setIsFetchingAC: (isFetching: boolean) => setIsFetchingACType
}


const UsersContainer = (props: UsersContainerPropsType) => {

    useEffect(() => {
        props.setIsFetchingAC(true)
        // Must Change!!!!!!!!!!!

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then((response: any) => {
                props.setUsersAC(response.data.items)
                props.setTotalUsersCountAC(response.data.totalCount)
                props.setIsFetchingAC(false)
            })
    }, [props.currentPage])

    return (
        <>
            {props.isFetching && <Preloader/>}
                <Paginator totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           currentPage={props.currentPage}
                           setCurrentPageAC={props.setCurrentPageAC}
                />


            <Grid container spacing={2} columns={16}>
                <Users users={props.users}
                       followAC={props.followAC}
                       unfollowAC={props.unfollowAC}
                />
            </Grid>

        </>

    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    followAC,
    unfollowAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    setIsFetchingAC
})(UsersContainer)
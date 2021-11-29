import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    FollowACType,
    setCurrentPageAC,
    setCurrentPageACType,
    setIsFetchingAC,
    setIsFetchingACType,
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
import {Grid} from "@mui/material";


type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
    setTotalUsersCountAC: (totalUsersCount: number) => setTotalUsersCountACType
    setUsersAC: (users: Array<UserType>) => SetUsersACType
    setCurrentPageAC: (currentPage: number) => setCurrentPageACType
    setIsFetchingAC: (isFetching: boolean) => setIsFetchingACType
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


const UsersContainer = (props: UsersContainerPropsType) => {
    //Получаем пользователей
    useEffect(() => {
        props.setIsFetchingAC(true)
        // Must Change!!!!!!!!!!!

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`, {
            withCredentials: true
        })
            .then((response: any) => {
                props.setUsersAC(response.data.items)
                props.setTotalUsersCountAC(response.data.totalCount)
                props.setIsFetchingAC(false)
            })
    }, [props.currentPage])


    const followUser = (id: number) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "099be23b-024b-4d04-8aea-ded1a22de046"
            }
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    props.followAC(id)
                }
            })
    }

    const unfollowUser = (id: number) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "099be23b-024b-4d04-8aea-ded1a22de046"
            }
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    props.unfollowAC(id)
                }
            })
    }

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
                       followUser={followUser}
                       unfollowUser={unfollowUser}
                />
            </Grid>

        </>

    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect<MapStateToPropsType,
    MapDispatchToPropsType, {},
    AppStateType>(mapStateToProps,
    {
        followAC,
        unfollowAC,
        setUsersAC,
        setTotalUsersCountAC,
        setCurrentPageAC,
        setIsFetchingAC
    })(UsersContainer)
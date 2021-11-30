import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    FollowACType,
    setCurrentPageAC,
    SetCurrentPageACType, SetFollowProgressStartACType, setFollowProgressStartAC,
    setIsFetchingAC,
    SetIsFetchingACType,
    setTotalUsersCountAC,
    SetTotalUsersCountACType,
    setUsersAC,
    SetUsersACType,
    unfollowAC,
    UnFollowACType,
    UserType, setFollowProgressEndAC, SetFollowProgressEndACType
} from "../../Redux/Reducers/UsersReducer";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid} from "@mui/material";
import {usersAPI} from "../../DAL/API";


type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followInProgress: Array<number>
}

type MapDispatchToPropsType = {
    followAC: (id: number | string) => FollowACType
    unfollowAC: (id: number | string) => UnFollowACType
    setTotalUsersCountAC: (totalUsersCount: number) => SetTotalUsersCountACType
    setUsersAC: (users: Array<UserType>) => SetUsersACType
    setCurrentPageAC: (currentPage: number) => SetCurrentPageACType
    setIsFetchingAC: (isFetching: boolean) => SetIsFetchingACType
    setFollowProgressStartAC: (id: number) => SetFollowProgressStartACType
    setFollowProgressEndAC: (id: number) => SetFollowProgressEndACType
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


const UsersContainer = (props: UsersContainerPropsType) => {
    //Получаем пользователей
    useEffect(() => {
        props.setIsFetchingAC(true)
        // Must Change!!!!!!!!!!!

        usersAPI.getUsers(props.currentPage, props.pageSize)
            .then((response: any) => {
                props.setUsersAC(response.items)
                props.setTotalUsersCountAC(response.totalCount)
                props.setIsFetchingAC(false)
            })
    }, [props.currentPage])

    //Подписываемся на поьзователя
    const followUserCallBack = (id: number) => {
        props.setFollowProgressStartAC(id)

        usersAPI.followToUser(id)
            .then(response => {
                if (response.resultCode === 0) {
                    props.followAC(id)
                }
                props.setFollowProgressEndAC(id)
            })
    }
    //Отписываемся от пользователя
    const unfollowUserCallBack = (id: number) => {
        props.setFollowProgressStartAC(id)

        usersAPI.unfollowUser(id)
            .then(response => {
                if (response.resultCode === 0) {
                    props.unfollowAC(id)
                }
                props.setFollowProgressEndAC(id)
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
                       followInProgress={props.followInProgress}
                       followUserCallBack={followUserCallBack}
                       unfollowUserCallBack={unfollowUserCallBack}
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
        followInProgress: state.usersPage.followInProgress
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
        setIsFetchingAC,
        setFollowProgressStartAC,
        setFollowProgressEndAC
    })(UsersContainer)
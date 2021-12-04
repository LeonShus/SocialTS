import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserT,
    setCurrentPageAC,
    SetCurrentPageACType,
    setUsersT,
    unfollowUserT,
    UserReducerThunkType,
    UserType
} from "../../Redux/Reducers/UsersReducer";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid} from "@mui/material";


type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followInProgress: Array<number>
}

type MapDispatchToPropsType = {
    setCurrentPageAC: (currentPage: number) => SetCurrentPageACType

    setUsersT: (currentPage: number, pageSize: number) => any
    followUserT: (id: number) => UserReducerThunkType
    unfollowUserT: (id: number) => UserReducerThunkType
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


const UsersContainer = (props: UsersContainerPropsType) => {
    //Получаем пользователей
    useEffect(() => {
        props.setUsersT(props.currentPage, props.pageSize)
    }, [props.currentPage])

    //Подписываемся на поьзователя
    const followUserCallBack = (id: number) => {
        props.followUserT(id)
    }
    //Отписываемся от пользователя
    const unfollowUserCallBack = (id: number) => {
        props.unfollowUserT(id)
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
        setCurrentPageAC,
        setUsersT,
        followUserT,
        unfollowUserT
    })(UsersContainer)
import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {UsersContainer} from "./Users";
import {followUserT, setCurrentPageAC, setUsersT, unfollowUserT} from "../../Redux/Reducers/UsersReducer";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import {Grid} from "@mui/material";


export const Users = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching)
    const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount)
    const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize)
    const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage)
    const setCurrentPage = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    //Получаем пользователей
    useEffect(() => {
        dispatch(setUsersT(currentPage, pageSize))
    }, [currentPage])

    //Подписываемся на поьзователя
    const followUserCallBack = (id: number) => {
        dispatch(followUserT(id))
    }
    //Отписываемся от пользователя
    const unfollowUserCallBack = (id: number) => {
        dispatch(unfollowUserT(id))
    }

    return (
        <>
            {isFetching && <Preloader/>}
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage}
            />


            <Grid container spacing={2} columns={16}>
                <UsersContainer followUserCallBack={followUserCallBack}
                                unfollowUserCallBack={unfollowUserCallBack}
                />
            </Grid>
        </>
    )
}

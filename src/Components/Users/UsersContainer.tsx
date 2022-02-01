import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {UsersContainer} from "./Users";
import {followUserT, setCurrentPageAC, setUsersT, unfollowUserT} from "../../Redux/Reducers/UsersReducer";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import Grid from "@mui/material/Grid";


export const Users = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector<AppStateType,boolean>(state => state.usersPage.isFetching)
    const totalUsersCount = useSelector<AppStateType,number>(state => state.usersPage.totalUsersCount)
    const pageSize = useSelector<AppStateType,number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<AppStateType,number>(state => state.usersPage.currentPage)
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

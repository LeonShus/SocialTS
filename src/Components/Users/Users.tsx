import React, {memo, useCallback, useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {useDispatch, useSelector} from "react-redux";
import {UsersCont} from "./UsersCont";
import {followUserT, setCurrentPageAC, setUsersT, unfollowUserT} from "../../Redux/Reducers/UsersReducer";
import {Paginator} from "../../DefaultItems/Paginator/Paginator";
import {Preloader} from "../../DefaultItems/Preloader/Preloader";
import Grid from "@mui/material/Grid";


export const Users = memo(() => {
    const dispatch = useDispatch()
    const isFetching = useSelector<AppStateType,boolean>(state => state.usersPage.isFetching)
    const totalUsersCount = useSelector<AppStateType,number>(state => state.usersPage.totalUsersCount)
    const pageSize = useSelector<AppStateType,number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<AppStateType,number>(state => state.usersPage.currentPage)

    const setCurrentPage = useCallback((page: number) => {
        dispatch(setCurrentPageAC(page))
    },[dispatch])

    //Получаем пользователей
    useEffect(() => {
        dispatch(setUsersT(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])

    //Подписываемся на поьзователя
    const followUserCallBack = useCallback((id: number) => {
        dispatch(followUserT(id))
    },[dispatch])
    //Отписываемся от пользователя
    const unfollowUserCallBack = useCallback((id: number) => {
        dispatch(unfollowUserT(id))
    },[dispatch])

    return (
        <>
            {isFetching && <Preloader/>}
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage}
            />


            <Grid container spacing={2} columns={16}>
                <UsersCont followUserCallBack={followUserCallBack}
                                unfollowUserCallBack={unfollowUserCallBack}
                />
            </Grid>
        </>
    )
})

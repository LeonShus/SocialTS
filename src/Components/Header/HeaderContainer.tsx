import React, {useEffect} from "react"
import {Header} from "./Header"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {getAuthUserT} from "../../Redux/Reducers/AuthReducer";

export const HeaderContainer = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector((state: AppStateType) => state.authUser.login)
    // Получаем залогиненого пользователя
    useEffect(() => {
        dispatch(getAuthUserT())
    }, [])

    return (
        <Header userLogin={userLogin}/>
    )
}


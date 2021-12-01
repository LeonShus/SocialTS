import React, {useEffect} from "react"
import {Header} from "./Header"
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {AuthStateType, getAuthUserT} from "../../Redux/Reducers/AuthReducer";

type MapStateToProps = {
    auth: AuthStateType
}

type MapDispatchToPops = {
    getAuthUserT: () => any
}

type HeaderContainerPropsType = MapStateToProps & MapDispatchToPops

const HeaderContainer = (props: HeaderContainerPropsType) => {
    // Получаем залогиненого пользователя
    useEffect(() => {
        props.getAuthUserT()
    }, [])

    return (
        <Header userLogin={props.auth.login}/>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.authUser
    }
}

export default connect<MapStateToProps, MapDispatchToPops, {}, AppStateType>(mapStateToProps, {getAuthUserT})(HeaderContainer)

import React, {useEffect} from "react"
import {Header} from "./Header"
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {AuthStateType, setAuthAC, SetAuthACType} from "../../Redux/Reducers/AuthReducer";
import {authAPI} from "../../DAL/API";

type HeaderContainerPropsType = {
    auth: AuthStateType
    setAuthAC: (data: AuthStateType) => SetAuthACType
}

const HeaderContainer = (props: HeaderContainerPropsType) => {
    // Получаем залогиненого пользователя
    useEffect(() => {
        authAPI.getAuthMe()
            .then(response => {

                if (response.resultCode === 0) {
                    const {email, id, login} = response.data
                    props.setAuthAC({email, id, login})
                }
            })
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

export default connect(mapStateToProps, {setAuthAC})(HeaderContainer)

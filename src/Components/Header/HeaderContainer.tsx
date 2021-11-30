import React, {useEffect} from "react"
import {Header} from "./Header"
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {AuthStateType, setAuthAC, SetAuthACType} from "../../Redux/Reducers/AuthReducer";

type HeaderContainerPropsType = {
    auth: AuthStateType
    setAuthAC: (data: AuthStateType) => SetAuthACType
}

const HeaderContainer = (props: HeaderContainerPropsType) => {
    // Получаем залогиненого пользователя
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    const {email, id, login} = response.data.data
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

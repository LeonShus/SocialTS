import React from "react"
import {useSelector} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {Redirect} from "react-router-dom";

// Must Typing Component
export function WithAuthHOC(Component: any) {

    const ComponentWithAuth = () => {

        let isAuth = useSelector((state: AppStateType) => state.authUser.isAuth)

        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component/>
    }
    return ComponentWithAuth
}
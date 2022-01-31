import React, {ComponentType} from "react"
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import {AppStateType} from "../Redux/ReduxStore";

export function WithAuthHOC<T>(Component: ComponentType<T>) {

    const ComponentWithAuth = (props: any) => {
        let isAuth = useSelector((state: AppStateType) => state.authUser.isAuth)

        if (!isAuth) {
            return <Navigate to={"/login"}/>
        }
        return <Component {...props}/>
    }
    return ComponentWithAuth
}
import React, {ComponentType} from "react"
import {useSelector} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {Redirect} from "react-router-dom";

export function WithAuthHOC <T>(Component: ComponentType<T>) {

    const ComponentWithAuth = (props: any) => {
        let isAuth = useSelector((state: AppStateType) => state.authUser.isAuth)

        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...props}/>
    }
    return ComponentWithAuth
}
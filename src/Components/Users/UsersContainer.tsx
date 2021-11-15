import React, {useEffect} from "react";
import {AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import Users, {UsersPropsType} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/Reducers/UsersReducer";
import * as axios from "axios";

const UsersContainer = (props: UsersPropsType) => {

    useEffect(() => {
        if (props.users.length === 0) {
            // @ts-ignore
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => props.setUsersAC(response.data.items))
        }
    }, [])

    return (
        <Users {...props}/>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {followAC, unfollowAC, setUsersAC})(UsersContainer)
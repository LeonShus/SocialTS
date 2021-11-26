import React from "react";
import {MessageType, sendNewMessageActionCreator, UsersType} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";

type MapStateToPropsType = {
    messages: Array<MessageType>
    users: Array<UsersType>
}
type MapDispatchToPropsType = {
    sendMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         sendMessage: (text: string) => {
//             dispatch(sendNewMessageActionCreator(text))
//         }
//     }
// }

export default connect<MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType>(mapStateToProps,
    {sendMessage: sendNewMessageActionCreator})(Dialogs)
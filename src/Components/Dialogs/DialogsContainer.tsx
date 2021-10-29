import React from "react";
import {sendNewMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect, DefaultRootState} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";


const mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    sendMessage: (text: string) => void
}


// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         sendMessage: (text: string) => {
//             dispatch(sendNewMessageActionCreator(text))
//         }
//     }
// }

export default connect(mapStateToProps,
    {sendMessage: sendNewMessageActionCreator})(Dialogs)
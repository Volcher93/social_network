import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
        // updateNewMessageBody: (body) => {
            // dispatch(updateNewMessageBodyCreator(body))
            dispatch(sendMessageCreator())

        },
        sendMessage: (body) => {
            // dispatch(sendMessageCreator())
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
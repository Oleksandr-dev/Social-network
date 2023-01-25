import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const mapStateToProps = (state)=>{
    return {
        dialogsElements: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: ()=>{dispatch(addMessageActionCreator())},
        updateNewMessage: (text)=>{dispatch(updateNewMessageTextActionCreator(text))},
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer
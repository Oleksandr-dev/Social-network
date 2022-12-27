import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
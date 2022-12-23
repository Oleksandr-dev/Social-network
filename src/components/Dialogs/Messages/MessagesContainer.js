import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const MessagesContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let updateNewMessage = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Messages
        messageData={props.store.getState().dialogsPage.messageData}
        newMessageText={props.store.getState().dialogsPage.newMessageText}
        sendMessage={sendMessage}
        updateNewMessage={updateNewMessage}

    />/*(
        <div className={style.messageArea}>
            <MessageHeader />
            <MessageArea messageData={props.messageData}/>
            <MessageTextArea
                newMessageText={props.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )*/
}

export default MessagesContainer
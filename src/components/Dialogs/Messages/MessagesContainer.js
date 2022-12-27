import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";
import Contacts from "../Contacts/Contacts";

const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let updateNewMessage = (text) =>{
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return <Messages
                    messageData={store.getState().dialogsPage.messageData}
                    newMessageText={store.getState().dialogsPage.newMessageText}
                    sendMessage={sendMessage}
                    updateNewMessage={updateNewMessage}

                />
            }}
        </StoreContext.Consumer>
    )

    /*(
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
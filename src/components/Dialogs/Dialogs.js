import style from "./Dialogs.module.css"
import Messages from "./Messages/Messages";
import Contacts from "./Contacts/Contacts";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Contacts dialogsElements={props.dialogsElements}/>
            <Messages messageData={props.messageData}
                      newMessageText={props.newMessageText}
                      sendMessage={props.sendMessage}
                      updateNewMessage={props.updateNewMessage}
            />
        </div>
    )
}

export default Dialogs
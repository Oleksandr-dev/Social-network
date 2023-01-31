import style from "./Dialogs.module.css"
import Messages from "./Messages/Messages";
import Contacts from "./Contacts/Contacts";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <Contacts dialogsElements={props.dialogsElements}/>
            <Messages messageData={props.messageData}
                      sendMessage={props.sendMessage}/>
        </div>
    )
}

export default Dialogs
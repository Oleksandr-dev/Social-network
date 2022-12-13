import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Messages/MessageArea/Message/Message";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    /*debugger*/
    let dialogsElements = props.dialogsPageState.dialogsData.map(d => (<Contact name={d.name} id={d.id} img={d.img}/>))
    /*let messageElements = props.dialogsPageState.messageData.map(m => (
        <Message message={m.message} senderId={m.senderId}/>))*/

    return (
        <div className={style.dialogs}>
            <div className={style.contacts}>
                {dialogsElements}
            </div>
            {/*<div className={style.messageArea}>
                {messageElements}
            </div>*/}
            <div className={style.messageArea}>
                <Messages messageData={props.dialogsPageState.messageData} addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Dialogs
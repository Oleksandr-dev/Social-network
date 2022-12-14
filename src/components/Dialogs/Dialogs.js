import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageState.dialogsData.map(d => (<Contact name={d.name} id={d.id} img={d.img}/>))


    return (
        <div className={style.dialogs}>
            <div className={style.contacts}>
                {dialogsElements}
            </div>
            <div className={style.messageArea}>
                <Messages
                    messageData={props.dialogsPageState.messageData}
                    newMessageText={props.dialogsPageState.newMessageText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Dialogs
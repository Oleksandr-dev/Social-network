import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const Dialogs = (props) =>{

    let dialogsElements = props.dialogsData.map( d => (<Contact name={d.name} id={d.id} />) )
    let messageElements = props.messageData.map( m => (<Message message={m.message} />) )

    return(
        <div className={style.dialogs}>
            <div className={style.contacts}>
                { dialogsElements }
            </div>
            <div>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs
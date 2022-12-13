import style from "./MessageArea.module.css"
import Message from "./Message/Message";

const MessageArea = (props) => {
    /*debugger*/
    let messageElements = props.messageData.map(m => (
        <Message message={m.message} senderId={m.senderId}/>))

    return (
        <div>
            <div className={style.messageArea}>
                {messageElements}
            </div>
        </div>
        /*<div className={style.dialogs}>

            <div className={style.messageArea}>
                <div className={style.messageArea}>
                    {messageElements}
                </div>
                <div className={style.textArea}>
                    <textarea className={style.area}></textarea>
                    <button className={style.btnAdd}>Send message</button>
                </div>
            </div>
        </div>*/
    )
}

export default MessageArea
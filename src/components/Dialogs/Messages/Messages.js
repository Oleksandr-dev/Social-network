import style from "./Messages.module.css"
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageArea from "./MessageArea/MessageArea";
import MessageTextArea from "./MessageTextArea/MessageTextArea";

const Messages = (props) => {
    /*debugger*/

    return (
        <div className={style.messageArea}>
            <MessageHeader />
            <MessageArea messageData={props.messageData}/>
            <MessageTextArea addMessage={props.addMessage}/>
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

export default Messages
import style from "./MessageTextArea.module.css"
import React from "react";

const MessageTextArea = (props) => {
    /*debugger*/

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let text = newMessageElement.current.value
        props.addMessage(text)
    }

    return (
        <div className={style.textArea}>
            <textarea className={style.area} ref={newMessageElement}></textarea>
            <button className={style.btnAdd} onClick={sendMessage}>Send message</button>
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

export default MessageTextArea
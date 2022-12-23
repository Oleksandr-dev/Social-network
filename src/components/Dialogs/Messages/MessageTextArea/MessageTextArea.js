import style from "./MessageTextArea.module.css"
import React from "react";


const MessageTextArea = (props) => {

    let onSendMessage = () => {
        if (props.newMessageText === '') return
        props.sendMessage()
    }

    let onUpdateNewMessage = (e) =>{
        props.updateNewMessage(e.target.value)
    }

    return (
        <div className={style.textArea}>
            <textarea
                className={style.area}
                onChange={onUpdateNewMessage}
                value={props.newMessageText}
            ></textarea>
            <button
                className={style.btnAdd}
                onClick={onSendMessage}>Send message</button>
        </div>
    )
}

export default MessageTextArea
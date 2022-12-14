import style from "./MessageTextArea.module.css"
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

const MessageTextArea = (props) => {

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let text = newMessageElement.current.value
        if (text === '') return
        props.dispatch(addMessageActionCreator())
    }

    let updateNewMessage = () =>{
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={style.textArea}>
            <textarea
                className={style.area}
                ref={newMessageElement}
                onChange={updateNewMessage}
                value={props.newMessageText}
            ></textarea>
            <button
                className={style.btnAdd}
                onClick={sendMessage}>Send message</button>
        </div>
    )
}

export default MessageTextArea
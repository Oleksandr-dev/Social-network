import style from "./Messages.module.css"
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageArea from "./MessageArea/MessageArea";
import MessageTextArea from "./MessageTextArea/MessageTextArea";
import React from "react";

const Messages = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.sendMessage(formData.messageBoxTextArea)
    }
    return (
        <div className={style.messageArea}>
            <MessageHeader/>
            <MessageArea messageData={props.messageData}/>
            <MessageTextArea onSubmit={onSubmit}/>
        </div>
    )
}

export default Messages
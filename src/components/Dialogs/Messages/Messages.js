import style from "./Messages.module.css"
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageArea from "./MessageArea/MessageArea";
import MessageTextArea from "./MessageTextArea/MessageTextArea";
import React from "react";

const Messages = (props) => {
    return (
        <div className={style.messageArea}>
            <MessageHeader/>
            <MessageArea messageData={props.messageData}/>
            <MessageTextArea newMessageText={props.newMessageText}
                             sendMessage={props.sendMessage}
                             updateNewMessage={props.updateNewMessage}/>
        </div>
    )
}

export default Messages
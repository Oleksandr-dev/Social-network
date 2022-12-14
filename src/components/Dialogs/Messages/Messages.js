import style from "./Messages.module.css"
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageArea from "./MessageArea/MessageArea";
import MessageTextArea from "./MessageTextArea/MessageTextArea";

const Messages = (props) => {

    return (
        <div className={style.messageArea}>
            <MessageHeader />
            <MessageArea messageData={props.messageData}/>
            <MessageTextArea
                newMessageText={props.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Messages
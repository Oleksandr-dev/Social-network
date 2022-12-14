import style from "./MessageArea.module.css"
import Message from "./Message/Message";

const MessageArea = (props) => {

    let messageElements = props.messageData.map(m => (
        <Message message={m.message} senderId={m.senderId}/>))

    return (
        <div>
            <div className={style.messageArea}>
                {messageElements}
            </div>
        </div>

    )
}

export default MessageArea
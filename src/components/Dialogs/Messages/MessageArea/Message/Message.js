import style from "./Message.module.css";


const Message = (props) => {
    return (
            <div className={props.senderId === 0 ? style.myMessage : style.notMyMessage}>
                <div>{props.message}</div>
            </div>

    )
}

export default Message
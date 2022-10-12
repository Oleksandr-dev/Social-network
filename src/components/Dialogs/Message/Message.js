import style from "./Message.module.css";


const Message = (props) => {
    return (
        <div className={style.message}>
            <div>{props.message}</div>
        </div>
    )
}

export default Message
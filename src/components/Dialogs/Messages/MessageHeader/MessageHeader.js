import style from "./MessageHeader.module.css"


const MessageHeader = (props) => {


    return (
        <div className={style.messageArea}>
            Sasha
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

export default MessageHeader
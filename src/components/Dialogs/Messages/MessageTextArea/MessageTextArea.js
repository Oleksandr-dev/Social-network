import style from "./MessageTextArea.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";


const MessageTextArea = (props) => {

    return (
        //<div className={style.textArea}>
            <form onSubmit={props.handleSubmit}>
                <div className={style.textArea}>
                <Field name={"messageBoxTextArea"}
                       component={"textarea"}
                       className={style.area}
                       placeholder={"Enter new message"}/>
                <button className={style.btnAdd}>Send message</button>
                </div>
            </form>
       // </div>
    )
}

const MessageTextAreaReduxForm = reduxForm({form: "MessageReduxForm"})(MessageTextArea)
export default MessageTextAreaReduxForm
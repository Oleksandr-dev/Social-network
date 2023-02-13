import style from "./MessageTextArea.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../utilits/InputValidateComponent";
import {maxLengthCreator, required} from "../../../utilits/validators";

let maxLength50 = maxLengthCreator(50)
const MessageTextArea = (props) => {

    return (
        //<div className={style.textArea}>
            <form onSubmit={props.handleSubmit}>
                <div className={style.textArea}>
                <Field name={"messageBoxTextArea"}
                       component={Textarea}
                       validate={[required, maxLength50]}
                       //className={style.area}
                       placeholder={"Enter new message"}/>
                <button className={style.btnAdd}>Send message</button>
                </div>
            </form>
       // </div>
    )
}

const MessageTextAreaReduxForm = reduxForm({form: "MessageReduxForm"})(MessageTextArea)
export default MessageTextAreaReduxForm
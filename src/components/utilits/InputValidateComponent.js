import style from "./InputValidateComponent.module.css"
/*
export const InputValidateComponent = (props) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}*/

//import warning from "react-redux/es/utils/warning";

export const Textarea = (props) => {
    let {touched, error} = props.meta
    let hasError = touched && error
    return (
        <>
            <div className={style.formControl + ' ' + (hasError && style.error)}>
                <textarea {...props.input} />
            </div>
            <div>
                {hasError && <span className={style.spanError}>{error}</span>}
            </div>
        </>
    )
}
export const Input = (props) => {
    let {touched, error} = props.meta
    let hasError = touched && error
    return (
        <>
            <div className={style.formControlInput + ' ' + (hasError && style.error)}>
                <input {...props.input} {...props} />
            </div>
            <div>
                {hasError && <span className={style.spanError}>{error}</span>}
            </div>
        </>
    )
}
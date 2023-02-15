import {Field, reduxForm} from "redux-form";
import {Input} from "../utilits/InputValidateComponent";
import {required} from "../utilits/validators";
import style from "../utilits/InputValidateComponent.module.css"

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>login</label>
                <div>
                    <Field component={Input}
                           name={"email"}
                           validate={[required]}
                           placeholder={"login"}/>
                </div>
                <label>Password</label>
                <div>
                    <Field component={Input}
                           name={"password"}
                           validate={[required]}
                           type={"password"}
                           placeholder={"password"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <button>Login</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

export default LoginReduxForm
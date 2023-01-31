import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>login</label>
                <div>
                    <Field component={"input"} name={"email"} placeholder={"login"}/>
                </div>
                <label>Password</label>
                <div>
                    <Field component={"input"} name={"password"} placeholder={"password"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

export default LoginReduxForm
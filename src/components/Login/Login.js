import LoginForm from "./LoginForm";

const Login = (props) => {
    const onSubmit =(formData) => {
        console.log(formData)
        props.logInProfileThunk(formData, props.getProfile)
        /*API.auth.loginUser(formData).then(responce => {
                console.log(responce)
                if(responce.resultCode === 0){
                    console.log("result is 0")
                    getProfile()
                }else {
                    alert("something wrong")
                }
            }
        )*/
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login
//import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {withAuthReverseRedirect} from "../../HOC/withAuthReverseRedirect";
import withRouter from "../../HOC/withRouter";
import {getProfileInfoThunk} from "../../redux/profileReducer";


/*const LoginFirstContainer = (props) => {


    const navigate = useNavigate();
    if(props.isAuth){
        navigate(-1)
    }
    return <Login/>

}*/
/*class LoginAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : 27521
        this.props.getProfileInfoThunk(userId)
    }
    render() {
        return <Login {...this.props}/>
    }
}*/

const AuthReverseRedirectComponent = withAuthReverseRedirect(Login)
const WithURLDataContainer = withRouter(AuthReverseRedirectComponent)

const mapStateToProps = (state) => {
    return {
    }
}

const LoginContainer = connect(mapStateToProps, {getProfileInfoThunk})(WithURLDataContainer)
export default LoginContainer
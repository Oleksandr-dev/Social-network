//import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {withAuthReverseRedirect} from "../../HOC/withAuthReverseRedirect";
import withRouter from "../../HOC/withRouter";
import {getProfileInfoThunk} from "../../redux/profileReducer";
import {compose} from "redux";


/*class LoginAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : 27521
        this.props.getProfileInfoThunk(userId)
    }
    render() {
        return <Login {...this.props}/>
    }
}*/

const mapStateToProps = (state) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, {getProfileInfoThunk}),
    withRouter,
    withAuthReverseRedirect,
)(Login)

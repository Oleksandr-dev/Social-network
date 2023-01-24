import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getProfile} from "../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile()
    }

    render() {
        return <Header {...this.props} />
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, {getProfile})(HeaderContainer);
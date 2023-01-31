import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getProfile, logOutProfileThunk} from "../../redux/authReducer";
import {compose} from "redux";


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


export default compose(
    connect(mapStateToProps, {getProfile, logOutProfileThunk}),
)(HeaderContainer)
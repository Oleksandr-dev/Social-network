import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {compose} from "redux";

class NavbarClassContainer extends React.Component {
    render() {
        return <Navbar/>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(NavbarClassContainer)

import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

class NavbarClassContainer extends React.Component {
    render() {
        return <Navbar/>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, {})(NavbarClassContainer)

export default NavbarContainer;
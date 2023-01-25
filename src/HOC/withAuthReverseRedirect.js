import React from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export const withAuthReverseRedirect = (Component) => {
    let RedirectComponent = (props) => {
        const navigate = useNavigate();
        if(props.isAuth){
            navigate(-1)
        }
        return <Component {...props} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
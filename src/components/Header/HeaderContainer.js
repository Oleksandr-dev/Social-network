import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUser} from "../redux/authReducer";


class HeaderContainer extends React.Component{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(responce => {
            let {email, id, password} = responce.data.data
            this.props.setAuthUser(id, email, password)
            console.log(responce.data)
            if (email) {
                alert(email)
            }else{
                alert(responce.data.message[0])
            }
            //this.props.
                /*this.props.setUsersShowMore(responce.data.items)
                this.props.toggleIsFetching(false)*/
            }
        )
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

export default connect(mapStateToProps, {
    setAuthUser
})(HeaderContainer);
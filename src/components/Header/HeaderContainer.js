import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUser} from "../redux/authReducer";
import {API} from "../DAL/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        API.auth.getUser().then(responce => {
                let {email, id, password} = responce.data

                console.log(responce)
                if (email) {
                    console.log("email")
                    this.props.setAuthUser(id, email, password)
                    alert(email)
                } else {
                    console.log("not email")
                    alert(responce.messages[0])
                }
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

export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);
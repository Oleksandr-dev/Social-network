import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getProfileInfoThunk} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import withRouter from "../../../HOC/withRouter";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";


// eslint-disable-next-line no-undef
class ProfileInfoAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : 27521
        this.props.getProfileInfoThunk(userId)
    }

    render() {
        if (this.props.profile == null) {
            return <Preloader/>
        }
        return (<ProfileInfo {...this.props.profile}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileInfoAPIContainer)

let withURLProfileContainer = withRouter(AuthRedirectComponent)

const ProfileInfoContainer = connect(mapStateToProps, {
    getProfileInfoThunk,
})(withURLProfileContainer)

export default ProfileInfoContainer;
import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getProfileInfoThunk} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import withRouter from "../../../HOC/withRouter";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, {getProfileInfoThunk,}),
    withRouter,
    withAuthRedirect,
)(ProfileInfoAPIContainer)
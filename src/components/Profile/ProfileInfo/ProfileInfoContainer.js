import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getProfileInfoThunk, getProfileStatusThunk, updateProfileStatusThunk} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import withRouter from "../../../HOC/withRouter";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


// eslint-disable-next-line no-undef
class ProfileInfoAPIContainer extends React.Component {
    state = {
        userId: this.props.router.params.userId ? this.props.router.params.userId : 27521,
    }

    componentDidMount() {
        //let userId = this.props.router.params.userId ? this.props.router.params.userId : 27521
        this.props.getProfileInfoThunk(this.state.userId)
        this.props.getProfileStatusThunk(this.state.userId)
    }
    /*componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            this.setState({userId: this.props.router.params.userId})
        }
    }*/

    render() {
        if (this.props.profile == null) {
            return <Preloader/>
        }
        return (<ProfileInfo {...this.props.profile}
                             status={this.props.status}
                             updateProfileStatus={this.props.updateProfileStatusThunk}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileInfoThunk,
        getProfileStatusThunk,
        updateProfileStatusThunk,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileInfoAPIContainer)
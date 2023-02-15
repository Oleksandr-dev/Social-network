import React from "react";
import {connect} from "react-redux";
import {
    addPost,
    getProfileInfoThunk,
    getProfileStatusThunk,
    updateProfileStatusThunk
} from "../../redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
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
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        postElements: state.profilePage.postData,

    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileInfoThunk,
        getProfileStatusThunk,
        updateProfileStatusThunk,
        addPost,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

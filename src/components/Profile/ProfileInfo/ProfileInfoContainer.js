import React from "react";
import styles from "../Profile.module.css"
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import Profile from "../Profile";
import axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import Preloader from "../../common/Preloader";

// eslint-disable-next-line no-undef
class ProfileInfoAPIContainer extends React.Component {

    componentDidMount() {
        if (this.props.profile == null) {
            //this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(responce => {
                this.props.setProfile(responce.data)
                /*this.props.setUsers(responce.data.items)
                    this.props.setTotalUsersCount(responce.data.totalCount)*/
                    //this.props.toggleIsFetching(false)
                }
            )
        }
    }

    /*console.log("profile")*/
    render() {
        if(this.props.profile == null ){
            return <Preloader />
        }
        return (<ProfileInfo {...this.props.profile}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

const ProfileInfoContainer = connect(mapStateToProps, {
    setProfile,
})(ProfileInfoAPIContainer)

export default ProfileInfoContainer;
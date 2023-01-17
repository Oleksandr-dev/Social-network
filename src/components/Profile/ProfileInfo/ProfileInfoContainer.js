import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


// eslint-disable-next-line no-undef
class ProfileInfoAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : 2
        console.log(userId)
        console.log(this.props)
        //if (this.props.profile === null || this.props.profile.userId != userId) {
            //this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(responce => {
                this.props.setProfile(responce.data)
                /*this.props.setUsers(responce.data.items)
                    this.props.setTotalUsersCount(responce.data.totalCount)*/
                    //this.props.toggleIsFetching(false)
                }
            )
       // }
    }

    /*console.log("profile")*/
    render() {
        console.log(this.props)
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

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let withURLProfileContainer = withRouter(ProfileInfoAPIContainer)

const ProfileInfoContainer = connect(mapStateToProps, {
    setProfile,
})(withURLProfileContainer)

export default ProfileInfoContainer;
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsers, unfollowAC} from "../../redux/findUsersReducer";
import UsersC from "./UsersC";


const mapStateToProps = (state)=>{
    return {
        users: state.findUsersPage.users,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        followUser: (id)=>{dispatch(followAC(id))},
        unfollowUser: (id)=>{dispatch(unfollowAC(id))},
        setUsers: (users)=>{dispatch(setUsers(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer
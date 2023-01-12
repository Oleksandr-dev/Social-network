import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    setUsersShowMoreAC,
    unfollowAC
} from "../../redux/findUsersReducer";
import UsersC from "./UsersC";


const mapStateToProps = (state)=>{
    return {
        users: state.findUsersPage.users,
        currentPage: state.findUsersPage.currentPage,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        pageSize: state.findUsersPage.pageSize,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        followUser: (id)=>{dispatch(followAC(id))},
        unfollowUser: (id)=>{dispatch(unfollowAC(id))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
        setUsersShowMore: (users)=>{dispatch(setUsersShowMoreAC(users))},
        setTotalUsersCount: (totalUsersCount)=>{dispatch(setTotalUsersCountAC(totalUsersCount))},
        setCurrentPage: (newCurrentPage)=>{dispatch(setCurrentPageAC(newCurrentPage))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer
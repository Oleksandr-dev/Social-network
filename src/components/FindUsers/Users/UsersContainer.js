import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsersThunk,
    navigationThunk,
    showMoreThunk,
    unfollowThunk,
    followThunk,
} from "../../../redux/findUsersReducer";
import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    usersElements = () => {
        return (
            this.props.users.map(u => (
                <User
                    key={u.id}
                    userInfo={u}
                    followingInProgress={this.props.followingInProgress}
                    unfollowThunk={this.props.unfollowThunk}
                    followThunk={this.props.followThunk}
                />)
            )
        )
    }

    onPageChanged = (currentNumber) => {
        if (currentNumber >= 1 && currentNumber <= Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this.props.navigationThunk(currentNumber, this.props.pageSize)
        }
    }

    navigationEl = () => {
        let pageNumbers = []
        const endPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const firstPage = 1
        switch (true) {
            case this.props.currentPage <= firstPage + 3: {
                for (let i = firstPage; i <= this.props.currentPage + 2; i++) {
                    pageNumbers.push(i)
                }
                return [
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage - 1)
                          }}> {'<'} </span>,
                    ...pageNumbers.map((n) => {
                        return <span className={this.props.currentPage === n ? styles.selected : styles.unselected}
                                     onClick={() => {
                                         this.onPageChanged(n)
                                     }}> {n} </span>
                    }),
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage + 3)
                          }}> ... </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(endPage)
                          }}> {endPage} </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage + 1)
                          }}> {'>'} </span>,
                ]
            }
            case this.props.currentPage >= endPage - 3: {
                for (let i = this.props.currentPage - 2; i <= endPage; i++) {
                    pageNumbers.push(i)
                }
                return [
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage - 1)
                          }}> {'<'} </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(firstPage)
                          }}> {firstPage} </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage - 3)
                          }}> ... </span>,
                    ...pageNumbers.map((n) => {
                        return <span
                            className={this.props.currentPage === n ? styles.selected : styles.unselected}
                            onClick={() => {
                                this.onPageChanged(n)
                            }}> {n} </span>
                    }),
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage + 1)
                          }}> {'>'} </span>,
                ]
            }
            default: {
                for (let i = this.props.currentPage - 2; i <= this.props.currentPage + 2; i++) {
                    pageNumbers.push(i)
                }
                return [
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage - 1)
                          }}> {'<'} </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(firstPage)
                          }}> {firstPage} </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage - 3)
                          }}> ... </span>,

                    ...pageNumbers.map((n) => {
                        return <span className={this.props.currentPage === n ? styles.selected : styles.unselected}
                                     onClick={() => {
                                         this.onPageChanged(n)
                                     }}> {n} </span>
                    }),

                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage + 3)
                          }}> ... </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(endPage)
                          }}> {endPage} </span>,
                    <span className={styles.unselected}
                          onClick={() => {
                              this.onPageChanged(this.props.currentPage + 1)
                          }}> {'>'} </span>,
                ]
            }
        }
    }

    onShowMore = () => {
        if (this.props.currentPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this.props.showMoreThunk(this.props.currentPage, this.props.pageSize)
        }
    }

    render() {
        return (
            <Users
                navigationEl={this.navigationEl}
                usersElements={this.usersElements}
                onShowMore={this.onShowMore}
                isFetching={this.props.isFetching}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        currentPage: state.findUsersPage.currentPage,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        pageSize: state.findUsersPage.pageSize,
        isFetching: state.findUsersPage.isFetching,
        followingInProgress: state.findUsersPage.followingInProgress,
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followAC(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersShowMore: (users) => {
            dispatch(setUsersShowMoreAC(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (newCurrentPage) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },

    }
}*/

const UsersContainer = connect(mapStateToProps, {
    getUsersThunk,
    navigationThunk,
    showMoreThunk,
    unfollowThunk,
    followThunk
})(UsersAPIContainer)

export default UsersContainer


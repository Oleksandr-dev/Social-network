import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setUsersShowMore,
    unfollow,
    toggleIsFetching
} from "../../redux/findUsersReducer";
import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import {API} from "../../DAL/api";


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            API.users.getUsers(this.props.currentPage, this.props.pageSize).then(responce => {
                    this.props.setUsers(responce.items)
                    this.props.setTotalUsersCount(responce.totalCount)
                    this.props.toggleIsFetching(false)
                }
            )
        }
    }

    usersElements = () => {
        return (
            this.props.users.map(u => (
                <User
                    key={u.id}
                    userInfo={u}
                    followUser={this.props.follow}
                    unfollowUser={this.props.unfollow}
                />)
            )
        )
    }

    onPageChanged = (currentNumber) => {
        if (currentNumber >= 1 && currentNumber <= Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this.props.toggleIsFetching(true)
            this.props.setCurrentPage(currentNumber)
            API.users.getUsers(currentNumber, this.props.pageSize).then(responce => {
                    this.props.setUsers(responce.items)
                    this.props.toggleIsFetching(false)
                }
            )
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
            this.props.toggleIsFetching(true)
            this.props.setCurrentPage(this.props.currentPage + 1)
            API.users.getUsers(this.props.currentPage + 1, this.props.pageSize).then(responce => {
                    this.props.setUsersShowMore(responce.items)
                    this.props.toggleIsFetching(false)
                }
            )

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
    follow,
    unfollow,
    setUsers,
    setUsersShowMore,
    setTotalUsersCount,
    setCurrentPage,
    toggleIsFetching,
})(UsersAPIContainer)

export default UsersContainer


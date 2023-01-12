import styles from "./Users.module.css"
import User from "./User/User";
import axios from "axios";
import React from "react";

/*import * as axios from "axios"*/


class UsersC extends React.Component {
    /*constructor(props) {
        super(props);
        if(this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
                    this.props.setUsers(responce.data.items)
                }
            )
        }
        /!*console.log("constructor")*!/
    }*/

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
                    this.props.setUsers(responce.data.items)
                    this.props.setTotalUsersCount(responce.data.totalCount)
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
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    /*id={u.id}
                    userName={u.userName}
                    img={u.img}
                    status={u.status}
                    location={u.location}
                    followersId={u.followersId}*/
                />)
            )
        )
    }

    onPageChanged = (currentNumber) => {
        if (currentNumber >= 1 && currentNumber <= Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this.props.setCurrentPage(currentNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`).then(responce => {
                    this.props.setUsers(responce.data.items)
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

            this.props.setCurrentPage(this.props.currentPage + 1)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`).then(responce => {
                    this.props.setUsersShowMore(responce.data.items)

                }
            )
        }
        /*this.props.setUsersShowMore([
            {
                id:1,
                userName: 'Sasha K',
                img: "https://media.2x2tv.ru/content/images/size/w1440h1080/2021/10/---2.jpg",
                status:'I am boss',
                location: {
                    country:'Ukraine',
                    city:'Shymsk',
                },
                followersId:[0, 2,],
                followed: true,
            },
            {
                id:2,
                userName: 'Frost',
                img: "https://i2-prod.mirror.co.uk/incoming/article26332089.ece/ALTERNATES/s1200b/0_Peaky-Blinders.jpg",
                status:'I am boss',
                location: {
                    country:'Ukraine',
                    city:'Lviv',
                },
                followersId:[1, 3,],
                followed: false,
            },
            {
                id:3,
                userName: 'Dima K',
                img: "",
                status:'I am boss1',
                location: {
                    country:'USA',
                    city:'Solon',
                },
                followersId:[0,],
                followed: true,
            },
        ])*/
    }

    render() {
        /*console.log("render usersC")*/
        return (
            <div className={styles.users}>
                <div className={styles.navigationEl}>
                    {this.navigationEl()}
                </div>
                {this.usersElements()}
                <button onClick={() => {
                    this.onShowMore()
                }} className={styles.btnseemore}>Show more
                </button>
                <div className={styles.navigationEl}>
                    {this.navigationEl()}
                </div>
            </div>
        )
    }
}

export default UsersC

/*
const Users = (props) =>{
    debugger
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            debugger
                props.setUsers(responce.data.items)
            }
        )
    }

    let usersElements = props.users.map(u => (
        <User
            key={u.id}
            userInfo={u}
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            /!*id={u.id}
            userName={u.userName}
            img={u.img}
            status={u.status}
            location={u.location}
            followersId={u.followersId}*!/
        />)
    )

    let seeMore = () => {
        props.setUsers(usersToSet)
    }

    return (
        <div className={styles.users}>
            {usersElements}
            <button onClick={seeMore} className={styles.btnseemore}>see more</button>
        </div>
    )
}

*/

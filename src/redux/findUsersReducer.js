import {API} from "../DAL/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_SHOW_MORE = 'SET_USERS_SHOW_MORE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [
        /*{
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
            status:'I am boss',
            location: {
                country:'USA',
                city:'Solon',
            },
            followersId:[0,],
            followed: true,
        },*/
    ],
    currentPage: 1,
    totalUsersCount: 22478,
    pageSize: 5,
    isFetching: false,
    followingInProgress:[],
}

const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                        /*return {
                            ...u,
                            followersId: [
                                ...u.followersId,
                                0,
                            ]
                        }*/
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                        /*return {
                            ...u,
                            followersId: [...u.followersId.filter(id => id !== 0),]
                        }*/
                    }
                    return u
                }),
            }
        case SET_USERS:
            /*console.log("set users reducer")*/
            return {...state, users: action.users}
        case SET_USERS_SHOW_MORE:
            /*console.log("set users reducer")*/
            return {...state, users: [...state.users, ...action.users]}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.isFetchingFollow
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id!==action.id)
            }
        default:
            return state
    }
}

export default findUsersReducer

export const follow = (id) => ({type: FOLLOW, id,})
export const unfollow = (id) => ({type: UNFOLLOW, id,})
export const setUsers = (users) => ({type: SET_USERS, users,})
export const setUsersShowMore = (users) => ({type: SET_USERS_SHOW_MORE, users,})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount,})
export const setCurrentPage = (newCurrentPage) => ({type: SET_CURRENT_PAGE, currentPage: newCurrentPage,})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching,})
export const followIsFetching = (isFetchingFollow, id) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetchingFollow, id})

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        API.users.getUsers(currentPage, pageSize).then(responce => {
                dispatch(setUsers(responce.items))
                dispatch(setTotalUsersCount(responce.totalCount))
                dispatch(toggleIsFetching(false))
            }
        )
    }
}
export const navigationThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        API.users.getUsers(currentPage, pageSize).then(responce => {
                dispatch(setUsers(responce.items))
                dispatch(toggleIsFetching(false))
            }
        )
    }
}
export const showMoreThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage + 1))
        API.users.getUsers(currentPage + 1, pageSize).then(responce => {
                dispatch(setUsersShowMore(responce.items))
                dispatch(toggleIsFetching(false))
            }
        )
    }
}
export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(followIsFetching(true, id))
        API.users.unfollowUser(id).then(responce => {
            if (responce.data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(followIsFetching(false, id))
            }
        )
    }
}
export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(followIsFetching(true, id))
        API.users.followUser(id).then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(followIsFetching(false, id))

            }
        )
    }
}


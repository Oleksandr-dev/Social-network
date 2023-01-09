const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export default findUsersReducer

export const followAC = (id) => ({type: FOLLOW, id,})
export const unfollowAC = (id) => ({type: UNFOLLOW, id,})
export const setUsers = (users) => ({type: SET_USERS, users,})

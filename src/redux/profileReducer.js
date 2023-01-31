import {API} from "../DAL/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postData: [
        {id: 1, message: "It's my first post", likeCount: 51},
        {id: 2, message: "Hi, how are You?", likeCount: 101},

    ],
    profile: null,
    status: "Hi, I am status"
}

const profileReducer = (profilePage = initialState, action) => {
    /*debugger*/
    switch (action.type) {
        case ADD_POST: {
            return {
                ...profilePage,
                postData: [
                    ...profilePage.postData,
                    {
                        id: 5,
                        message: action.newPostText,
                        likeCount: 0,
                    }
                ],
            }
        }
        case SET_STATUS: {
            return {
                ...profilePage,
                status: action.status,
            }
        }
        case SET_PROFILE: {
            return {
                ...profilePage,
                profile: action.profile,
            }
        }
        default :
            return profilePage

    }
}


export default profileReducer

//Action creators

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfileInfoThunk = (userId) => {
    return (dispatch) => {
        API.profile.getProfileInfo(userId).then(responce => {
                dispatch(setProfile(responce))
            }
        )
    }
}

export const getProfileStatusThunk = (userId) => {
    return (dispatch) => {
        API.profile.getProfileStatus(userId).then(responce => {
                dispatch(setStatus(responce))
            }
        )
    }
}
export const updateProfileStatusThunk = (status) => {
    return (dispatch) => {
        API.profile.putProfileStatus(status).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setStatus(status))
            } else {
                alert(responce.message)
            }
        })
    }
}
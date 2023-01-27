import {API} from "../DAL/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are You?", likeCount: 101},
        {id: 2, message: "It's my first post", likeCount: 51},
    ],
    newPostText: 'My new post',
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
                        message: profilePage.newPostText,
                        likeCount: 0,
                    }
                ],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...profilePage,
                newPostText: action.newText,
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

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText,})
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
                console.log(`getStatus responce${responce}`)
                console.log(responce)
                dispatch(setStatus(responce))
            }
        )
    }
}
export const updateProfileStatusThunk = (status) => {
    return (dispatch) => {
        API.profile.putProfileStatus(status).then(responce => {
            console.log(responce)
            console.log(status)
            if (responce.data.resultCode === 0) {
                dispatch(setStatus(status))
                console.log("responce is ok")
            } else {
                alert(responce.message)
            }
        })
    }
}
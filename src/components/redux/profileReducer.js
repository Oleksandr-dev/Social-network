const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are You?", likeCount: 101},
        {id: 2, message: "It's my first post", likeCount: 51},
    ],
    newPostText: 'My new post',
    profile: null,
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
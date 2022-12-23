
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are You?", likeCount: 101},
        {id: 2, message: "It's my first post", likeCount: 51},
    ],
    newPostText: 'My new post',
}

const profileReducer = (profilePage = initialState, action) => {
    /*debugger*/
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: profilePage.newPostText,
            likeCount: 0,
        }
        profilePage.postData.push(newPost);
        profilePage.newPostText = ''

    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        profilePage.newPostText = action.newText;

    }
    return profilePage
}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
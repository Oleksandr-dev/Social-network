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
        default :
            return profilePage

    }
}


export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
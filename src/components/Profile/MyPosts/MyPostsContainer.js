import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let postElements = store.getState().profilePage.postData
                let newPostText = store.getState().profilePage.newPostText

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let updateNewPost = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return < MyPosts
                    postElements={postElements}
                    newPostText={newPostText}
                    addPost={addPost}
                    updateNewPost={updateNewPost}
                />
            }}
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;
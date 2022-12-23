import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let postElements = props.store.getState().profilePage.postData
    let newPostText = props.store.getState().profilePage.newPostText


    let addPost = () =>{
        props.store.dispatch(addPostActionCreator())
    }

    let updateNewPost = (text) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts
        postElements={postElements}
        newPostText={newPostText}
        addPost={addPost}
        updateNewPost={updateNewPost}
    />
}

export default MyPostsContainer;
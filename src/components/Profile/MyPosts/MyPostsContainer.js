import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {
        postElements: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addPost: ()=>{dispatch(addPostActionCreator())},
        updateNewPost: (text)=>{dispatch(updateNewPostTextActionCreator(text))},
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";

const MyPosts = (props) => {

    let postElements = props.postData.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value
        if (text === '') return
        props.dispatch(addPostActionCreator())
    }

    let updateNewPost = () =>{
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={style.postWrapper}>
            <div>
                My posts
            </div>
            <div className={style.textPost}>
                <textarea
                    className={style.txt}
                    ref={newPostElement}
                    onChange={updateNewPost}
                    value={props.newPostText}
                ></textarea>
                <button
                    className={style.btnAdd}
                    onClick={addPost}


                >Add post</button>
                {/*<button className={style.btnDlt}>Delete post</button>*/}
            </div>
            { postElements }
        </div>
    );
}

export default MyPosts;
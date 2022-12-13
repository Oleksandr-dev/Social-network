import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postElements = props.postData.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
        <div className={style.postWrapper}>
            <div>
                My posts
            </div>
            <div className={style.textPost}>
                <textarea className={style.txt} ref={newPostElement}></textarea>
                <button className={style.btnAdd} onClick={addPost}>Add post</button>
                {/*<button className={style.btnDlt}>Delete post</button>*/}
            </div>
            { postElements }
        </div>
    );
}

export default MyPosts;
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
    /*console.log("my posts")*/
    let postElements = props.postElements.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))


    let onAddPost = () =>{
        if (props.newPostText === '') return
        props.addPost()
    }

    let onUpdateNewPost = (e) =>{
        props.updateNewPost(e.target.value)
    }

    return (
        <div className={style.postWrapper}>
            <div>
                My posts
            </div>
            <div className={style.textPost}>
                <textarea
                    className={style.txt}
                    onChange={onUpdateNewPost}
                    value={props.newPostText}
                ></textarea>
                <button
                    className={style.btnAdd}
                    onClick={onAddPost}
                >Add post</button>
                {/*<button className={style.btnDlt}>Delete post</button>*/}
            </div>
            {postElements}
        </div>
    );
}

export default MyPosts;
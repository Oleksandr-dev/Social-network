import style from "./MyPosts.module.css"
import Post from "./Post/Post";

let postData =[
    {id:1, message:"Hi, how are You?", likeCount:101},
    {id:2, message:"It's my first post", likeCount:51},
]

const MyPosts = () => {
    return (
        <div className={style.postWrapper}>
            <div>
                My posts
            </div>
            <div className={style.textPost}>
                <textarea className={style.txt}></textarea>
                <button className={style.btnAdd}>Add post</button>
                <button className={style.btnDlt}>Delete post</button>
            </div>
            <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
            <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
        </div>
    );
}

export default MyPosts;
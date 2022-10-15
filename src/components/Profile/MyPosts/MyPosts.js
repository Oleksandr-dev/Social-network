import style from "./MyPosts.module.css"
import Post from "./Post/Post";

let postData =[
    {id:1, message:"Hi, how are You?", likeCount:101},
    {id:2, message:"It's my first post", likeCount:51},
]

/*let postElements = postData.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))*/

const MyPosts = (props) => {
    let postElements = props.postData.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))
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
            { postElements }
        </div>
    );
}

export default MyPosts;
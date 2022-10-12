import styles from "./Post.module.css";

const Post = (props) =>{
    return(
        <div className={styles.item}>
            <img src='https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg' />
            <div >
                {props.message}
            </div>
            <div>
                <span>{`${props.likeCount} like `}</span>
            </div>
        </div>

    )
}

export default Post

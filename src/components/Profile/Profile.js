import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles}>
            <ProfileInfo/>
            <MyPosts
                postData={props.profilePageState.postData}
                newPostText={props.profilePageState.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
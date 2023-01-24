import styles from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = () => {
    /*console.log("profile")*/
    return (
        <div className={styles}>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
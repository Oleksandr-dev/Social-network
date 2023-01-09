import styles from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    /*console.log("profile")*/
    return (
        <div className={styles}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
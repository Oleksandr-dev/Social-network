import styles from "./Profile.module.css"
import Preloader from "../common/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    /*console.log("profile")*/

    const showProfileInfo = () => {
        if (props.profile == null) {
            return <Preloader/>
        }
        return (<ProfileInfo {...props.profile}
                             status={props.status}
                             updateProfileStatus={props.updateProfileStatusThunk}/>);
    }
    return (
        <div className={styles}>
            {showProfileInfo()}
            {}
            <MyPosts postElements={props.postElements}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
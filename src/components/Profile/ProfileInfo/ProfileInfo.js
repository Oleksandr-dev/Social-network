import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div >
                <img src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?ca=9&ce=1&s=1024x768" />
            </div>
            <div className={style.contentDescription}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo
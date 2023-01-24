import style from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {

    let contacts = [
        'Contacts:'
    ]
    for (let key in props.contacts) {
        contacts.push(
            <div>
                {key} :
                {
                    props.contacts[key] ? <a href={props.contacts[key]}> {props.contacts[key]} </a> :
                        <span>{ ' - ' }</span>
                }
            </div>
        )
    }

    let findJob = () => {
        if(props.lookingForAJob) return (
            <div>
                Шукаю роботу: {props.lookingForAJobDescription}
            </div>
        )
        return null
    }


    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?ca=9&ce=1&s=1024x768"
                    className={style.contentImg}
                    alt={""}
                />

            </div>
            <div className={style.contentDescription}>
                <div>
                    <img
                        src={props.photos.large}
                        className={style.profileImg}
                        alt={""}
                    />
                    <div>
                        {props.fullName}
                    </div><br />
                </div>
                <div className={style.contactsLink}>
                    {contacts}
                </div><br />
                {findJob()}
            </div>
        </div>
    )
}

export default ProfileInfo
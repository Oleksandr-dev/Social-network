import style from "./User.module.css";
import {NavLink} from "react-router-dom";
/*id={u.id}
userName={u.userName}
img={u.img}
status={u.status}
location={u.location}
followersId={u.followersId}*/


const User = (props) => {

    let onFollow = () => {
        props.followUser(props.userInfo.id)
    }
    let onUnfollow = () => {
        props.unfollowUser(props.userInfo.id)
    }

    let noPhoto = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwsPDw4NEBANDQ0NDgoNDw0NCg8NDg0OFREWFhURFRMYHSggGBoxGxUTITEhJSkrLi4uFx8zODM2NyguLjcBCgoKDQ0NDg0ODisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQUEAwIH/8QALxABAAEDAgMHAgYDAAAAAAAAAAECAxEEITFBURIiMmFxkbEF0UJygYKhwVJi8f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/VEFVEFAQUBBQEFAQUBBQEFAQUBBQEFAQUBBQEFARQBFRQAAAAAAAAAAAAAAAAAAAAAAAAAAAARUUAAAAAAAAAAAAAAAAAAAAAAAAAAAAEVFAAAAAAAAAB43NRRTtM79I3kHsk1RHSPWcM69q654d2PLi559/UGxFdPWPeH0xMPSm7XHCqfcGuM2jWVxx70ebts36a+HHpzB6gAAAAAAAAAAAiooAAAAAAAOXX3cRFMfi+Aeeq1X4aZ9avs4wUAAAAFpmYnMbT1QBqaa924844x/b2ZWmudmqJ5TtPo1UAAAAAAAAAAEVFAAAAAAAZerr7Vc9I7rTmcRnpuxgAFAAAAAABraerNFM/6x9mS1NL4KfT+0HsAAAAAAAAACKigAAAAAA87/AIavy1fDJa1/wVflq+GSAAoAAAAAANPReCn93yzGlovBT+75QdAAAAAAAAAAIqKAAAAAADj192qMUxtExOXC7PqMb0z6uMABQAAAAAAdehu1Z7HLE7dHI6NBHf8ASJQaQAAAAAAAAAIqKAAAAAADm19Oac9JhnNiumJiYnhMYlm6mx2Mb5ic8geICgAAAAAA7fp1Piq9Ic1i125xnG2c4adq3FMRTHL+UH2AAAAAAAAACKigAAAAAAPDV2+1TPWN4e4DFHvq7PZnMeGrePKejwUAAAAAeli1Nc45c58gdegt4p7X+Xw60iIjaOEbKgAAAAAAAAAAiooAAAAAAAIDx1sdyfLEsxpa6qIomOc4ZoACgAA7/p8d2Z6y4Hd9OqjExzyg7BFAAAAAAAAAABFRQAAAABHnc1FFPGd+kbyD0cus1FVMxTG2Yznm87uumfDGPOd5ctVUzOZnM+YJMzO87z5gKAAAABAA7NJqK5mKZ34784dzFiZjeNpdNrW1Rx70e0oNEeFvVW6ueJ6Ts9gUAAAAAAAEVFAHzXXFMZnaIZ1/VVVcO7T0B3XL9FPGd+kby5rmu/xj9Z+zjAeld+urjM+kbQ8wUAAAAAAAAAAAAH3Rdrp4TMeXJ8AOu3rp/FET6TifZ029Tbq54npOzLEGyrKs366eG8dJaNq5FUZj/k9AegAAAIqAOH6hc3ijlG8uR6amc11T549tnmoAAAAAAAAAAAAAAAAAAAAPfRXMVY5VbfryeC0ziYnpMT/INkRUAAEFAZF/xVfmq+XwCgAAAAAAAAAAAAAAAAAAAAADZUEAAH//2Q=="
    let userPhoto = props.userInfo.photos.large && props.userInfo.photos.large
    let photo = userPhoto ? userPhoto : noPhoto
    return (
        <div className={style.user}>
            <div className={style.imgBtn}>
                <NavLink to={'/'}>
                    <img src={photo}/>
                </NavLink>
                {props.userInfo.followed === true ?
                    <button onClick={onUnfollow}>Unfollow</button> :
                    <button onClick={onFollow}>Follow</button>}
                {/*{props.userInfo.followersId.includes(0) ?
                    <button onClick={onUnfollow}>Unfollow</button> :
                    <button onClick={onFollow}>Follow</button>}*/}
            </div>

            <div className={style.userinfo}>
                <div className={style.username}>
                    {/*{props.userInfo.userName}*/}
                    {props.userInfo.name}
                </div>
                <div className={style.userStatus}>
                    {props.userInfo.status}
                </div>
                <div className={style.userLocation}>
                    <div className={style.location}>
                        {'`${props.userInfo.location.country},`'}<br/><br/><br/><br/>
                        {'`${props.userInfo.location.city}`'}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User
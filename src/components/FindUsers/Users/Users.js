import styles from "./Users.module.css"
import User from "./User/User";
import axios from "axios";
/*import * as axios from "axios"*/

const usersToSet = [
    {
        id:1,
        userName: 'Sasha K',
        img: "https://media.2x2tv.ru/content/images/size/w1440h1080/2021/10/---2.jpg",
        status:'I am boss',
        location: {
            country:'Ukraine',
            city:'Shymsk',
        },
        followersId:[0, 2,],
        followed: true,
    },
    {
        id:2,
        userName: 'Frost',
        img: "https://i2-prod.mirror.co.uk/incoming/article26332089.ece/ALTERNATES/s1200b/0_Peaky-Blinders.jpg",
        status:'I am boss',
        location: {
            country:'Ukraine',
            city:'Lviv',
        },
        followersId:[1, 3,],
        followed: false,
    },
    {
        id:3,
        userName: 'Dima K',
        img: "",
        status:'I am boss1',
        location: {
            country:'USA',
            city:'Solon',
        },
        followersId:[0,],
        followed: true,
    },
]

const Users = (props) =>{
    debugger
    if(props.users.length === 0){
        /*props.setUsers([
            {
                id:1,
                userName: 'Sasha K',
                img: "https://media.2x2tv.ru/content/images/size/w1440h1080/2021/10/---2.jpg",
                status:'I am boss',
                location: {
                    country:'Ukraine',
                    city:'Shymsk',
                },
                followersId:[0, 2,],
                followed: true,
            },
            {
                id:2,
                userName: 'Frost',
                img: "https://i2-prod.mirror.co.uk/incoming/article26332089.ece/ALTERNATES/s1200b/0_Peaky-Blinders.jpg",
                status:'I am boss',
                location: {
                    country:'Ukraine',
                    city:'Lviv',
                },
                followersId:[1, 3,],
                followed: false,
            },
            {
                id:3,
                userName: 'Dima K',
                img: "",
                status:'I am boss',
                location: {
                    country:'USA',
                    city:'Solon',
                },
                followersId:[0,],
                followed: true,
            },
        ])
        debugger*/
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            debugger
                props.setUsers(responce.data.items)
            }
        )
    }

    let usersElements = props.users.map(u => (
        <User
            key={u.id}
            userInfo={u}
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            /*id={u.id}
            userName={u.userName}
            img={u.img}
            status={u.status}
            location={u.location}
            followersId={u.followersId}*/
        />)
    )

    let seeMore = () => {
        props.setUsers(usersToSet)
    }

    return (
        <div className={styles.users}>
            {usersElements}
            <button onClick={seeMore} className={styles.btnseemore}>see more</button>
        </div>
    )
}

export default Users
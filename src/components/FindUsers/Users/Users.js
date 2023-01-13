import styles from "./Users.module.css"
import React from "react";
import Preloader from "../../common/Preloader";


const Users = (props) =>{

    return (
        <div className={styles.users}>
            {props.isFetching === true ? <Preloader/> : null}
            <div className={styles.navigationEl}>
                {props.navigationEl()}
            </div>
            {props.usersElements()}
            {props.isFetching === true ? <Preloader/> : null}
            <button onClick={() => {props.onShowMore()}} className={styles.btnseemore}>
                Show more
            </button>
            <div className={styles.navigationEl}>
                {props.navigationEl()}
            </div>

        </div>
    )
}

export default Users
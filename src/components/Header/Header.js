import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    //console.log(props.auth.isAuth)
    return (
        <header className={styles.header}>
            <div>
                <img
                    src={"https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"}
                    alt={''}
                />
            </div>
            <div>
                {props.auth.isAuth ? <div className={styles.emailOrLogin}>{props.auth.email}</div>
                    : <NavLink to={'/'}>login</NavLink> }
            </div>
        </header>
    );
}

export default Header;
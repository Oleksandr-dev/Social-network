import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.menu}>
                <div className={`${styles.item}`}>
                    <NavLink to='/' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Profile
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Messages
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        News
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Music
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings' className={navData=>navData.isActive ? styles.activeLink : ""}>
                        Settings
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
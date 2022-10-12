import style from "./Contacnt.module.css";
import {NavLink} from "react-router-dom";


const Contact =(props) => {
    return (
        <div className={style.contact + ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id} className={navData=>navData.isActive? style.active : ''}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Contact
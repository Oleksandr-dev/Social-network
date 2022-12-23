import style from "./Contacts.module.css";
import Contact from "./Contact/Contact";


let Contacts = (props) => {

    let dialogsElements = props.dialogsElements.map(d => (<Contact name={d.name} id={d.id} img={d.img}/>))

    return (
        <div className={style.contacts}>
            {dialogsElements}
        </div>
    )
}

export default Contacts
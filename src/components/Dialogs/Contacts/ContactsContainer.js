import style from "./Contacts.module.css";
import Contact from "./Contact/Contact";
import Contacts from "./Contacts";


let ContactsContainer = (props) => {

    let dialogsElements = props.store.getState().dialogsPage.dialogsData

    return <Contacts dialogsElements={dialogsElements}/>
}

export default ContactsContainer
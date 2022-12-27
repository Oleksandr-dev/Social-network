import style from "./Contacts.module.css";
import Contact from "./Contact/Contact";
import Contacts from "./Contacts";
import StoreContext from "../../../StoreContext";


let ContactsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let dialogsElements = store.getState().dialogsPage.dialogsData

                return <Contacts dialogsElements={dialogsElements}/>
            }}
        </StoreContext.Consumer>
    )
}

export default ContactsContainer
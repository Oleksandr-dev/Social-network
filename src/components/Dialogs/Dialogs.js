import style from "./Dialogs.module.css"
import ContactsContainer from "./Contacts/ContactsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <ContactsContainer
                store={props.store}
            />
            <MessagesContainer
                store={props.store}
            />
        </div>
    )
}

export default Dialogs
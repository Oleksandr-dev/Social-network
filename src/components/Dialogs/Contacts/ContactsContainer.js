import Contacts from "./Contacts";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
    return {
        dialogsElements: state.dialogsPage.dialogsData,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {}
}


const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)


export default ContactsContainer
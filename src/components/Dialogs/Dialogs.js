import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";

let dialogsData = [
    {id:1, name:'Sasha',},
    {id:2, name:'Frost',},
    {id:3, name:'Andrew',},
    {id:4, name:'Tania',},
    {id:5, name:'Dima',},
    {id:6, name:'Roman Zap',},
    {id:7, name:'Sasha Avr',},
]
let messageData=[
    {id: 1, message: "Hi",},
    {id: 2, message: "How are you?",},
    {id: 3, message: "Hi, great! And you?",},
]

const Dialogs = () =>{
    return(
        <div className={style.dialogs}>
            <div className={style.contacts}>
                <Contact name={dialogsData[0].name}
                         id={dialogsData[0].id} />
                <Contact name={dialogsData[1].name}
                         id={dialogsData[1].id} />
                <Contact name={dialogsData[2].name}
                         id={dialogsData[2].id} />
                <Contact name={dialogsData[3].name}
                         id={dialogsData[3].id} />
                <Contact name={dialogsData[4].name}
                         id={dialogsData[4].id} />
                <Contact name={dialogsData[5].name}
                         id={dialogsData[5].id} />
                <Contact name={dialogsData[6].name}
                         id={dialogsData[6].id} />
            </div>
            <div>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs
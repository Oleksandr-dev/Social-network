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

let dialogsElements = dialogsData.map( d => (<Contact name={d.name} id={d.id} />) )
let messageElements = messageData.map( m => (<Message message={m.message} />) )

const Dialogs = () =>{
    return(
        <div className={style.dialogs}>
            <div className={style.contacts}>
                { dialogsElements }
            </div>
            <div>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs
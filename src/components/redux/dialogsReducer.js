const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initiallState = {
    dialogsData: [
        {id: 1, name: 'Sasha', img: "https://media.2x2tv.ru/content/images/size/w1440h1080/2021/10/---2.jpg",},
        {
            id: 2,
            name: 'Frost',
            img: "https://i2-prod.mirror.co.uk/incoming/article26332089.ece/ALTERNATES/s1200b/0_Peaky-Blinders.jpg",
        },
        {id: 3, name: 'Andrew', img: "",},
        {id: 4, name: 'Tania', img: "",},
        {id: 5, name: 'Dima', img: "",},
        {id: 6, name: 'Roman Zap', img: "",},
        {id: 7, name: 'Sasha Avr', img: "",},
    ],
    messageData: [
        {id: 1, message: "Hi", senderId: 1,},
        {id: 2, message: "How are you?", senderId: 1,},
        {
            id: 3,
            message: "Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?",
            senderId: 1,
        },
        {id: 4, message: "Hi, great! And you?", senderId: 0,},
        {
            id: 5,
            message: "Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?",
            senderId: 0,
        },
    ],
    newMessageText: 'New message',
}

const dialogsReducer = (dialogsPage = initiallState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: 6,
                message: dialogsPage.newMessageText,
                senderId: 0,
            }

            let dialogsPageCopy = {...dialogsPage}
            dialogsPageCopy.messageData = [...dialogsPage.messageData]

            dialogsPageCopy.messageData.push(newMessage)
            dialogsPageCopy.newMessageText = ''
            return dialogsPageCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let dialogsPageCopy = {...dialogsPage}

            dialogsPageCopy.newMessageText = action.newText;
            return dialogsPageCopy
        }
        default:
            return dialogsPage
    }
}

export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are You?", likeCount: 101},
                {id: 2, message: "It's my first post", likeCount: 51},
            ],
            newPostText: 'My new post',
        }
    },

    getState(){
        return this._state
    },
    rootRender(){
        console.log("rootrender in base store")
    },
    subscribe(callback){
        this.rootRender = callback
    },

    dispatch(action){
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ''
            this.rootRender(store)
            return
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.rootRender(store)
            return
        }
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
                senderId: 0,
            }
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this.rootRender(store)
            return;
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this.rootRender(store)
            return
        }
        alert('Unknown type')
    },


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

export default store
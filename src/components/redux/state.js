let state = {
    dialogsPage : {
        dialogsData: [
            {id: 1, name: 'Sasha', img:"https://media.2x2tv.ru/content/images/size/w1440h1080/2021/10/---2.jpg",},
            {id: 2, name: 'Frost', img:"https://i2-prod.mirror.co.uk/incoming/article26332089.ece/ALTERNATES/s1200b/0_Peaky-Blinders.jpg",},
            {id: 3, name: 'Andrew', img:"",},
            {id: 4, name: 'Tania', img:"",},
            {id: 5, name: 'Dima', img:"",},
            {id: 6, name: 'Roman Zap', img:"",},
            {id: 7, name: 'Sasha Avr', img:"",},
        ],
        messageData: [
            {id: 1, message: "Hi", senderId: 1,},
            {id: 2, message: "How are you?", senderId: 1,},
            {id: 3, message: "Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?", senderId: 1,},
            {id: 4, message: "Hi, great! And you?", senderId: 0,},
            {id: 5, message: "Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?Hi, great! And you?", senderId: 0,},
        ],
    },
    profilePage : {
        postData : [
            {id: 1, message: "Hi, how are You?", likeCount: 101},
            {id: 2, message: "It's my first post", likeCount: 51},
        ],
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0,
    }
    state.profilePage.postData.push(newPost);

}

export let addMessage = (Message) => {
    let newMessage = {
        id: 6,
        message: Message,
        senderId: 0,
    }
    state.dialogsPage.messageData.push(newMessage);

}

export default state;
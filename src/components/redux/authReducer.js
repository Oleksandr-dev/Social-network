import {API} from "../DAL/api";

const SET_AUTH_USER = 'SET_AUTH_USER'


let initialState = {
    userId: null,
    email: null,
    password: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state
    }
}

export default authReducer

export const setAuthUser = (userId, email, password,) => ({type: SET_AUTH_USER, data: {userId, email, password,}})

export const getProfile = () => {
    return (dispatch) => {
        API.auth.getUser().then(responce => {
                let {email, id, password} = responce.data
                if (email) {
                    dispatch(setAuthUser(id, email, password))
                    alert(email)
                } else {
                    alert(responce.messages[0])
                }
            }
        )
    }
}
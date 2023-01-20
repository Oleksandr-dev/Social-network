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


import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store
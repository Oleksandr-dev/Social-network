import axios from "axios";


const instanceAPI = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY" : "2e81ace0-f035-420f-a428-ab9db5190736"},
})

export const API = {
    auth:{
        getUser : () => {
            return instanceAPI.get(`auth/me`).then(responce => responce.data)
        }
    },
    users:{
        getUsers : (currentPage, pageSize) => {
            return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        },
        unfollowUser : (id) => {
            return instanceAPI.delete(`follow/${id}`)
        },
        followUser : (id) => {
            return instanceAPI.post(`follow/${id}`)
            //return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        },
    },
    profile:{
        getProfileInfo : (userId) => {
            return instanceAPI.get(`profile/${userId}`).then(responce => responce.data)
        }
    },
}
import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "099be23b-024b-4d04-8aea-ded1a22de046"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followToUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}


export const profileAPI = {
    getUserProfile(id: number) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => response.data)
    }
}
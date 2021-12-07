import axios from "axios";
import {UserPhotosType} from "../Redux/Reducers/UsersReducer";
import {ContactsType} from "../Redux/Reducers/ProfileReducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "099be23b-024b-4d04-8aea-ded1a22de046"
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

type GetUsersType = {
    items: Array<{
        name: string
        id: number
        photos: UserPhotosType
        status: string
        followed: boolean
    }>
}
type FollowedUserType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followToUser(id: number) {
        return instance.post<FollowedUserType>(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete<FollowedUserType>(`follow/${id}`)
            .then(response => response.data)
    }
}

type GetUserProfileType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: UserPhotosType
}

export const profileAPI = {
    getUserProfile(id: number) {
        return instance.get<GetUserProfileType>(`profile/${id}`)
            .then(response => response.data)
    },
    getUserStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus(status: string){
        return instance.put('profile/status', {status})

    }
}

type GetAuthMeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export const authAPI = {
    getAuthMe(){
        return instance.get<GetAuthMeType>(`auth/me`)
            .then(response => response.data)
    }
}
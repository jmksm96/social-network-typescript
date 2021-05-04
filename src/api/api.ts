import axios from "axios";
import {UserProfileType} from "../Typing/typing";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            "API-KEY": "7c107b4d-cd0a-4372-844b-6a20a61a6e27",
        }

})

export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data

            })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data

            })
    },
    getProfile(userId: number) {
        return ProfileAPI.getProfile(userId)
    }

}

export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    saveProfile(profile: UserProfileType) {
        return instance.put(`profile/`, profile)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: any, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

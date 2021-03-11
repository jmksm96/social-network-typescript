import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            "API-KEY": "7c107b4d-cd0a-4372-844b-6a20a61a6e27"
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
        return instance.get(`/profile/${userId}`)
    }

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

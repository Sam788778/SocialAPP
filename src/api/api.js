import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const socialAPI = {
    getUsers(page = 1) {
        return instance.get(`/users?count=100&page=${page}`)
    }
}

export const userAPI = {
  getUser(userId) {
    return instance.get(`profile/${userId}`);
  },
  Login(body = {}){
    return instance.post(`/auth/login`, body)
  },
  LogOut(){
    return instance.delete(`/auth/login`)
  },
  Captcha(){
    return instance.get(`/security/get-captcha-url`)
  }
};
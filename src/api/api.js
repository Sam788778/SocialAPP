import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': '5181ddf9-bc5a-4f2c-a670-42cc1e6e1074'
  },
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
  Login(body = {}) {
    return instance.post(`/auth/login`, body)
  },
  LogOut() {
    return instance.delete(`/auth/login`)
  },
  ChangePhoto(file) {
    let formData = new FormData()
    formData.append('file', file)
    return instance.put(`/profile/photo`, formData)
  },
  getStatus(userId){
    return instance.get(`/profile/status/${userId}`)
  }
};
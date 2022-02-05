import { USER_API_URL } from 'config'
import axiosClient from './axiosClient'

const userAPI = {
  register(data) {
    const url = '/auth/register'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  login(data) {
    const url = '/auth/login'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  forgottenPasswordS1(data) {
    const url = '/auth/forgotten-password-s1'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  forgottenPasswordS2(data) {
    const url = '/auth/forgotten-password-s2'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  forgottenPasswordS3(data) {
    const url = '/auth/forgotten-password-s3'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  changePassword(data) {
    const url = '/auth/change-password'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  getAll(params) {
    const url = '/users'
    return axiosClient.get(url, { params, baseURL: USER_API_URL })
  },

  get(id) {
    const url = `/users/${id}`
    return axiosClient.get(url, { baseURL: USER_API_URL })
  },

  add(data) {
    const url = '/users'
    return axiosClient.post(url, data, { baseURL: USER_API_URL })
  },

  update(id, data) {
    const url = `/users/${id}`
    return axiosClient.patch(url, data, { baseURL: USER_API_URL })
  },

  remove(id) {
    const url = `/users/${id}`
    return axiosClient.delete(url, { baseURL: USER_API_URL })
  },
}
export default userAPI

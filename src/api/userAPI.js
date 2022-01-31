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

  forgottenPassword(data) {
    const url = '/auth/forgotten-password'
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

  update(data) {
    const url = `/users/${data.id}`
    return axiosClient.patch(url, data, { baseURL: USER_API_URL })
  },

  remove(id) {
    const url = `/users/${id}`
    return axiosClient.delete(url, { baseURL: USER_API_URL })
  },
}
export default userAPI

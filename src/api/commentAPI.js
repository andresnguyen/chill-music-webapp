import axiosClient from './axiosClient';

const artistAPI = {
  getAll(params) {
    const url = '/comments';
    return axiosClient.get(url, { params });
  },

  add(data) {
    const url = '/comments';
    return axiosClient.post(url, data);
  },

  update(id, data) {
    const url = `/comments/${id}`;
    return axiosClient.patch(url, data);
  },

  delete(id) {
    const url = `/comments/${id}`;
    return axiosClient.delete(url);
  },
};

export default artistAPI;
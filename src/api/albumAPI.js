import axiosClient from './axiosClient';

const albumAPI = {
  getAll(params) {
    const url = '/albums';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/albums/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/albums';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/albums/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/albums/${id}`;
    return axiosClient.delete(url);
  },
};

export default albumAPI;
import axiosClient from './axiosClient';

const artistAPI = {
  getAll(params) {
    const url = '/artists';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/artists/${id}`;
    return axiosClient.get(url);
  },

  getDetail(id) {
    const url = `/artists/${id}/detail`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/artists';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/artists/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/artists/${id}`;
    return axiosClient.delete(url);
  },
};

export default artistAPI;
import axiosClient from './axiosClient';

const siteAPI = {
  home(params) {
    const url = '/home';
    return axiosClient.get(url, { params });
  },
  top(params) {
    const url = '/top';
    return axiosClient.get(url, { params });
  },

  search(params) {
    const url = '/search';
    return axiosClient.get(url, { params });
  },
};

export default siteAPI;
import axiosClient from './axiosClient';

const siteAPI = {
  home(params) {
    const url = '/home';
    return axiosClient.get(url, { params });
  },
};

export default siteAPI;
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

  getRecentSong(params) {
    const url = '/recent-song';
    return axiosClient.get(url, { params });
  },

  createRecentSong(data) {
    const url = '/recent-song';
    return axiosClient.post(url, data);
  },

  getRecentAlbum(params) {
    const url = '/recent-album';
    return axiosClient.get(url, { params });
  },

  createRecentAlbum(data) {
    const url = '/recent-album';
    return axiosClient.post(url, data);
  },

  getRecentPlaylist(params) {
    const url = '/recent-playlist';
    return axiosClient.get(url, { params });
  },

  createRecentPlaylist(data) {
    const url = '/recent-playlist';
    return axiosClient.post(url, data);
  },
};

export default siteAPI;
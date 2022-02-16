import axiosClient from './axiosClient';

const playlistAPI = {
  getAll(params) {
    const url = '/playlists';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/playlists/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/playlists';
    return axiosClient.post(url, data);
  },

  update(id, data) {
    const url = `/playlists/${id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/playlists/${id}`;
    return axiosClient.delete(url);
  },
};

export default playlistAPI;
import axiosClient from './axiosClient'

const collectionAPI = {
  addPlaylistToFavorite(data) {
    const url = `/collections/favorite-collections`
    return axiosClient.post(url, data)
  },

  deletePlaylistFromFavorite(id) {
    const url = `/collections/favorite-collections/${id}`
    return axiosClient.delete(url)
  },
  addFavoriteSong(data) {
    const url = `/collections/favorite-songs`
    return axiosClient.post(url, data)
  },

  deleteFavoriteSong(id) {
    const url = `/collections/favorite-songs/${id}`
    return axiosClient.delete(url)
  },

  addAlbumToFavorite(data) {
    const url = `/collections/albums`
    return axiosClient.post(url, data)
  },

  deleteAlbumFromFavorite(id) {
    const url = `/collections/albums/${id}`
    return axiosClient.delete(url)
  },

  getInfo() {
    const url = '/collections'
    return axiosClient.get(url)
  },

  createPlaylist(data) {
    const url = '/collections/playlists'
    return axiosClient.post(url, data)
  },
}

export default collectionAPI

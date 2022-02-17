import axiosClient from './axiosClient'

const collectionAPI = {
  getFavoritePlaylistList() {
    const url = '/collections/favorite-playlists'
    return axiosClient.get(url)
  },

  addPlaylistToFavorite(data) {
    const url = `/collections/favorite-playlists`
    return axiosClient.post(url, data)
  },

  deletePlaylistFromFavorite(id) {
    const url = `/collections/favorite-playlists/${id}`
    return axiosClient.delete(url)
  },

  getMyPlaylistList() {
    const url = '/collections/playlists'
    return axiosClient.get(url)
  },

  // =====================================================

  getFavoriteSongList() {
    const url = '/collections/favorite-songs'
    return axiosClient.get(url)
  },

  addSongToFavorite(data) {
    const url = `/collections/favorite-songs`
    return axiosClient.post(url, data)
  },

  deleteSongFromFavorite(id) {
    const url = `/collections/favorite-songs/${id}`
    return axiosClient.delete(url)
  },

  // =====================================================

  getFavoriteAlbumList(data) {
    const url = '/collections/albums'
    return axiosClient.get(url)
  },

  addAlbumToFavorite(data) {
    const url = `/collections/albums`
    return axiosClient.post(url, data)
  },

  deleteAlbumFromFavorite(id) {
    const url = `/collections/albums/${id}`
    return axiosClient.delete(url)
  },

  // =====================================================

  getFavoriteArtistList(data) {
    const url = '/collections/artists'
    return axiosClient.get(url)
  },

  addArtistToFavorite(data) {
    const url = '/collections/artists'
    return axiosClient.post(url, data)
  },

  deleteArtistFromFavorite(id) {
    const url = `/collections/artists/${id}`
    return axiosClient.delete(url)
  },

  // =====================================================

  createPlaylist(data) {
    const url = '/collections/playlists'
    return axiosClient.post(url, data)
  },

  // =====================================================

  getFavoriteSongIdList() {
    const url = '/collections/favorite-song-ids'
    return axiosClient.get(url)
  },

  getFavoriteAlbumIdList() {
    const url = '/collections/favorite-album-ids'
    return axiosClient.get(url)
  },

  getFavoritePlaylistIdList() {
    const url = '/collections/favorite-playlist-ids'
    return axiosClient.get(url)
  },

  getFavoriteArtistIdList() {
    const url = '/collections/favorite-artist-ids'
    return axiosClient.get(url)
  },

  getFavoriteIds() {
    return Promise.all([
      this.getFavoriteSongIdList(),
      this.getFavoriteAlbumIdList(),
      this.getFavoritePlaylistIdList(),
      this.getFavoriteArtistIdList(),
    ])
  },

  // =====================================================

  getInfo() {
    const url = '/collections'
    return axiosClient.get(url)
  },

  getMySongList() {
    const url = '/collections/my-songs'
    return axiosClient.get(url)
  },

  addSongToPlaylist(playlistId, songId) {
    const url = `/collections/playlists/${playlistId}/add`
    return axiosClient.post(url, { songId })
  },

  deleteSongFromPlaylist(playlistId, songId) {
    const url = `/collections/playlists/${playlistId}/delete`
    return axiosClient.patch(url, { songId })
  },
}

export default collectionAPI

import { Spin } from 'antd'
import siteAPI from 'api/siteAPI'
import AlbumList from 'components/AlbumList'
import ArtistList from 'components/ArtistList'
import EmptyBox from 'components/EmptyBox'
import PlaylistList from 'components/PlaylistList'
import SongCardList from 'components/SongCardList'
import { debounce } from 'lodash'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

function SearchFeature(props) {
  const search = useSelector((state) => state.common.search)
  const isMount = useRef(null)
  const [songList, setSongList] = useState([])
  const [albumList, setAlbumList] = useState([])
  const [playlistList, setPlaylistList] = useState([])
  const [artistList, setArtistList] = useState([])
  const dispatch = useDispatch()

  const { mutate, isLoading } = useMutation(() => siteAPI.search({ q: search }), {
    onSuccess: (value) => {
      const { songResult, albumResult, playlistResult, artistResult } = value.data
      setSongList(songResult.data)
      setAlbumList(albumResult.data)
      setPlaylistList(playlistResult.data)
      setArtistList(artistResult.data)
    },

    onError: () => {},
  })

  const handleSearch = useCallback(debounce(mutate, 1000), [])

  useEffect(() => {
    if (search) {
      handleSearch()
    }
  }, [search])

  useEffect(() => {
    const inputSearch = document.querySelector('.header__search-input')
    if(!inputSearch) return 
    inputSearch.focus(  ) 
  }, [])

  return (
    <div className="app__container tab--personal active">
      <div className="content" style={{ paddingTop: 160 }}>
        <div className="content__container">
          <div className="grid container__tab tab-home active">
            {songList.length > 0 && (
              <div className="container__section row">
                <div className="col l-12 m-12 c-12 mb-16">
                  <div className="container__header">
                    <a href="#" className="container__header-title">
                      <h3>Bài hát&nbsp;</h3>
                      <i className="bi bi-chevron-right container__header-icon"></i>
                    </a>
                  </div>
                </div>
                <div className="col l-12 m-12 c-12">
                  <SongCardList data={songList} />
                </div>
              </div>
            )}

            {playlistList.length > 0 && (
              <div className="container__section row">
                <div className="col l-12 m-12 c-12 mb-16">
                  <div className="container__header">
                    <a href="#" className="container__header-title">
                      <h3>Playlist&nbsp;</h3>
                      <i className="bi bi-chevron-right container__header-icon"></i>
                    </a>
                  </div>
                </div>
                <div className="col l-12 m-12 c-12">
                  <PlaylistList hiddenCreate data={playlistList} />
                </div>
              </div>
            )}

            {albumList.length > 0 && (
              <div className="container__section row">
                <div className="col l-12 m-12 c-12 mb-16">
                  <div className="container__header">
                    <a href="#" className="container__header-title">
                      <h3>Album&nbsp;</h3>
                      <i className="bi bi-chevron-right container__header-icon"></i>
                    </a>
                  </div>
                </div>
                <div className="col l-12 m-12 c-12">
                  <AlbumList data={albumList} />
                </div>
              </div>
            )}

            {artistList.length > 0 && (
              <div className="container__section row">
                <div className="col l-12 m-12 c-12 mb-16">
                  <div className="container__header">
                    <a href="#" className="container__header-title">
                      <h3>Nghệ sỹ&nbsp;</h3>
                      <i className="bi bi-chevron-right container__header-icon"></i>
                    </a>
                  </div>
                </div>
                <div className="col l-12 m-12 c-12">
                  <ArtistList data={artistList} />
                </div>
              </div>
            )}

            {!isLoading &&
              search &&
              !songList.length &&
              !albumList.length &&
              !playlistList.length &&
              !artistList.length && <EmptyBox text="Không có kết quả được tìm thấy" />}

            {!isLoading &&
              !search &&
              !songList.length &&
              !albumList.length &&
              !playlistList.length &&
              !artistList.length && (
                <EmptyBox text="Nhập tên bài hát, tên nghệ sỹ, tên album hoặc tên playlist để tìm kiếm" />
              )}

            {isLoading && (
              <div className="d-f-c-c" style={{ height: 150 }}>
                <Spin size="large" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFeature

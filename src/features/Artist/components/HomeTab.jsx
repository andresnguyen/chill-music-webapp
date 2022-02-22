import AlbumList from 'components/AlbumList'
import ArtistList from 'components/ArtistList'
import SongList from 'components/SongList'
import { changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function HomeTab({ data, loading }) {
  const { songList = [], albumList = [], artistList = [] } = data || {} 
  const dispatch = useDispatch()

  const handlePlayAll = () => {
    if (songList?.length > 0) {
      dispatch(changeSongList(songList))
    }
  }

  return (
    <div className="grid container__tab tab-home active">
      <div className="container__control row">
        <div className="col l-12 m-12 c-12 mb-10">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Bài Hát&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 className="container__header-subtitle">Bài Hát</h3>
            <div className="container__header-actions">
              <input type="hidden" />
              <button className="button is-small button-primary container__header-btn btn--play-all" onClick={handlePlayAll}>
                <i className="bi bi-play-fill container__header-icon"></i>
                <span>Phát tất cả</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <div className="container__playmusic">
            <div className="container__playlist">
              <div className="playlist__list">
                <SongList data={songList} />
                {!loading && songList.length === 0 && (
                  <div className="box--no-content">
                    <div className="no-content-image"></div>
                    <span className="no-content-text">Danh sách rỗng</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container__section row mt-50">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Album&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 className="container__header-subtitle">Album</h3>
            <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--album button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--album">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <AlbumList data={albumList} />
          {!loading && albumList.length === 0 && (
            <div className="box--no-content">
              <div className="no-content-image"></div>
              <span className="no-content-text">Danh sách rỗng</span>
            </div>
          )}
        </div>
      </div>

      <div className="container__section row mt-30">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Có thể bạn quan tâm&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 className="container__header-subtitle">Nghệ Sĩ</h3>
            <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--artist button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--artist">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <ArtistList data={artistList} />
        </div>
      </div>
    </div>
  )
}

HomeTab.propTypes = {}

export default HomeTab

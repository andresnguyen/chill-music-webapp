import { Skeleton } from 'antd'
import collectionAPI from 'api/collectionAPI'
import AlbumList from 'components/AlbumList'
import ArtistList from 'components/ArtistList'
import SongList from 'components/SongList'
import SectionSkeletonV1 from 'features/Explore/components/SectionSkeletonV1'
import React, { Fragment, useEffect, useState } from 'react'

function HomeTab(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await collectionAPI.getInfo()
        setData(data)
        setLoading(false)
      })()
    } catch (error) {
      setLoading(false)
    }
  }, [])

  const {
    favoriteSongList = [],
    favoriteAlbumList = [],
    playlistList = [],
    favoritePlaylistList = [],
    mySongList = [],
    favoriteArtistList = [],
  } = data || {}

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
              <div className="button is-small container__header-btn hide-on-mobile">
                <input type="file" name="upload song" id="home__upload-input" className="container__header-input" />
                <label htmlFor="home__upload-input">
                  <i className="bi bi-upload container__header-icon"></i>
                  Tải lên
                </label>
              </div>
              <button className="button is-small button-primary container__header-btn btn--play-all">
                <i className="bi bi-play-fill container__header-icon"></i>
                <span>Phát tất cả</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <div className="container__playmusic">
            <div className="container__slide hide-on-mobile">
              <div className="container__slide-show">
                {[...favoriteSongList, mySongList].map((item, index) => (
                  <div
                    className={`container__slide-item ${(index === 0 || index === 1) && ' first '}  ${
                      index === 2 && ' second '
                    } ${index === 3 && ' third '} ${index > 3 && ' fourth '}`}
                  >
                    <div
                      style={{
                        background: `url('${item.imageURL}'), url('https://photo-zmp3.zadn.vn/audio_default.png') no-repeat center center / cover`,
                      }}
                      className="container__slide-img"
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container__playlist">
              <div className="playlist__list">
                {loading && (
                  <Fragment>
                    <Skeleton.Button active size="large" block />
                    <Skeleton.Button active size="large" block className="mt-3" />
                    <Skeleton.Button active size="large" block className="mt-3" />
                    <Skeleton.Button active size="large" block className="mt-3" />
                    <Skeleton.Button active size="large" block className="mt-3" />
                    <Skeleton.Button active size="large" block className="mt-3" />
                    <Skeleton.Button active size="large" block className="mt-3" />
                  </Fragment>
                )}
                {!loading && [...favoriteSongList, ...mySongList].length > 0 && (
                  <SongList hiddenHeader hiddenAction data={[...favoriteSongList, ...mySongList]} />
                )}
                {loading && <SectionSkeletonV1 hiddenTitle />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Playlist&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 className="container__header-subtitle">Playlist</h3>
            <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--playlist button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--playlist">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {[...playlistList, ...favoritePlaylistList].length > 0 && (
            <AlbumList playlist data={[...playlistList, ...favoritePlaylistList]} />
          )}
          {loading && <SectionSkeletonV1 hiddenTitle />}
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
          {favoriteAlbumList.length > 0 && <AlbumList data={favoriteAlbumList} />}
          {loading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>

      <div className="container__section row mt-30">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Nghệ Sĩ&nbsp;</h3>
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
          {favoriteArtistList.length > 0 && <ArtistList data={favoriteArtistList} />}
          {loading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>
    </div>
  )
}

HomeTab.propTypes = {}

export default HomeTab

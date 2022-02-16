import collectionAPI from 'api/collectionAPI'
import AlbumList from 'components/AlbumList'
import ArtistList from 'components/ArtistList'
import PlaylistList from 'components/PlaylistList'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import { changeValueCommon } from 'features/Common/commonSlice'
import SectionSkeletonV1 from 'features/Explore/components/SectionSkeletonV1'
import { changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function HomeTab(props) {
  const dispatch = useDispatch()
  const { data: favoriteSongList = [], isLoading: songLoading } = useQuery(
    ['favorite-song-list'],
    () => collectionAPI.getFavoriteSongList(),
    {
      select: (value) => value?.data,
    }
  )

  const { data: favoritePlaylistList = [], isLoading: playlistLoading } = useQuery(
    ['favorite-playlist-list'],
    () => collectionAPI.getFavoritePlaylistList(),
    {
      select: (value) => value?.data,
    }
  )

  const { data: favoriteAlbumList = [], isLoading: albumLoading } = useQuery(
    ['favorite-album-list'],
    () => collectionAPI.getFavoriteAlbumList(),
    {
      select: (value) => value?.data,
    }
  )

  const { data: favoriteArtistList = [], isLoading: artistLoading } = useQuery(
    ['favorite-artist-list'],
    () => collectionAPI.getFavoriteArtistList(),
    {
      select: (value) => value?.data,
    }
  )

  const { data: mySongList = [], isLoading: mySongLoading } = useQuery(
    ['my-song-list'],
    () => collectionAPI.getMySongList(),
    {
      select: (value) => value?.data,
    }
  )

  const { data: myPlaylistList = [], isLoading: myPlaylistLoading } = useQuery(
    ['my-playlist-list'],
    () => collectionAPI.getMyPlaylistList(),
    {
      select: (value) => value?.data,
    }
  )

  const handleCreateSongClick = () => {
    dispatch(
      changeValueCommon({
        name: 'songCreateOpen',
        value: true,
      })
    )
  }

  const handlePlayAllClick = () => {
    const songList = [...favoriteSongList, ...mySongList]
    if (songList?.length > 0) {
      dispatch(changeSongList(songList))
    }
  }

  return (
    <div className="grid container__tab tab-home active">
      <div className="container__control row">
        <div className="col l-12 m-12 c-12 mb-10">
          <div className="container__header">
            <Link to="/mymusic/library/song" className="container__header-title">
              <h3>Bài Hát&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </Link>
            <h3 className="container__header-subtitle">Bài Hát</h3>
            <div className="container__header-actions">
              <div className="button is-small container__header-btn hide-on-mobile" onClick={handleCreateSongClick}>
                <label htmlFor="home__upload-input">
                  <i className="bi bi-upload container__header-icon"></i>
                  Tải lên
                </label>
              </div>
              <button
                className="button is-small button-primary container__header-btn btn--play-all"
                onClick={handlePlayAllClick}
              >
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
                {songLoading && mySongLoading && <SongListSkeleton />}
                {[...favoriteSongList, ...mySongList].length > 0 && (
                  <SongList hiddenHeader hiddenAction data={[...favoriteSongList, ...mySongList]} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <Link to="/mymusic/library/playlist" className="container__header-title">
              <h3>Playlist&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </Link>
            <h3 className="container__header-subtitle">Playlist</h3>
            {/* <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--playlist button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--playlist">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {[...myPlaylistList, ...favoritePlaylistList].length > 0 && (
            <PlaylistList playlist data={[...myPlaylistList, ...favoritePlaylistList]} />
          )}
          {playlistLoading && myPlaylistLoading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>

      <div className="container__section row mt-50">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <Link to="/mymusic/library/album" className="container__header-title">
              <h3>Album&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </Link>
            <h3 className="container__header-subtitle">Album</h3>
            {/* <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--album button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--album">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {favoriteAlbumList.length > 0 && <AlbumList data={favoriteAlbumList} />}
          {albumLoading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>

      <div className="container__section row mt-30">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <Link to="/mymusic/library/artist" className="container__header-title">
              <h3>Nghệ Sĩ&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </Link>
            <h3 className="container__header-subtitle">Nghệ Sĩ</h3>
            {/* <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--artist button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--artist">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {favoriteArtistList.length > 0 && <ArtistList data={favoriteArtistList} />}
          {artistLoading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>
    </div>
  )
}

HomeTab.propTypes = {}

export default HomeTab

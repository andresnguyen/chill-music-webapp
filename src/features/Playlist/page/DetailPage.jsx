import playlistAPI from 'api/playlistAPI'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import { changeMusicPlayerValue, changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import fallbackImage from 'assets/images/fallback.jpg'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { changeValueCommon } from 'features/Common/commonSlice'
import EmptyBox from 'components/EmptyBox'
import siteAPI from 'api/siteAPI'
import { FacebookIcon, FacebookShareButton } from 'react-share'

function DetailPage(props) {
  const {
    params: { id },
  } = useRouteMatch()

  const dispatch = useDispatch()
  const location = useLocation()
  const countRef = useRef(null)

  const isPlaying = useSelector((state) => state.musicPlayer.playing)
  const user = useSelector((state) => state.user.current)

  const { data, isLoading, isError } = useQuery(['playlist-detail', id], () => playlistAPI.get(id), {
    select: (value) => value?.data,
  })

  useEffect(() => {
    handleRecentPlaylist()
  }, [data])

  useEffect(() => {
    if (parse(location.search)?.play === 'true' && !countRef.current && data?.songList?.length > 0) {
      dispatch(changeSongList(data?.songList))
      countRef.current = true
    }
  }, [data, id])

  const { name, imageURL, songList } = data || {}

  const handlePlayPauseAllClick = () => {
    if (isPlaying) {
      dispatch(changeMusicPlayerValue({ name: 'playing', value: false }))
      return
    }

    dispatch(changeSongList(songList))
  }

  const handleUpdate = () => {
    dispatch(
      changeValueCommon({
        name: 'playlistUpdateData',
        value: data,
      })
    )

    dispatch(
      changeValueCommon({
        name: 'playlistUpdateOpen',
        value: true,
      })
    )
  }

  const handleRecentPlaylist = async () => {
    if (data._id) {
      const value = await siteAPI.createRecentPlaylist({
        playlistId: data._id,
      })
    }
  }

  return (
    <div className="grid container__tab tab-home active">
      <div className="container__control row">
        <div className="col l-12 m-12 c-12">
          <div className="container__playmusic" style={{ height: 'auto' }}>
            <div
              style={{ margin: '0 auto', alignItems: 'flex-start', width: '300px', marginRight: '40px', marginTop: 23 }}
            >
              <div
                style={{
                  background: `url('${imageURL}'), url('${fallbackImage}')`,
                }}
                className="container__slide-img bg-song"
              ></div>
              <h3 className="album-name">{name}</h3>

              <div className="container__header-actions mt-20">
                <div className="button is-small container__header-btn hide-on-mobile" onClick={handleUpdate}>
                  <label for="home__upload-input">
                    <i className="bi bi-pencil container__header-icon"></i>Chỉnh sửa
                  </label>
                </div>
                {songList?.length > 0 && (
                  <button
                    className="button is-small button-primary container__header-btn btn--play-all"
                    onClick={handlePlayPauseAllClick}
                  >
                    <i className={`bi bi-${isPlaying ? 'pause' : 'play'}-fill container__header-icon`}></i>
                    <span>{!isPlaying ? 'Phát tất cả' : 'Tạm dừng'}</span>
                  </button>
                )}
                {/* <div style={{ marginLeft: 10 }}>
                  {console.log(window.location.href)}
                  <FacebookShareButton url={window.location.href}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </div> */}
                <span></span>
              </div>

              {/* <div className="container__playmusic">
                <button
                  className="button is-small button-primary container__header-btn btn--play-all mt-20"
                  onClick={handlePlayPauseAllClick}
                >
                  <i className={`bi bi-${isPause ? 'pause' : 'play'}-fill container__header-icon`}></i>
                  <span>{!isPause ? 'Phát tất cả' : 'Tạm dừng'}</span>
                </button>

                <button
                  className="button is-small container__header-btn mt-20"
                  style={{ border: '1px solid var(--border-primary)' }}
                  onClick={handlePlayPauseAllClick}
                >
                  <i className="bi bi-pencil container__header-icon" style={{ fontSize: 14 }}></i>
                  <span>Chỉnh sửa</span>
                </button>
              </div> */}
            </div>
            <div className="container__playlist">
              <div className="playlist__list">
                {isLoading ? (
                  <SongListSkeleton />
                ) : songList?.length > 0 ? (
                  <SongList
                    data={songList}
                    showHeader
                    hiddenAction
                    showCheck
                    playlistId={data._id}
                    myPlaylist={data.userId === user._id}
                  />
                ) : (
                  <EmptyBox text="Không có bài hát trong playlist của bạn" style={{ marginTop: 22 }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

DetailPage.propTypes = {}

export default DetailPage

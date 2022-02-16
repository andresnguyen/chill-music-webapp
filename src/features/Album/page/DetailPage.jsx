import albumAPI from 'api/albumAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import EmptyBox from 'components/EmptyBox'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import { changeMusicPlayerValue, changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import { parse } from 'query-string'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation, useRouteMatch } from 'react-router-dom'

function DetailPage(props) {
  const {
    params: { id },
  } = useRouteMatch()

  const location = useLocation()
  const countRef = useRef(null)
  const isPlaying = useSelector((state) => state.musicPlayer.playing)

  const { data, isLoading, isError } = useQuery(['album', id], () => albumAPI.get(id), {
    select: (value) => value?.data,
  })

  useEffect(() => {
    if (parse(location.search)?.play === 'true' && !countRef.current && data?.songList?.length > 0) {
      dispatch(changeSongList(data?.songList))
      countRef.current = true
    }
  }, [data, id])

  const dispatch = useDispatch()

  const { name, imageURL, songList } = data || {}

  const handlePlayPauseAllClick = () => {
    if (isPlaying) {
      dispatch(changeMusicPlayerValue({ name: 'playing', value: false }))
      return
    }

    dispatch(changeSongList(songList))
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
                  background: `url('${imageURL}'), url('${fallbackImage}') no-repeat center center / cover`,
                }}
                className="container__slide-img"
              ></div>
              <h3 className="album-name">{name}</h3>

              {songList?.length > 0 && (
                <button
                  className="button is-small button-primary container__header-btn btn--play-all mt-20"
                  onClick={handlePlayPauseAllClick}
                >
                  <i className={`bi bi-${isPlaying ? 'pause' : 'play'}-fill container__header-icon`}></i>
                  <span>{!isPlaying ? 'Phát tất cả' : 'Tạm dừng'}</span>
                </button>
              )}
            </div>
            <div className="container__playlist">
              <div className="playlist__list">
                {isLoading ? (
                  <SongListSkeleton />
                ) : songList?.length > 0 ? (
                  <SongList data={songList} showHeader hiddenAction showCheck />
                ) : (
                  <EmptyBox text="Không có bài hát trong album này" style={{ marginTop: 22 }} />
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

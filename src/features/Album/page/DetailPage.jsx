import albumAPI from 'api/albumAPI'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import { changeMusicPlayerValue, changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

function DetailPage(props) {
  const {
    params: { id },
  } = useRouteMatch()

  const dispatch = useDispatch()

  const [list, setList] = useState({})
  const [isPause, setPause] = useState(false)
  const [loading, setLoading] = useState(false)

  useState(() => {
    ;(async () => {
      try {
        setLoading(true)
        const { data } = await albumAPI.get(id)
        setList(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    })()
  }, [])

  const handlePlayPauseAllClick = () => {
    setPause(!isPause)
    if (isPause) {
      dispatch(changeMusicPlayerValue({ name: 'playing', value: false }))
      return
    }

    dispatch(changeSongList(list.songList))
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
                  background: `url('${list.imageURL}') no-repeat center center / cover`,
                }}
                className="container__slide-img"
              ></div>
              <h3 className="album-name">{list.name}</h3>

              <button
                className="button is-small button-primary container__header-btn btn--play-all mt-20"
                onClick={handlePlayPauseAllClick}
              >
                <i className={`bi bi-${isPause ? 'pause' : 'play'}-fill container__header-icon`}></i>
                <span>{!isPause ? 'Phát tất cả' : 'Tạm dừng'}</span>
              </button>
            </div>
            <div className="container__playlist">
              <div className="playlist__list">
                {!loading && <SongList data={list.songList} showHeader hiddenAction showCheck />}
                {loading && <SongListSkeleton />}
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

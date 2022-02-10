import React, { Fragment, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { formatSongTime, renderArtistFromList } from 'utils'
import smallLogo from 'assets/images/small-logo.png'
import { useDispatch } from 'react-redux'
import { changeValue } from 'features/Auth/userSlice'
import { useSelector } from 'react-redux'
import { changeMusicPlayerValue } from './musicPlayerSlice'
import { Drawer, message, Tabs } from 'antd'
import SongList from 'components/SongList'
const { TabPane } = Tabs

function MusicPlayer(props) {
  const isMountRef = useRef(null)
  const audioRef = useRef(null)
  const { playing, repeat, seeking, random, currentIndex, currentVolume, indexList, songList, isDrawerOpen } =
    useSelector((state) => state.musicPlayer)

  const [value, setValue] = useState(0)
  const [popupShow, setPopupShow] = useState(false)

  const [currentTime, setCurrentTime] = useState(0)

  const currentSong = songList[currentIndex]

  useEffect(() => {
    if(!currentSong.mediaURL) {
      message.error("Bài hát đang này đang bị lỗi")
    }
  }, [currentSong])

  const dispatch = useDispatch()

  const setPlaying = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'playing', value }))
  }

  const setRepeat = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'repeat', value }))
  }

  const setSeeking = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'seeking', value }))
  }

  const setRandom = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'random', value }))
  }

  const setCurrentIndex = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'currentIndex', value }))
  }

  const setCurrentVolume = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'currentVolume', value }))
  }

  const setIndexList = (value) => {
    dispatch(changeMusicPlayerValue({ name: 'indexList', value }))
  }

  useEffect(() => {
    setVolume()
  }, [])

  useEffect(() => {
    if (playing) {
      document.title = songList?.[currentIndex].name || 'Chillmusic'
    }
  }, [playing, currentIndex])

  useEffect(() => {
    if (isMountRef.current) {
      setPlaying(true)
      audioRef.current.play()
    }

    isMountRef.current = true
  }, [currentIndex, songList])

  useEffect(() => {
    if (isMountRef.current) {
      if (playing) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [playing])

  const nextSong = () => {
    if (currentIndex === songList.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSong = () => {
    if (currentIndex === 0) {
      setCurrentIndex(songList.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handlePlayClick = () => {
    setPlaying(!playing)
  }

  const handleSongEnded = () => {
    const audio = audioRef.current
    if (!repeat) {
      handleNextClick()
    }
    audio.play()
  }

  const handleOnTimeUpdate = (e) => {
    if (!seeking) {
      const audio = e.target
      setValue(Math.round((audio.currentTime / audio.duration) * 100))
      setCurrentTime(audio.currentTime)
    }
  }

  const playRandomSong = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * songList.length)
    } while (newIndex === currentIndex || indexList.includes(newIndex))

    setIndexList([...indexList, newIndex])
    setCurrentIndex(newIndex)
    if (indexList.length === songList.length - 1) {
      setIndexList([])
    }
  }

  const handleNextClick = () => {
    if (random) {
      playRandomSong()
    } else {
      nextSong()
    }
  }

  const handlePrevClick = () => {
    if (random) {
      playRandomSong()
    } else {
      prevSong()
    }
  }

  const handleRandomClick = () => {
    setIndexList([])
    setRandom(!random)
  }

  const handleRepeatClick = () => {
    setRepeat(!repeat)
  }

  const setVolume = (volume = currentVolume) => {
    const audio = audioRef.current
    audio.volume = volume / 100
    setCurrentVolume(volume)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  const handleOnInput = (e) => {
    const audio = audioRef.current
    const seekTime = (e.target.value * audio.duration) / 100
    setCurrentTime(seekTime)
    setValue(e.target.value)
  }

  const startSeeking = () => {
    setSeeking(true)
  }

  const endSeeking = () => {
    const audio = audioRef.current
    setSeeking(false)
    audio.currentTime = currentTime
  }

  const handlePopupClick = () => {
    setPopupShow(!popupShow)
  }

  const handleDrawerChange = () => {
    dispatch(changeMusicPlayerValue({ name: 'isDrawerOpen', value: true }))
  }


  return (
    <div
      className={classNames('player grid', { 'open-popup': popupShow, playing: playing })}
      style={{
        backgroundImage:
          "url('https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme1/theme1.svg')",
      }}
    >
      <audio
        id="audio"
        src={currentSong?.mediaURL || " "}
        ref={audioRef}
        onEnded={handleSongEnded}
        onTimeUpdate={handleOnTimeUpdate}
      ></audio>

      <div className="player__container">
        <div className="player__container-song">
          <div className={classNames('player__song-info media', { playing: playing })}>
            <div className="media__left">
              <div className="player__song-thumb media__thumb note-1 pointer" onClick={handlePopupClick}>
                <div
                  className="thumb-img bg-song"
                  style={{
                    background: `url('${currentSong?.imageURL}'), url('https://photo-zmp3.zadn.vn/audio_default.png')`,
                  }}
                ></div>
                <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-1">
                  <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-2">
                  <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-3">
                  <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-4">
                  <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
              </div>
            </div>
            <div className="media__content">
              <div className="player__song-body media__info">
                <div className="player__song-title info__title">
                  <div className="player__song-title-custom">
                    <marquee scrollDelay={130} className="player__song-title-marquee">
                      <span className="player__song-title-span">{currentSong?.name}</span>
                    </marquee>
                  </div>
                </div>
                <div className="player__song-author info__author">{renderArtistFromList(currentSong.artistList)}</div>
              </div>
            </div>
            <div className="media__right hide-on-tablet-mobile">
              <div className="player__song-options">
                <div className="player__song-btn option-btn btn--heart">
                  <i className="btn--icon icon--heart bi bi-heart-fill primary"></i>
                </div>
                <div className="player__song-btn option-btn">
                  <i className="btn--icon bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player__control">
          <div className="player__control-btn">
            <div
              className={classNames('control-btn btn-random is-small', {
                active: random,
              })}
              onClick={handleRandomClick}
            >
              <i className="bi bi-shuffle"></i>
            </div>
            <div className="control-btn btn-prev" onClick={handlePrevClick}>
              <i className="bi bi-skip-start-fill"></i>
            </div>
            <div className="control-btn btn-toggle-play btn--play-song is-medium" onClick={handlePlayClick}>
              <i className="bi bi-pause icon-pause"></i>
              <i className="bi bi-play-fill icon-play"></i>
            </div>
            <div className="control-btn btn-next" onClick={handleNextClick}>
              <i className="bi bi-skip-end-fill"></i>
            </div>
            <div
              className={classNames('control-btn btn-repeat is-small is-medium', {
                active: repeat,
              })}
              onClick={handleRepeatClick}
            >
              <i className="bi bi-arrow-repeat"></i>
            </div>
          </div>
          <div className="progress-block hide-on-mobile">
            <span className="tracktime">{formatSongTime(currentTime)}</span>
            <input
              id="progress--main"
              className="progress"
              type="range"
              value={value}
              step={1}
              min={0}
              max={100}
              onInput={handleOnInput}
              onMouseDown={startSeeking}
              onTouchStart={startSeeking}
              onMouseUp={endSeeking}
              onTouchEnd={endSeeking}
            />
            <div className="progress__track song--track">
              <div
                className="progress__track-update"
                style={{
                  width: `${value}%`,
                }}
              ></div>
            </div>
            <span className="durationtime">
              {audioRef.current?.duration ? formatSongTime(audioRef.current.duration) : '--:--'}
            </span>
          </div>
        </div>
        <div className="player__options hide-on-mobile">
          <div className="player__options-container">
            <div className="player__options-btn option-btn hide-on-tablet-mobile" onClick={handlePopupClick}>
              <i className="bi bi-camera-video btn--icon"></i>
            </div>
            <div className="player__options-btn option-btn hide-on-tablet-mobile">
              <i className="bi bi-mic btn--icon"></i>
            </div>
            <div className="player__options-btn volume option-btn">
              <i className="bi bi-volume-up btn--icon"></i>
            </div>
            <div className="player__volume-progress">
              <input
                type="range"
                className="volume__range"
                value={currentVolume}
                step={1}
                min={0}
                max={100}
                onChange={handleVolumeChange}
              />
              <div className="progress__track volume--track">
                <div
                  className="progress__track-update"
                  style={{
                    width: `${currentVolume}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="player__list-icon" onClick={handleDrawerChange}>
              <i className="bi bi-music-note-list"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="player__popup">
        <div className="player__popup-header">
          <div className="player__popup-logo">
            <img src={smallLogo} alt="Logo" className="player__logo-img" />
          </div>
          <div className="player__popup-container">
            <ul className="player__popup-menu">
              <li className="player__popup-item active">
                <a href="#">Danh Sách Phát</a>
              </li>
              <li className="player__popup-item">
                <a href="#">Karaoke</a>
              </li>
              <li className="player__popup-item hide-on-mobile">
                <a href="#">Lời Bài Hát</a>
              </li>
            </ul>
          </div>
          <div className="player__popup-action">
            <ul className="popup__action-menu">
              <li className="popup__action-btn hide-on-tablet-mobile">
                <i className="bi bi-arrows-angle-expand popup__action-btn-icon"></i>
              </li>
              <li className="popup__action-btn hide-on-tablet-mobile">
                <i className="bi bi-gear popup__action-btn-icon"></i>
              </li>
              <li className="popup__action-btn btn--pop-down" onClick={handlePopupClick}>
                <i className="bi bi-chevron-down popup__action-btn-icon"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="player__popup-cd-display">
          <div
            className="player__popup-cd-img"
            style={{
              background: `url('${currentSong?.imageURL}') no-repeat center center / cover`,
            }}
          ></div>
        </div>
        <div className="player__popup-cd-info">
          <h4>Now playing</h4>
          <h2 className="is-twoline">{currentSong?.name}</h2>
          <h3>
            <a href="#" className="is-ghost">
              Thường Nguyễn
            </a>
          </h3>
        </div>
        <div className="player__popup-footer">
          <div className="player__container-song hide-on-mobile">
            <div className={classNames('player__song-info media', { playing: playing })}>
              <div className="media__left">
                <div className="player__song-thumb media__thumb note-1">
                  <div
                    className="thumb-img bg-song"
                    style={{
                      background: `url('${currentSong?.imageURL}')`,
                    }}
                  ></div>
                  <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-1">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                  </svg>
                  <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-2">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                  </svg>
                  <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-3">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                  </svg>
                  <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-4">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                  </svg>
                </div>
              </div>
              <div className="media__content">
                <div className="player__song-body media__info">
                  <div className="player__song-title info__title">
                    <div className="player__song-title-custom">
                      <marquee scrollDelay={130} className="player__song-title-marquee">
                        <span className="player__song-title-span">{currentSong?.name}</span>
                      </marquee>
                    </div>
                  </div>
                  <div className="player__song-author info__author">{renderArtistFromList(currentSong.artistList)}</div>
                </div>
              </div>
              <div className="media__right hide-on-tablet-mobile">
                <div className="player__song-options">
                  <div className="player__song-btn option-btn btn--heart">
                    <i className="btn--icon icon--heart bi bi-heart-fill primary"></i>
                  </div>
                  <div className="player__song-btn option-btn">
                    <i className="btn--icon bi bi-three-dots"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="player__control">
            <div className="player__control-btn">
              <div
                className={classNames('control-btn btn-random is-small', {
                  active: random,
                })}
                onClick={handleRandomClick}
              >
                <i className="bi bi-shuffle"></i>
              </div>
              <div className="control-btn btn-prev" onClick={handlePrevClick}>
                <i className="bi bi-skip-start-fill"></i>
              </div>
              <div className="control-btn btn-toggle-play btn--play-song is-medium" onClick={handlePlayClick}>
                <i className="bi bi-pause icon-pause"></i>
                <i className="bi bi-play-fill icon-play"></i>
              </div>
              <div className="control-btn btn-next" onClick={handleNextClick}>
                <i className="bi bi-skip-end-fill"></i>
              </div>
              <div
                className={classNames('control-btn btn-repeat is-small is-medium', {
                  active: repeat,
                })}
                onClick={handleRepeatClick}
              >
                <i className="bi bi-arrow-repeat"></i>
              </div>
            </div>
            <div className="progress-block">
              <span className="tracktime">{formatSongTime(currentTime)}</span>
              <input
                id="progress--pop-up"
                className="progress"
                type="range"
                value={value}
                step={1}
                min={0}
                max={100}
                onInput={handleOnInput}
                onMouseDown={startSeeking}
                onTouchStart={startSeeking}
                onMouseUp={endSeeking}
                onTouchEnd={endSeeking}
              />
              <div className="progress__track song--track">
                <div
                  className="progress__track-update"
                  style={{
                    width: `${value}%`,
                  }}
                ></div>
              </div>
              <span className="durationtime">
                {audioRef.current?.duration ? formatSongTime(audioRef.current.duration) : '--:--'}
              </span>
            </div>
          </div>
          <div className="player__options hide-on-mobile">
            <div className="player__options-container">
              <div className="player__options-btn option-btn hide-on-tablet-mobile">
                <i className="bi bi-camera-video btn--icon"></i>
              </div>
              <div className="player__options-btn option-btn hide-on-tablet-mobile">
                <i className="bi bi-mic btn--icon"></i>
              </div>
              <div className="player__options-btn volume option-btn">
                <i className="bi bi-volume-up btn--icon"></i>
              </div>
              <div className="player__volume-progress">
                <input
                  type="range"
                  className="volume__range"
                  value={currentVolume}
                  step={1}
                  min={0}
                  max={100}
                  onInput={handleVolumeChange}
                />
                <div className="progress__track volume--track">
                  <div
                    className="progress__track-update"
                    style={{
                      width: `${currentVolume}%`,
                    }}
                  ></div>
                </div>
                <span className="volume__background"></span>
              </div>
              <div className="player__list-icon">
                <i className="bi bi-music-note-list"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        title=""
        placement="right"
        closable={false}
        onClose={() => dispatch(changeMusicPlayerValue({ name: 'isDrawerOpen', value: false }))}
        visible={isDrawerOpen}
        className="music-list-drawer"
      >
        <Tabs defaultActiveKey="1" onChange={(value) => console.log(value)}>
          <TabPane tab="Danh sách phát" key="1">
            <SongList data={songList} hiddenHeader hiddenAll />
          </TabPane>
          <TabPane tab="Nghe gần đây" key="2">
            <div>
              <SongList data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} hiddenHeader hiddenAll />
            </div>
          </TabPane>
        </Tabs>
      </Drawer>
    </div>
  )
}

MusicPlayer.propTypes = {}

export default MusicPlayer

import { message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import classNames from 'classnames'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const defaultImageUrl = 'https://photo-zmp3.zadn.vn/audio_default.png'
function SongItem({ index, data, showRank, showCheck, hiddenAll, onPlayPauseClick, active, playing }) {
  const { imageURL, name, artistList } = data || {}
  const [isFavorite, setIsFavorite] = useState(false)

  const handlePlayPauseClick = () => {
    onPlayPauseClick(data)
  }

  const handleHeartClick = async () => {
    try {
      if (isFavorite) await collectionAPI.deleteFavoriteSong(data._id)
      else await collectionAPI.addFavoriteSong({ songId: data._id })
      message.success('Cập nhật thành công')
      setIsFavorite(!isFavorite)
    } catch (error) {
      message.error('Cập nhật thất bại')
    }
  }

  return (
    <div
      data-index="0"
      className={classNames('playlist__list-song media', { active: active, playing: playing && active })}
    >
      <div className="playlist__song-info media__left">
        {showRank && (
          <div className="playlist__song-rank">
            <div
              className={classNames('playlist__rank-number is-outline--text', {
                'is-outline--blue': index === 0,
                'is-outline--green': index === 1,
                'is-outline--red': index === 2,
              })}
            >
              {index + 1}
            </div>
            <div className="playlist__rank-icon">
              <i className="bi bi-dash-lg"></i>
            </div>
          </div>
        )}

        {showCheck && (
          <Fragment>
            <div className="playlist__song-check">
              <input type="checkbox" name="" id="playlist__check-0" className="mr-10" style={{ display: 'none' }} />
              <label htmlFor="playlist__check-0"></label>
            </div>
            <i className="bi bi-music-note-beamed mr-10"></i>
          </Fragment>
        )}

        <div
          className="playlist__song-thumb media__thumb mr-10"
          style={{
            background: `url('${imageURL}'), url('${defaultImageUrl}') no-repeat center center / cover`,
          }}
          onClick={handlePlayPauseClick}
        >
          <div className="thumb--animate">
            <div
              className="thumb--animate-img"
              style={{
                background:
                  "url('https://vikdang.github.io/Code_web_music_player/assets/img/SongActiveAnimation/icon-playing.gif') no-repeat center center / cover",
              }}
            ></div>
          </div>
          <div className="play-song--actions">
            <div className="control-btn btn-toggle-play btn--play-song">
              <i className="bi bi-play-fill"></i>
            </div>
          </div>
        </div>
        <div className="playlist__song-body media__info">
          <span className="playlist__song-title info__title">{name}</span>
          <p className="playlist__song-author info__author">
            {artistList?.length > 0 &&
              artistList.map((item, index) => (
                <Fragment key={item._id}>
                  <Link to={`/artists/${item._id}`} className="is-ghost">
                    {item.fullName}
                  </Link>
                  {artistList.length - 1 !== index && ',&ensp;'}
                </Fragment>
              ))}
          </p>
        </div>
      </div>
      {!hiddenAll && <span className="playlist__song-time media__content">04:30</span>}
      <div className="playlist__song-option song--tab media__right">
        {!hiddenAll && (
          <div className="playlist__song-btn btn--mic option-btn hide-on-mobile">
            <i className="btn--icon song__icon bi bi-mic-fill"></i>
          </div>
        )}
        <div className="playlist__song-btn song-btn--heart option-btn hide-on-mobile" onClick={handleHeartClick}>
          <i
            className={classNames('btn--icon icon--heart bi', {
              'bi-heart': !isFavorite,
              'bi-heart-fill primary': isFavorite,
            })}
          ></i>
        </div>
        {!hiddenAll && (
          <div className="playlist__song-btn option-btn ">
            <i className="btn--icon bi bi-three-dots"></i>
          </div>
        )}
      </div>
    </div>
  )
}

SongItem.propTypes = {}

export default SongItem

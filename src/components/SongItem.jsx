import classNames from 'classnames'
import React, { Fragment } from 'react'

const defaultImageUrl = 'https://photo-zmp3.zadn.vn/audio_default.png'
function SongItem({ index, data, showRank, showCheck, hiddenAll }) {
  const { imageURL, playing, active, name, artistList } = data || {}
  return (
    <div data-index="0" className={classNames('playlist__list-song media', { active: active, playing: playing })}>
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
              <label for="playlist__check-0"></label>
            </div>
            <i className="bi bi-music-note-beamed mr-10"></i>
          </Fragment>
        )}

        <div
          className="playlist__song-thumb media__thumb mr-10"
          style={{
            background: `url('${imageURL}'), url('${defaultImageUrl}') no-repeat center center / cover`,
          }}
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
          <span className="playlist__song-title info__title">Cứ Chill Thôi</span>
          <p className="playlist__song-author info__author">
            <a href="#" className="is-ghost">
              Chillies
            </a>
            ,&ensp;
            <a href="#" className="is-ghost">
              Suni Hạ Linh
            </a>
            ,&ensp;
            <a href="#" className="is-ghost">
              Rhymastic
            </a>
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
        <div className="playlist__song-btn song-btn--heart option-btn hide-on-mobile">
          <i className="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
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

import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import fallbackImage from 'assets/images/fallback.jpg'

function Album({ data, playlist }) {
  const { imageURL, name, _id } = data || {}
  const history = useHistory()

  const handleItemClick = () => {
    history.push({
      pathname: `/playlists/${_id}`,
    })
  }

  const handleHeartClick = (e) => {
    e.stopPropagation()
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="col l-2-4 m-3 c-4 mb-30">
      <div className="row__item item--playlist" onClick={handleItemClick}>
        <div className="row__item-container flex--top-left">
          <div className="row__item-display br-5">
            <div
              className="row__item-img img--square"
              style={{
                background: `url('${imageURL}'), url('${fallbackImage}') no-repeat center center / cover`,
              }}
            ></div>
            <div className="row__item-actions">
              <div className="action-btn btn--heart" onClick={handleHeartClick}>
                <i className="btn--icon icon--heart bi bi-heart-fill primary"></i>
              </div>
              <div className="btn--play-playlist" onClick={handlePlayClick}>
                <div className="control-btn btn-toggle-play">
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
              <div className="action-btn-delete">{/* <i className="btn--icon bi bi-three-dots"></i> */}</div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="row__item-info">
            <a href="#" className="row__info-name is-twoline">
              {name}
            </a>
            {playlist && <h3 className="row__info-creator">Nal</h3>}
          </div>
        </div>
      </div>
    </div>
  )
}

Album.propTypes = {}

export default Album

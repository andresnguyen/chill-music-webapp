import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Album({ data, playlist }) {
  const { imageURL, name, _id } = data || {}
  const history = useHistory()

  const handleItemClick = () => {
    history.push({
      pathname: `/playlists/${_id}`
    })
  }
  
  const handleHeartClick = (e) => {
    e.stopPropagation()
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
  }

  
  return (
    <div class="col l-2-4 m-3 c-4 mb-30">
      <div class="row__item item--playlist" onClick={handleItemClick}>
        <div class="row__item-container flex--top-left">
          <div class="row__item-display br-5">
            <div
              class="row__item-img img--square"
              style={{
                background: `url('${
                  imageURL || 'https://vikdang.github.io/Code_web_music_player/assets/img/playlists/playlist2.jpg'
                }') no-repeat center center / cover`,
              }}
            ></div>
            <div class="row__item-actions">
              <div class="action-btn btn--heart" onClick={handleHeartClick}>
                <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
              </div>
              <div class="btn--play-playlist" onClick={handlePlayClick}>
                <div class="control-btn btn-toggle-play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </div>
              <div class="action-btn-delete">
                {/* <i class="btn--icon bi bi-three-dots"></i> */}
              </div>
            </div>
            <div class="overlay"></div>
          </div>
          <div class="row__item-info">
            <a href="#" class="row__info-name is-twoline">
              {name}
            </a>
            {playlist && <h3 class="row__info-creator">Nal</h3>}
          </div>
        </div>
      </div>
    </div>
  )
}

Album.propTypes = {}

export default Album

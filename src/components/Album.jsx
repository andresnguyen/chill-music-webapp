import React from 'react'

function Album({ data, playlist }) {
  return (
    <div class="col l-2-4 m-3 c-4 mb-30">
      <div class="row__item item--playlist">
        <div class="row__item-container flex--top-left">
          <div class="row__item-display br-5">
            <div
              class="row__item-img img--square"
              style={{
                background:
                  "url('https://vikdang.github.io/Code_web_music_player/assets/img/playlists/playlist2.jpg') no-repeat center center / cover",
              }}
            ></div>
            <div class="row__item-actions">
              <div class="action-btn btn--heart">
                <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
              </div>
              <div class="btn--play-playlist">
                <div class="control-btn btn-toggle-play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </div>
              <div class="action-btn">
                <i class="btn--icon bi bi-three-dots"></i>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
          <div class="row__item-info">
            <a href="#" class="row__info-name is-twoline">
              Rồi Tới Luôn
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

import fallbackImage from 'assets/images/fallback.jpg'
import React from 'react'
function Artist(props) {
  return (
    <div class="col l-2-4 m-3 c-6 mb-30">
      <div class="row__item item--artist">
        <div class="row__item-container flex--top-left">
          <div class="row__item-display is-rounded">
            <div
              class="row__item-img img--square is-rounded"
              style={{
                background: `url('${fallbackImage}') no-repeat center center / contain`,
              }}
            ></div>
            <div class="row__item-actions">
              <div class="btn--play-playlist">
                <div class="control-btn btn-toggle-play">
                  <i class="bi bi-play-fill icon-play"></i>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
          <div class="row__item-info media artist--info">
            <div class="media__left">
              <div href="#" class="row__info-name is-ghost mt-15 lh-19 text-center">
                Phương Ly
                <i class="bi bi-star-fill row__info-icon">
                  <div class="icon-overlay"></div>
                </i>
              </div>
              <h3 class="row__info-creator text-center">77K quan tâm</h3>
            </div>
          </div>
          <div class="row__item-btn">
            <button class="button is-small button-primary">
              <i class="bi bi-check2"></i>
              <span>&nbsp;Đã quan tâm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Artist.propTypes = {}

export default Artist

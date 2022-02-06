import fallbackImage from 'assets/images/fallback.jpg'
import React from 'react'
function Artist({ data = {} }) {
  return (
    <div className="col l-2-4 m-3 c-6 mb-30">
      <div className="row__item item--artist">
        <div className="row__item-container flex--top-left">
          <div className="row__item-display is-rounded">
            <div
              className="row__item-img img--square is-rounded"
              style={{
                background: `url('${data.avatarURL}'), url('${fallbackImage}') no-repeat center center / contain`,
              }}
            ></div>
            <div className="row__item-actions">
              <div className="btn--play-playlist">
                <div className="control-btn btn-toggle-play">
                  <i className="bi bi-play-fill icon-play"></i>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="row__item-info media artist--info">
            <div className="media__left">
              <div href="#" className="row__info-name is-ghost mt-15 lh-19 text-center">
                {data.fullName}
                <i className="bi bi-star-fill row__info-icon">
                  <div className="icon-overlay"></div>
                </i>
              </div>
              <h3 className="row__info-creator text-center">77K quan tâm</h3>
            </div>
          </div>
          <div className="row__item-btn">
            <button className="button is-small button-primary">
              <i className="bi bi-check2"></i>
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

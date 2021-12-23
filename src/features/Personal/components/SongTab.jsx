import SongList from 'components/SongList'
import React from 'react'

function SongTab(props) {
  return (
    <div class="grid container__tab tab-song">
      <div class="row no-gutters">
        <div class="col l-12 m-12 c-12">
          <div class="container__header mb-10">
            <a href="#" class="container__header-title">
              <h3>Bài Hát&nbsp;</h3>
            </a>
            <h3 class="container__header-subtitle">Bài Hát</h3>
            <div class="container__header-actions">
              <div class="button is-small container__header-btn hide-on-mobile">
                <input type="file" name="upload song" id="song__upload-input" class="container__header-input" />
                <label for="song__upload-input">
                  <i class="bi bi-upload container__header-icon"></i>
                  Tải lên
                </label>
              </div>
              <button class="button is-small button-primary container__header-btn btn--play-all">
                <i class="bi bi-play-fill container__header-icon"></i>
                <span>Phát tất cả</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col l-12 m-12 c-12">
          <SongList />
        </div>
      </div>
    </div>
  )
}

SongTab.propTypes = {}

export default SongTab

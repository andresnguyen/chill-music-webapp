import React from 'react'
import PropTypes from 'prop-types'
import SongList from 'components/SongList'
import AlbumList from 'components/AlbumList'
import ArtistList from 'components/ArtistList'

function HomeTab(props) {
  return (
    <div class="grid container__tab tab-home active">
      <div class="container__control row">
        <div class="col l-12 m-12 c-12 mb-10">
          <div class="container__header">
            <a href="#" class="container__header-title">
              <h3>Bài Hát&nbsp;</h3>
              <i class="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 class="container__header-subtitle">Bài Hát</h3>
            <div class="container__header-actions">
              <div class="button is-small container__header-btn hide-on-mobile">
                <input type="file" name="upload song" id="home__upload-input" class="container__header-input" />
                <label for="home__upload-input">
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
          <div class="container__playmusic">
            <div class="container__slide hide-on-mobile">
              <div class="container__slide-show">
                <div class="container__slide-item first">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide1.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item second">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide2.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item third">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide3.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <divs
                    style={{
                      background:
                        " url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide4.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></divs>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide5.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide6.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide7.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide8.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide9.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide10.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide11.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide12.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide13.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
                <div class="container__slide-item fourth">
                  <div
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/slides/slide14.jpg') no-repeat center center / cover",
                    }}
                    class="container__slide-img"
                  ></div>
                </div>
              </div>
            </div>
            <div class="container__playlist">
              <div class="playlist__list">
                <SongList hiddenHeader hiddenAction />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container__section row">
        <div class="col l-12 m-12 c-12 mb-16">
          <div class="container__header">
            <a href="#" class="container__header-title">
              <h3>Playlist&nbsp;</h3>
              <i class="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 class="container__header-subtitle">Playlist</h3>
            <div class="container__header-actions hide-on-tablet-mobile">
              <div class="container__move-btn move-btn--playlist button--disabled">
                <i class="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div class="container__move-btn move-btn--playlist">
                <i class="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col l-12 m-12 c-12">
          <AlbumList playlist data={new Array(8).fill()} />
        </div>
      </div>

      <div class="container__section row mt-50">
        <div class="col l-12 m-12 c-12 mb-16">
          <div class="container__header">
            <a href="#" class="container__header-title">
              <h3>Album&nbsp;</h3>
              <i class="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 class="container__header-subtitle">Album</h3>
            <div class="container__header-actions hide-on-tablet-mobile">
              <div class="container__move-btn move-btn--album button--disabled">
                <i class="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div class="container__move-btn move-btn--album">
                <i class="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col l-12 m-12 c-12">
          <AlbumList playlist data={new Array(8).fill()} />
        </div>
      </div>

      <div class="container__section row mt-30">
        <div class="col l-12 m-12 c-12 mb-16">
          <div class="container__header">
            <a href="#" class="container__header-title">
              <h3>Nghệ Sĩ&nbsp;</h3>
              <i class="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 class="container__header-subtitle">Nghệ Sĩ</h3>
            <div class="container__header-actions hide-on-tablet-mobile">
              <div class="container__move-btn move-btn--artist button--disabled">
                <i class="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div class="container__move-btn move-btn--artist">
                <i class="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col l-12 m-12 c-12">
          <ArtistList />
        </div>
      </div>
    </div>
  )
}

HomeTab.propTypes = {}

export default HomeTab

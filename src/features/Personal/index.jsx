import React from 'react'

function PersonalFeature(props) {
  return (
    <div class="app__container tab--personal active">
      <div class="app__header">
        <div
          class="app__header-bg"
          style={{
            background:
              "url('https://vikdang.github.io/Code_web_music_player/assets/img/avatars/avatar.jpg') no-repeat center center / cover",
          }}
        ></div>
        <div class="app__header-overlay"></div>
        <div class="app__header-container">
          <div class="app__header-user">
            <div class="app__user-avatar">
              <img
                src="https://vikdang.github.io/Code_web_music_player/assets/img/avatars/avatar.jpg"
                alt=""
                class="app__user-img"
              />
            </div>
            <span class="app__user-name">Trần Huyền My</span>
          </div>
          <div class="app__header-actions">
            <a href="#" class="vip-btn is-small button button-gold hide-on-mobile">
              Mua vip ngay
            </a>
            <a href="#" class="vip-code-btn is-small button hide-on-tablet-mobile">
              Nhập code vip
            </a>
            <a class="app__header-options options--log-out hide-on-mobile">
              <i class="bi bi-three-dots"></i>
              <div class="option__log-out">
                <i class="bi bi-box-arrow-right log-out__icon"></i>
                <span>Đăng xuất</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="content__navbar">
          <div class="content__navbar-container">
            <ul class="content__navbar-menu">
              <li class="content__navbar-item active">
                <span>Tổng quan</span>
              </li>
              <li class="content__navbar-item">
                <span>Bài hát</span>
              </li>
              <li class="content__navbar-item">
                <span>Playlist</span>
              </li>
              <li class="content__navbar-item hide-on-mobile">
                <span>Album</span>
              </li>
              <li class="content__navbar-item">
                <span>MV</span>
              </li>
              <li class="content__navbar-item hide-on-mobile">
                <span>Nghệ sĩ</span>
              </li>
              <li class="content__navbar-item hide-on-tablet-mobile">
                <span>Tải lên</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="content__container">
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
                    <div class="playlist__list"></div>
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
                <div class="row no-wrap playlist--container"></div>
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
                <div class="row no-wrap album--container"></div>
              </div>
            </div>

            <div class="container__section row mt-50">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>MV&nbsp;</h3>
                    <i class="bi bi-chevron-right container__header-icon"></i>
                  </a>
                  <h3 class="container__header-subtitle">MV</h3>
                  <div class="container__header-actions hide-on-tablet-mobile">
                    <div class="container__move-btn move-btn--mv button--disabled">
                      <i class="bi bi-chevron-left container__move-btn-icon"></i>
                    </div>
                    <div class="container__move-btn move-btn--mv">
                      <i class="bi bi-chevron-right container__move-btn-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row no-wrap mv--container"></div>
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
                <div class="row no-wrap artist--container"></div>
              </div>
            </div>
          </div>

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
              <div class=" col l-12 m-12 c-12">
                <div class="container__playlist">
                  <div class="playlist__header mt-5">
                    <span class="playlist__header-title">Bài hát</span>
                    <span class="playlist__header-time">Thời gian</span>
                  </div>
                  <div class="playlist__list mb-30 overflow-visible">
                    <div class="playlist__list-song">
                      <div class="playlist__song-info">
                        <i class="bi bi-music-note-beamed playlist__song-icon mr-10"></i>
                        <div
                          class="playlist__song-thumb"
                          style={{
                            background:
                              "url('https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg') no-repeat center center / cover",
                          }}
                        ></div>
                        <div class="playlist__song-body">
                          <span class="playlist__song-title">Music Name</span>
                          <p class="playlist__song-author">Singer</p>
                        </div>
                      </div>
                      <span class="playlist__song-time">--/--</span>
                      <div class="playlist__song-option">
                        <div class="playlist__song-btn option-btn">
                          <i class="btn--icon bi bi-mic-fill"></i>
                        </div>
                        <div class="playlist__song-btn option-btn">
                          <i class="btn--icon bi bi-suit-heart"></i>
                        </div>
                        <div class="playlist__song-btn option-btn">
                          <i class="btn--icon bi bi-three-dots"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid container__tab tab-playlist">
            <div class="container__section row">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>Playlist&nbsp;</h3>
                  </a>
                  <h3 class="container__header-subtitle">Playlist</h3>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row playlist--container"></div>
              </div>
            </div>
          </div>

          <div class="grid container__tab tab-album">
            <div class="container__section row">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>Album&nbsp;</h3>
                  </a>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row album--container"></div>
              </div>
            </div>
          </div>

          <div class="grid container__tab tab-mv">
            <div class="container__section row">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>MV&nbsp;</h3>
                  </a>
                  <h3 class="container__header-subtitle">MV</h3>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row mv--container"></div>
              </div>
            </div>
          </div>

          <div class="grid container__tab tab-artist">
            <div class="container__section row">
              <div class="col l-12 m-12 c-12 mb-10">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>Nghệ Sĩ&nbsp;</h3>
                  </a>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row artist--container"></div>
              </div>
            </div>
          </div>

          <div class="grid container__tab tab-upload">
            <div class="container__section row">
              <div class="container__header col l-12 m-12 c-12 mb-10">
                <a href="#" class="container__header-title">
                  <h3 class="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
                </a>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="box--no-content">
                  <div class="no-content-image"></div>
                  <span class="no-content-text">Không có bài hát tải lên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalFeature

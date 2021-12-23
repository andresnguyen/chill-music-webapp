import React from 'react'
import PropTypes from 'prop-types'

function SliderSection(props) {
  return (
    <div class="row container__section mt-30">
      <div class="col l-12 m-12 c-12 mb-16">
        <div class="container__header">
          <a href="#" class="container__header-title">
            <h3>Mới Phát Hành</h3>
          </a>
          <h3 class="container__header-subtitle">Mới Phát Hành</h3>
          <div class="container__header-actions new-playlist--move hide-on-tablet-mobile">
            <div class="container__move-btn move-btn--new-playlist btn--prev button--disabled">
              <i class="bi bi-chevron-left container__move-btn-icon"></i>
            </div>
            <div class="container__move-btn move-btn--new-playlist btn--next">
              <i class="bi bi-chevron-right container__move-btn-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col l-12 m-12 c-12">
        <div class="row no-wrap new-playlist--container">
          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div
                    class="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist1.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div class="row__item-actions">
                    <div class="btn--play-new-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    Chưa Bao Giờ Em Quên
                  </a>
                  <h3 class="row__info-creator">
                    <a href="#" class="is-ghost">
                      Hương Ly
                    </a>
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#1</div>
                    <div class="info__detail-time">01.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div
                    class="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist2.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div class="row__item-actions">
                    <div class="btn--play-new-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    Có Một Tình Yêu Gọi Là Chia Tay
                  </a>
                  <h3 class="row__info-creator">
                    <a href="#" class="is-ghost">
                      Tăng Phúc
                    </a>
                    ,
                    <a href="#" class="is-ghost">
                      Trương Thảo Nhi
                    </a>
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#2</div>
                    <div class="info__detail-time">06.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div
                    class="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist3.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div class="row__item-actions">
                    <div class="btn--play-new-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    vâng anh đi đi (liu riu version)
                  </a>
                  <h3 class="row__info-creator">
                    <a href="#" class="is-ghost">
                      Bích Phương
                    </a>
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#3</div>
                    <div class="info__detail-time">07.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div
                    class="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist4.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div class="row__item-actions">
                    <div class="btn--play-new-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    Vậy Là Ta Mất Nhau
                  </a>
                  <h3 class="row__info-creator">
                    <a href="#" class="is-ghost">
                      Khải Đăng
                    </a>
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#4</div>
                    <div class="info__detail-time">04.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div
                    class="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist5.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div class="row__item-actions">
                    <div class="btn--play-new-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    Bao Lâu Ta Lại Yêu Một Người
                  </a>
                  <h3 class="row__info-creator">
                    <a href="#" class="is-ghost">
                      Doãn Hiếu
                    </a>
                    ,
                    <a href="#" class="is-ghost">
                      B.
                    </a>
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#5</div>
                    <div class="info__detail-time">02.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container flex--top-left">
                <div class="row__item-display br-5">
                  <div
                    class="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist6.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div class="row__item-actions">
                    <div class="btn--play-new-playlist">
                      <div class="control-btn btn-toggle-play">
                        <i class="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">
                    Anh Biết Em Không Tin
                  </a>
                  <h3 class="row__info-creator">
                    <a href="#" class="is-ghost">
                      Kidz
                    </a>
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#6</div>
                    <div class="info__detail-time">07.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-4 m-6 c-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container new-song--empty flex--top-left">
                <span>Xem tất cả</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SliderSection.propTypes = {}

export default SliderSection

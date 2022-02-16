import React from 'react'
import PropTypes from 'prop-types'

function SliderSection(props) {
  return (
    <div className="row container__section mt-30">
      <div className="col l-12 m-12 c-12 mb-16">
        <div className="container__header">
          <a href="#" className="container__header-title">
            <h3>Mới Phát Hành</h3>
          </a>
          <h3 className="container__header-subtitle">Mới Phát Hành</h3>
          {/* <div className="container__header-actions new-playlist--move hide-on-tablet-mobile">
            <div className="container__move-btn move-btn--new-playlist btn--prev button--disabled">
              <i className="bi bi-chevron-left container__move-btn-icon"></i>
            </div>
            <div className="container__move-btn move-btn--new-playlist btn--next">
              <i className="bi bi-chevron-right container__move-btn-icon"></i>
            </div>
          </div> */}
        </div>
      </div>
      <div className="col l-12 m-12 c-12">
        <div className="row no-wrap new-playlist--container">
          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist1.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="btn--play-new-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info new-playlist--info">
                  <a href="#" className="row__info-name is-twoline">
                    Chưa Bao Giờ Em Quên
                  </a>
                  <h3 className="row__info-creator">
                    <a href="#" className="is-ghost">
                      Hương Ly
                    </a>
                  </h3>
                  <div className="row__item-detail">
                    <div className="info__detail-order">#1</div>
                    <div className="info__detail-time">01.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist2.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="btn--play-new-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info new-playlist--info">
                  <a href="#" className="row__info-name is-twoline">
                    Có Một Tình Yêu Gọi Là Chia Tay
                  </a>
                  <h3 className="row__info-creator">
                    <a href="#" className="is-ghost">
                      Tăng Phúc
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      Trương Thảo Nhi
                    </a>
                  </h3>
                  <div className="row__item-detail">
                    <div className="info__detail-order">#2</div>
                    <div className="info__detail-time">06.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist3.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="btn--play-new-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info new-playlist--info">
                  <a href="#" className="row__info-name is-twoline">
                    vâng anh đi đi (liu riu version)
                  </a>
                  <h3 className="row__info-creator">
                    <a href="#" className="is-ghost">
                      Bích Phương
                    </a>
                  </h3>
                  <div className="row__item-detail">
                    <div className="info__detail-order">#3</div>
                    <div className="info__detail-time">07.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist4.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="btn--play-new-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info new-playlist--info">
                  <a href="#" className="row__info-name is-twoline">
                    Vậy Là Ta Mất Nhau
                  </a>
                  <h3 className="row__info-creator">
                    <a href="#" className="is-ghost">
                      Khải Đăng
                    </a>
                  </h3>
                  <div className="row__item-detail">
                    <div className="info__detail-order">#4</div>
                    <div className="info__detail-time">04.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist5.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="btn--play-new-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info new-playlist--info">
                  <a href="#" className="row__info-name is-twoline">
                    Bao Lâu Ta Lại Yêu Một Người
                  </a>
                  <h3 className="row__info-creator">
                    <a href="#" className="is-ghost">
                      Doãn Hiếu
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      B.
                    </a>
                  </h3>
                  <div className="row__item-detail">
                    <div className="info__detail-order">#5</div>
                    <div className="info__detail-time">02.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/newPlaylists/newPlaylist6.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="btn--play-new-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info new-playlist--info">
                  <a href="#" className="row__info-name is-twoline">
                    Anh Biết Em Không Tin
                  </a>
                  <h3 className="row__info-creator">
                    <a href="#" className="is-ghost">
                      Kidz
                    </a>
                  </h3>
                  <div className="row__item-detail">
                    <div className="info__detail-order">#6</div>
                    <div className="info__detail-time">07.10.2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-4 m-6 c-12">
            <div className="row__item item--new-playlist">
              <div className="row__item-container new-song--empty flex--top-left">
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

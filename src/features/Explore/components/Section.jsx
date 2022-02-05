import React from 'react'
import PropTypes from 'prop-types'
import Album from 'components/Album'

function Section({ data = {} }) {
  return (
    <div className="row container__section normal-playlist--section mt-30">
      <div className="col l-12 m-12 c-12 mb-16">
        <div className="container__header">
          <a href="#" className="container__header-title">
            <h3>{data.title}</h3>
          </a>
          <h3 className="container__header-subtitle">{data.title}</h3>
        </div>
      </div>

      <div className="col l-12 m-12 c-12">
        <div className="row no-wrap normal-playlist--container">
          {data.data && data.data.map((item) => (
            <Album key={item._id} data={item} />
          ))}

          {/* <div className="col l-2-4 m-3 c-4 ">
            <div className="row__item item--playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/normalPlaylists/playlistList1/playlist2.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="action-btn btn--heart">
                      <i className="btn--icon icon--heart bi bi-heart"></i>
                    </div>
                    <div className="btn--play-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                    <div className="action-btn">
                      <i className="btn--icon bi bi-three-dots"></i>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info explore-playlist--info">
                  <a href="#" className="row__info-name is-oneline">
                    V-Pop: The A-List
                  </a>

                  <p className="info__artist">
                    <a href="#" className="is-ghost">
                      Bích Phương
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      Hoàng Thùy Linh
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      ERIK
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-2-4 m-3 c-4 ">
            <div className="row__item item--playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/normalPlaylists/playlistList1/playlist3.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="action-btn btn--heart">
                      <i className="btn--icon icon--heart bi bi-heart"></i>
                    </div>
                    <div className="btn--play-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                    <div className="action-btn">
                      <i className="btn--icon bi bi-three-dots"></i>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info explore-playlist--info">
                  <a href="#" className="row__info-name is-oneline">
                    Tỏ Tình Nhẹ Nhàng Thôi
                  </a>

                  <p className="info__artist">
                    <a href="#" className="is-ghost">
                      Quân A.P
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      Changg
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      Hoàng Duyên
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-2-4 m-3 c-4 ">
            <div className="row__item item--playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/normalPlaylists/playlistList1/playlist4.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="action-btn btn--heart">
                      <i className="btn--icon icon--heart bi bi-heart"></i>
                    </div>
                    <div className="btn--play-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                    <div className="action-btn">
                      <i className="btn--icon bi bi-three-dots"></i>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info explore-playlist--info">
                  <a href="#" className="row__info-name is-oneline">
                    Nhạc Trẻ Gây Nghiện
                  </a>

                  <p className="info__artist">
                    <a href="#" className="is-ghost">
                      AMEE
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      Quân A.P
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      ERIK
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-2-4 m-3 c-4 ">
            <div className="row__item item--playlist">
              <div className="row__item-container flex--top-left">
                <div className="row__item-display br-5">
                  <div
                    className="row__item-img img--square"
                    style={{
                      background:
                        "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/normalPlaylists/playlistList1/playlist5.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <div className="row__item-actions">
                    <div className="action-btn btn--heart">
                      <i className="btn--icon icon--heart bi bi-heart"></i>
                    </div>
                    <div className="btn--play-playlist">
                      <div className="control-btn btn-toggle-play">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                    <div className="action-btn">
                      <i className="btn--icon bi bi-three-dots"></i>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="row__item-info explore-playlist--info">
                  <a href="#" className="row__info-name is-oneline">
                    HIT-MAKER: Nổi Bật
                  </a>

                  <p className="info__artist">
                    <a href="#" className="is-ghost">
                      LyLy
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      RIN9
                    </a>
                    ,
                    <a href="#" className="is-ghost">
                      Vương Anh Tú
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

Section.propTypes = {}

export default Section

import React from 'react'

function ExploreFeature(props) {
  return (
    <div class="app__container tab--explore">
      <div class="app__container-content">
        <div class="explore__container">
          <div class="grid">
            <div class="row container__section">
              <div class="col l-12 m-12 c-12">
                <div class="row explore__slide--container"></div>
              </div>
            </div>

            <div class="row container__section normal-playlist--section mt-30"></div>
            <div class="row container__section normal-playlist--section mt-30"></div>
            <div class="row container__section normal-playlist--section mt-30"></div>
            <div class="row container__section special-playlist--section mt-30"></div>

            <div class="row container__section mt-30">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>Radio Nổi bật&nbsp;</h3>
                    <i class="bi bi-chevron-right container__header-icon"></i>
                  </a>
                  <h3 class="container__header-subtitle">Radio Nổi bật</h3>
                  <div class="container__header-actions hide-on-tablet-mobile">
                    <div class="container__move-btn move-btn--radio button--disabled">
                      <i class="bi bi-chevron-left container__move-btn-icon"></i>
                    </div>
                    <div class="container__move-btn move-btn--radio">
                      <i class="bi bi-chevron-right container__move-btn-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row no-wrap radio--container"></div>
              </div>
            </div>

            <div class="row container__section normal-playlist--section mt-30"></div>
            <div class="row container__section normal-playlist--section mt-30"></div>

            <div class="row container__section mt-30">
              <div class="col l-12 m-12 c-12">
                <div class="row no-wrap label--container"></div>
              </div>
            </div>

            <div class="row container__section">
              <div class="col l-12 m-12 c-12 singer__slide-row">
                <div class="row no-wrap singer-slide--container"></div>
              </div>
            </div>

            <div class="row container__section normal-playlist--section mt-30"></div>

            <div class="row container__section mt-30">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>Sự Kiện</h3>
                  </a>
                  <h3 class="container__header-subtitle">Sự Kiện</h3>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row no-wrap event--container"></div>
              </div>
            </div>

            <div class="row container__section special-playlist--section mt-30"></div>

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
                <div class="row no-wrap new-playlist--container"></div>
              </div>
            </div>
            <div class="row container__section normal-playlist--section mt-30"></div>

            <div class="row container__section mt-30">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header">
                  <a href="#" class="container__header-title">
                    <h3>Nghệ Sĩ Yêu Thích</h3>
                  </a>
                  <h3 class="container__header-subtitle">Nghệ Sĩ Yêu Thích</h3>
                  <div class="container__header-actions fav-artist--move hide-on-tablet-mobile">
                    <div class="container__move-btn move-btn--fav-artist btn--prev button--disabled">
                      <i class="bi bi-chevron-left container__move-btn-icon"></i>
                    </div>
                    <div class="container__move-btn move-btn--fav-artist btn--next">
                      <i class="bi bi-chevron-right container__move-btn-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row no-wrap fav-artist--container"></div>
              </div>
            </div>

            <footer class="container__footer row mt-40">
              <div class="col l-12 m-12 c-12 container__footer-header">
                <span>Đối Tác Âm Nhạc</span>
              </div>
              <div class="col l-12 m-12 c-12 container__footer-brand">
                <div class="row medium-gutter brand--container"></div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreFeature

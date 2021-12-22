import React from 'react'

function FollowingFeature(props) {
  return (
    <div class="app__container tab--following">
      <div class="app__container-content">
        <div class="following__container">
          <div class="grid">
            <div class="following__navbar">
              <div class="following__navbar-container">
                <ul class="following__navbar-menu">
                  <li class="following__navbar-item active hide-on-tablet">
                    <span>Việt Nam</span>
                  </li>
                  <li class="following__navbar-item">
                    <span>US-UK</span>
                  </li>
                  <li class="following__navbar-item">
                    <span>K-Pop</span>
                  </li>
                  <li class="following__navbar-item">
                    <span>Hoa Ngữ</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row container__section mb-50">
              <div class="col l-12 m-12 c-12 singer__slide-row">
                <div class="row no-wrap singer-slide--container"></div>
              </div>
            </div>

            <div class="row container__section">
              <div class="col l-12 m-12 c-12">
                <div class="row">
                  <div class="col l-6 m-6 c-12 story--container"></div>
                  <div class="col l-6 m-6 c-12 story--container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowingFeature

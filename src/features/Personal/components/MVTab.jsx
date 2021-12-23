import React from 'react'
import PropTypes from 'prop-types'

function MVTab(props) {
  return (
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
  )
}

MVTab.propTypes = {}

export default MVTab

import React from 'react'
import PropTypes from 'prop-types'

function MVTab(props) {
  return (
    <div className="grid container__tab tab-mv">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>MV&nbsp;</h3>
            </a>
            <h3 className="container__header-subtitle">MV</h3>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <div className="row mv--container"></div>
        </div>
      </div>
    </div>
  )
}

MVTab.propTypes = {}

export default MVTab

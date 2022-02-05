import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from 'components/AlbumList'

function AlbumTab(props) {
  return (
    <div className="grid container__tab tab-album">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Album&nbsp;</h3>
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <AlbumList />
        </div>
      </div>
    </div>
  )
}

AlbumTab.propTypes = {}

export default AlbumTab

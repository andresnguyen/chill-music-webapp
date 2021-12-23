import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from 'components/AlbumList'

function AlbumTab(props) {
  return (
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
          <AlbumList />
        </div>
      </div>
    </div>
  )
}

AlbumTab.propTypes = {}

export default AlbumTab

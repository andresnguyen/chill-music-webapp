import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from 'components/AlbumList'

function PlaylistTab(props) {
  return (
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
          <AlbumList playlist />
        </div>
      </div>
    </div>
  )
}

PlaylistTab.propTypes = {}

export default PlaylistTab

import React from 'react'
import PropTypes from 'prop-types'
import ArtistList from 'components/ArtistList'

function ArtistTab(props) {
  return (
    <div class="grid container__tab tab-artist">
      <div class="container__section row">
        <div class="col l-12 m-12 c-12 mb-10">
          <div class="container__header">
            <a href="#" class="container__header-title">
              <h3>Nghệ Sĩ&nbsp;</h3>
            </a>
          </div>
        </div>
        <div class="col l-12 m-12 c-12">
          <ArtistList />
        </div>
      </div>
    </div>
  )
}

ArtistTab.propTypes = {}

export default ArtistTab

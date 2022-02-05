import React from 'react'
import PropTypes from 'prop-types'
import ArtistList from 'components/ArtistList'

function ArtistTab(props) {
  return (
    <div className="grid container__tab tab-artist">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-10">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Nghệ Sĩ&nbsp;</h3>
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <ArtistList />
        </div>
      </div>
    </div>
  )
}

ArtistTab.propTypes = {}

export default ArtistTab

import AlbumList from 'components/AlbumList'
import React from 'react'

function HomeTab() {
  return (
    <div className="grid container__tab tab-home active">
      <div className="container__section row mt-50">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Album&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </a>
            <h3 className="container__header-subtitle">Album</h3>
            <div className="container__header-actions hide-on-tablet-mobile">
              <div className="container__move-btn move-btn--album button--disabled">
                <i className="bi bi-chevron-left container__move-btn-icon"></i>
              </div>
              <div className="container__move-btn move-btn--album">
                <i className="bi bi-chevron-right container__move-btn-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <AlbumList data={albumList} />
          {!loading && albumList.length === 0 && (
            <div className="box--no-content">
              <div className="no-content-image"></div>
              <span className="no-content-text">Danh sách rỗng</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

HomeTab.propTypes = {}

export default HomeTab

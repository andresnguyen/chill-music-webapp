import React from 'react'
import PropTypes from 'prop-types'

function UploadTab(props) {
  return (
    <div className="grid container__tab tab-upload">
      <div className="container__section row">
        <div className="container__header col l-12 m-12 c-12 mb-10">
          <a href="#" className="container__header-title">
            <h3 className="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
          </a>
        </div>
        <div className="col l-12 m-12 c-12">
          <div className="box--no-content">
            <div className="no-content-image"></div>
            <span className="no-content-text">Không có bài hát tải lên</span>
          </div>
        </div>
      </div>
    </div>
  )
}

UploadTab.propTypes = {}

export default UploadTab

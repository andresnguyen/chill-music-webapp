import React from 'react'
import PropTypes from 'prop-types'

function UploadTab(props) {
  return (
    <div class="grid container__tab tab-upload">
      <div class="container__section row">
        <div class="container__header col l-12 m-12 c-12 mb-10">
          <a href="#" class="container__header-title">
            <h3 class="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
          </a>
        </div>
        <div class="col l-12 m-12 c-12">
          <div class="box--no-content">
            <div class="no-content-image"></div>
            <span class="no-content-text">Không có bài hát tải lên</span>
          </div>
        </div>
      </div>
    </div>
  )
}

UploadTab.propTypes = {}

export default UploadTab

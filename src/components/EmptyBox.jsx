import React from 'react'

function EmptyBox({ text }) {
  return (
    <div className="box--no-content">
      <div className="no-content-image"></div>
      <span className="no-content-text">{text || "Danh sách trống"}</span>
    </div>
  )
}

EmptyBox.propTypes = {}

export default EmptyBox

import React from 'react'

function EmptyBox({ text, style = {} }) {
  return (
    <div className="box--no-content" style={style}>
      <div className="no-content-image"></div>
      <span className="no-content-text">{text || "Danh sách trống"}</span>
    </div>
  )
}

EmptyBox.propTypes = {}

export default EmptyBox

import React from 'react'
import Album from './Album'

const fakeData = new Array(30).fill()
function AlbumList({ data = fakeData, playlist }) {
  return (
    <div className="row playlist--container">
      {playlist && (
        <div className="col l-2-4 m-3 c-4 mb-30">
          <div className="row__item  playlist--create item--playlist">
            <div className="row__item-container flex--center item-create--properties">
              <i className="bi bi-plus-lg album__create-icon"></i>
              <span className="album__create-annotate text-center">Tạo playlist mới</span>
            </div>
          </div>
        </div>
      )}
      {data.length > 0 && data.map((item) => <Album index={item?.id} data={item} playlist={playlist}/>)}
    </div>
  )
}

AlbumList.propTypes = {}

export default AlbumList

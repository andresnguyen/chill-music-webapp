import { changeValueCommon } from 'features/Common/commonSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import Playlist from './Playlist'

function PlaylistList({ data, hiddenCreate }) {
  const dispatch = useDispatch()

  const handleCreateClick = () => {
    dispatch(changeValueCommon({ name: 'playlistCreateOpen', value: true }))
  }

  return (
    <div className="row playlist--container">
      {!hiddenCreate && (
        <div className="col l-2-4 m-3 c-4 mb-30" onClick={handleCreateClick}>
          <div className="row__item  playlist--create item--playlist">
            <div className="row__item-container flex--center item-create--properties">
              <i className="bi bi-plus-lg album__create-icon"></i>
              <span className="album__create-annotate text-center">Tạo playlist mới</span>
            </div>
          </div>
        </div>
      )}

      {data.length > 0 && data.map((item) => <Playlist key={item._id} data={item} />)}
    </div>
  )
}

PlaylistList.propTypes = {}

export default PlaylistList

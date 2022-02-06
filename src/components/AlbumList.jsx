import React from 'react'
import Album from './Album'
import PlaylistCreate from './PlaylistCreate'

const fakeData = new Array(30).fill()
function AlbumList({ data = fakeData, playlist, hiddenCreate }) {
  return (
    <div className="row playlist--container">
      {!hiddenCreate && playlist && <PlaylistCreate />}
      {data.length > 0 &&
        data.map((item, index) => <Album key={item?._id || index} index={item?.id} data={item} playlist={playlist} />)}
    </div>
  )
}

AlbumList.propTypes = {}

export default AlbumList

import React from 'react'
import Album from './Album'

function AlbumList({ data }) {
  return (
    <div className="row playlist--container">
      {data?.map((item) => <Album key={item?._id} data={item} />)}
    </div>
  )
}

AlbumList.propTypes = {}

export default AlbumList

import React from 'react'
import SongCard from './SongCard'

function SongCardList({ data }) {
  return (
    <div className="row playlist--container">
      {data.length > 0 &&
        data.map((item, index) => <SongCard key={item?._id} data={item} />)}
    </div>
  )
}

SongCardList.propTypes = {}

export default SongCardList

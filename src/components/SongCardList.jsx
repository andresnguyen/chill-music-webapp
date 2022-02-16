import React from 'react'

function SongCardList({ data }) {
  return (
    <div className="row playlist--container">
      {data.length > 0 &&
        data.map((item, index) => <SongCardList key={item?._id} data={item} />)}
    </div>
  )
}

SongCardList.propTypes = {}

export default SongCardList

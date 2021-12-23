import React from 'react'
import PropTypes from 'prop-types'
import SongItem from './SongItem'

const fakeData = new Array(20).fill()

function SongList({ data = fakeData, hiddenHeader, hiddenAction }) {
  return (
    <div class="container__playlist">
      {!hiddenHeader && (
        <div class="playlist__header mt-5">
          <span class="playlist__header-title">Bài hát</span>
          <span class="playlist__header-time">Thời gian</span>
        </div>
      )}
      <div class="playlist__list mb-30 overflow-visible">
        {data.length > 0 && data.map((item) => <SongItem data={item} hiddenAction={hiddenAction} />)}
      </div>
    </div>
  )
}

SongList.propTypes = {}

export default SongList

import React from 'react'
import SongItem from './SongItem'

const fakeData = new Array(20).fill()

function SongList({ data = fakeData, showHeader, showAction, showRank, showCheck, hiddenAll }) {
  return (
    <div class="container__playlist">
      {showHeader && (
        <div class="playlist__header mt-5">
          <span class="playlist__header-title">Bài hát</span>
          <span class="playlist__header-time">Thời gian</span>
        </div>
      )}
      <div class="playlist__list mb-30 overflow-visible">
        {data.length > 0 &&
          data.map((item, index) => (
            <SongItem
              index={index}
              data={item}
              showAction={showAction}
              showRank={showRank}
              showCheck={showCheck}
              hiddenAll={hiddenAll}
            />
          ))}
      </div>
    </div>
  )
}

SongList.propTypes = {}

export default SongList

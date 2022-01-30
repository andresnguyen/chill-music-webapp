import { Skeleton } from 'antd'
import React from 'react'

function AlbumSkeleton() {
  return (
    <div class="col l-2-4 m-3 c-4 mb-30">
      <div class="row__item item--playlist">
        <div class="row__item-container flex--top-left">
          <div class="row__item-display br-5">
            <div class="row__item-img img--square row__item-img img--skeleton" style={{ position: 'relative' }}>
              <Skeleton.Button active />
            </div>
          </div>
          <div class="row__item-info">
            <span href="#" class="row__info-name is-twoline">
              <Skeleton active paragraph={{ rows: 1 }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

AlbumSkeleton.propTypes = {}

export default AlbumSkeleton

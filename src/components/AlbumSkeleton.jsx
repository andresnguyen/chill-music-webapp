import { Skeleton } from 'antd'
import React from 'react'

function AlbumSkeleton() {
  return (
    <div className="col l-2-4 m-3 c-4 mb-30">
      <div className="row__item item--playlist">
        <div className="row__item-container flex--top-left">
          <div className="row__item-display br-5">
            <div className="row__item-img img--square row__item-img img--skeleton" style={{ position: 'relative' }}>
              <Skeleton.Button active />
            </div>
          </div>
          <div className="row__item-info">
            <span href="#" className="row__info-name is-twoline">
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

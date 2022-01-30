import { Skeleton } from 'antd'
import AlbumSkeleton from 'components/AlbumSkeleton'
import React from 'react'

function SectionSkeletonV1({ data = {} }) {
  return (
    <div class="row container__section normal-playlist--section mt-30">
      <div class="col l-12 m-12 c-12 mb-16">
        <div class="container__header">
          <span href="#" class="container__header-title">
            <Skeleton.Button active style={{ width: 270, height: 20 }} />
          </span>
        </div>
      </div>

      <div class="col l-12 m-12 c-12">
        <div class="row no-wrap normal-playlist--container">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <AlbumSkeleton />
          ))}
        </div>
      </div>
    </div>
  )
}

SectionSkeletonV1.propTypes = {}

export default SectionSkeletonV1

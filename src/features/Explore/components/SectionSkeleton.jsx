import { Skeleton } from 'antd'
import React from 'react'

function SectionSkeleton() {
  return (
    <div class="row container__section normal-playlist--section mt-30">
      <div class="col l-12 m-12 c-12 mb-16">
        <div class="container__header">
          <a href="#" class="container__header-title">
            <h3>
              <Skeleton active paragraph={{ rows: 1 }} />
            </h3>
          </a>
          <h3 class="container__header-subtitle">
            <Skeleton active paragraph={{ rows: 1 }} />
          </h3>
        </div>
      </div>

      <div class="col l-12 m-12 c-12">
        <div class="row no-wrap normal-playlist--container">
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      </div>
    </div>
  )
}

SectionSkeleton.propTypes = {}

export default SectionSkeleton

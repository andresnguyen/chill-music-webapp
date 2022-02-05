import { Skeleton } from 'antd'
import React from 'react'

function SectionSkeleton() {
  return (
    <div className="row container__section normal-playlist--section mt-30">
      <div className="col l-12 m-12 c-12 mb-16">
        <div className="container__header">
          <a href="#" className="container__header-title">
            <h3>
              <Skeleton active paragraph={{ rows: 1 }} />
            </h3>
          </a>
          <h3 className="container__header-subtitle">
            <Skeleton active paragraph={{ rows: 1 }} />
          </h3>
        </div>
      </div>

      <div className="col l-12 m-12 c-12">
        <div className="row no-wrap normal-playlist--container">
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      </div>
    </div>
  )
}

SectionSkeleton.propTypes = {}

export default SectionSkeleton

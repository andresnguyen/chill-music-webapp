import { Skeleton } from 'antd'
import React, { Fragment } from 'react'

function SongListSkeleton(props) {
  return (
    <Fragment>
      <Skeleton.Button active size="large" block />
      <Skeleton.Button active size="large" block className="mt-3" />
      <Skeleton.Button active size="large" block className="mt-3" />
      <Skeleton.Button active size="large" block className="mt-3" />
      <Skeleton.Button active size="large" block className="mt-3" />
      <Skeleton.Button active size="large" block className="mt-3" />
      <Skeleton.Button active size="large" block className="mt-3" />
    </Fragment>
  )
}

SongListSkeleton.propTypes = {}

export default SongListSkeleton

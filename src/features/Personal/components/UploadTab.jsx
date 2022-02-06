import { Skeleton } from 'antd'
import collectionAPI from 'api/collectionAPI'
import EmptyBox from 'components/EmptyBox'
import SongList from 'components/SongList'
import React, { Fragment, useEffect, useState } from 'react'

function UploadTab(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await collectionAPI.getInfo()
        setData(data)
        setLoading(false)
      })()
    } catch (error) {
      setLoading(false)
    }
  }, [])

  const { mySongList } = data || {}
  return (
    <div className="grid container__tab tab-upload">
      <div className="container__section row">
        <div className="container__header col l-12 m-12 c-12 mb-10">
          <a href="#" className="container__header-title">
            <h3 className="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
          </a>
        </div>
        <div className="col l-12 m-12 c-12">
          {mySongList?.length > 0 && <SongList data={mySongList} />}
          {mySongList?.length === 0 && <EmptyBox />}
          {loading && (
            <Fragment>
              <Skeleton.Button active size="large" block />
              <Skeleton.Button active size="large" block className="mt-3" />
              <Skeleton.Button active size="large" block className="mt-3" />
              <Skeleton.Button active size="large" block className="mt-3" />
              <Skeleton.Button active size="large" block className="mt-3" />
              <Skeleton.Button active size="large" block className="mt-3" />
              <Skeleton.Button active size="large" block className="mt-3" />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

UploadTab.propTypes = {}

export default UploadTab

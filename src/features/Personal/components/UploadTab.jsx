import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import SongList from 'components/SongList'
import collectionAPI from 'api/collectionAPI'
import EmptyBox from 'components/EmptyBox'

function UploadTab(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await collectionAPI.getInfo()
        setData(data)
      })()
    } catch (error) {
      console.log('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  const { mySongList = [] } = data || {}
  return (
    <div className="grid container__tab tab-upload">
      <div className="container__section row">
        <div className="container__header col l-12 m-12 c-12 mb-10">
          <a href="#" className="container__header-title">
            <h3 className="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
          </a>
        </div>
        <div className="col l-12 m-12 c-12">
          <SongList data={mySongList} />
          {!loading && mySongList.length === 0 && <EmptyBox />}
        </div>
      </div>
    </div>
  )
}

UploadTab.propTypes = {}

export default UploadTab

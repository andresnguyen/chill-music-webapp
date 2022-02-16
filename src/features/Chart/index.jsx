import siteAPI from 'api/siteAPI'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

function ChartFeature(props) {
  const [limit, setLimit] = useState(10)
  const tmpData = useRef(null)

  const {
    data,
    isLoading,
    isError,
  } = useQuery(['top-song', limit], () => siteAPI.top({ limit: limit }), {
    select: (value) => value?.data,
  })

  if(data && data.length > 0) {
    tmpData.current = data
  }

  return (
    <div className="app__container tab--charts">
      <div className="app__container-content">
        <div className="charts__container">
          <div className="grid">
            <div className="chart__container-header mb-40">
              <h3 className="chart__header-name">#chillchart</h3>
              <div className="chart__header-btn">
                <i className="bi bi-play-fill chart__header-icon"></i>
              </div>
            </div>

            <div className="row no-gutters chart--container mt-10 mb-20">
              <div className="col l-12 m-12 c-12">
                <div className="container__playlist">
                  <div className="playlist__list-charts overflow-visible">
                    <SongList data={data || tmpData.current || []} showRank />
                    {isLoading && <SongListSkeleton />}
                  </div>
                </div>
              </div>
            </div>

            <div className="charts__expand">
              {limit === 10 && (
                <button className="button charts__expand-btn" onClick={() => setLimit(100)}>
                  Xem top 100
                </button>
              )}
              {limit === 100 && (
                <button className="button charts__expand-btn" onClick={() => setLimit(10)}>
                  Xem top 10
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartFeature

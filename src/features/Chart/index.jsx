import SongList from 'components/SongList'
import React from 'react'

function ChartFeature(props) {
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
                    <SongList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} showRank />
                  </div>
                </div>
              </div>
            </div>

            <div className="charts__expand">
              <button className="button charts__expand-btn">Xem top 100</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartFeature

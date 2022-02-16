import { Skeleton } from 'antd'
import collectionAPI from 'api/collectionAPI'
import EmptyBox from 'components/EmptyBox'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'

function SongTab(props) {
  const { data: favoriteSongList, isLoading: songLoading } = useQuery(
    ['favorite-song-list'],
    () => collectionAPI.getFavoriteSongList(),
    {
      select: (value) => value?.data,
    }
  )

  return (
    <div className="grid container__tab tab-song">
      <div className="row no-gutters">
        <div className="col l-12 m-12 c-12">
          <div className="container__header mb-10">
            <a href="#" className="container__header-title">
              <h3>Bài Hát&nbsp;</h3>
            </a>
            <h3 className="container__header-subtitle">Bài Hát</h3>
            <div className="container__header-actions">
              <div className="button is-small container__header-btn hide-on-mobile" title="Tải bài hát của bạn lên">
                <input type="file" name="upload song" id="song__upload-input" className="container__header-input" />
                <label htmlFor="song__upload-input">
                  <i className="bi bi-upload container__header-icon"></i>
                  Tải lên
                </label>
              </div>
              <button className="button is-small button-primary container__header-btn btn--play-all">
                <i className="bi bi-play-fill container__header-icon"></i>
                <span>Phát tất cả</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {favoriteSongList?.length > 0 && <SongList showCheck showHeader data={favoriteSongList} />}
          {favoriteSongList?.length === 0 && <EmptyBox />}
          {songLoading && <SongListSkeleton />}
        </div>
      </div>
    </div>
  )
}

SongTab.propTypes = {}

export default SongTab

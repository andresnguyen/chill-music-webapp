import { message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import EmptyBox from 'components/EmptyBox'
import SongList from 'components/SongList'
import SongListSkeleton from 'components/SongListSkeleton'
import { changeValueCommon } from 'features/Common/commonSlice'
import { changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function UploadTab(props) {
  const { data: mySongList, isLoading: mySongLoading } = useQuery(
    ['my-song-list'],
    () => collectionAPI.getMySongList(),
    {
      select: (value) => value?.data,
    }
  )
  const dispatch = useDispatch()
  const isLogin = Boolean(useSelector((state) => state.user.current?._id))


  const handleUploadClick = () => {
    if (!isLogin) {
      message.warn('Vui lòng đăng nhập để thực hiện chức năng')
      return
    }

    dispatch(
      changeValueCommon({
        name: 'songCreateOpen',
        value: true,
      })
    )
  }

  const handleUpdateClick = (data) => {
    dispatch(
      changeValueCommon({
        name: 'songUpdateData',
        value: data,
      })
    )

    dispatch(
      changeValueCommon({
        name: 'songUpdateOpen',
        value: true,
      })
    )
  }

  const handleDeleteClick = (data) => {
    dispatch(
      changeValueCommon({
        name: 'songDeleteData',
        value: data,
      })
    )

    dispatch(
      changeValueCommon({
        name: 'songDeleteOpen',
        value: true,
      })
    )
  }

  const handlePlayAll = () => {
    if (mySongList?.length > 0) {
      dispatch(changeSongList(mySongList))
    }
  }

  return (
    <div className="grid container__tab tab-upload">
      <div className="container__section row">
        <div className="container__header col l-12 m-12 c-12 mb-10">
          <a href="#" className="container__header-title">
            <h3 className="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
          </a>
          <div class="container__header-actions">
            <div class="button is-small container__header-btn hide-on-mobile" title="Tải bài hát của bạn lên" onClick={handleUploadClick}>
              <label for="home__upload-input">
                <i class="bi bi-upload container__header-icon"></i>Tải lên
              </label>
            </div>
            <button class="button is-small button-primary container__header-btn btn--play-all" onClick={handlePlayAll}>
              <i class="bi bi-play-fill container__header-icon"></i>
              <span>Phát tất cả</span>
            </button>
          </div>
        </div>

        <div className="col l-12 m-12 c-12">
          {mySongList?.length > 0 && (
            <SongList
              data={mySongList}
              showDelete
              handleUpdateClick={handleUpdateClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
          {mySongList?.length === 0 && <EmptyBox />}
          {mySongLoading && <SongListSkeleton />}
        </div>
      </div>
    </div>
  )
}

UploadTab.propTypes = {}

export default UploadTab

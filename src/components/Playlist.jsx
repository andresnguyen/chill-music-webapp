import { Dropdown, Menu, message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import classNames from 'classnames'
import { changeValueCommon } from 'features/Common/commonSlice'
import { pushToSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React, { Fragment, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { renderArtistFromList } from 'utils'

function Playlist({ data }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const user = useSelector((state) => state.user.current)
  const idList = useSelector((state) => state.user.favoritePlaylistIdList)
  const isLogin = Boolean(useSelector((state) => state.user.current?._id))

  const queryClient = useQueryClient()
  const history = useHistory()
  const dispatch = useDispatch()

  const { imageURL, name, _id, userId } = data

  useEffect(() => {
    if (idList.some((item) => item.playlistId === _id)) setIsFavorite(true)
    else setIsFavorite(false)
  }, [idList])

  const { mutate, isLoading: updateLoading } = useMutation(
    (values) => {
      if (isFavorite) return collectionAPI.deletePlaylistFromFavorite(_id)
      else return collectionAPI.addPlaylistToFavorite({ playlistId: _id })
    },
    {
      onSuccess: () => {
        message.success('Cập nhật thành công')
        setIsFavorite(!isFavorite)
        queryClient.invalidateQueries('favorite-playlist-id-list')
      },

      onError: () => {
        message.error('Cập nhật thất bại')
      },
    }
  )

  const handleItemClick = () => {
    history.push({
      pathname: `/playlists/${_id}`,
    })
  }

  const handleUpdateClick = () => {
    dispatch(
      changeValueCommon({
        name: 'playlistUpdateData',
        value: data,
      })
    )

    dispatch(
      changeValueCommon({
        name: 'playlistUpdateOpen',
        value: true,
      })
    )
  }

  const handleDeleteClick = () => {
    dispatch(
      changeValueCommon({
        name: 'playlistDeleteData',
        value: data,
      })
    )

    dispatch(
      changeValueCommon({
        name: 'playlistDeleteOpen',
        value: true,
      })
    )
  }

  const handleHeartClick = async (e) => {
    e.stopPropagation()
    if (!isLogin) {
      message.warn('Vui lòng đăng nhập để thực hiện chức năng')
      return
    }

    if (updateLoading) {
      return
    }
    mutate()
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    history.push({
      pathname: `/playlists/${_id}`,
      search: '?play=true',
    })
  }

  const menuPlaylist = (
    <Menu>
      {user._id === userId && (
        <Fragment>
          <Menu.Item key="0" onClick={handleUpdateClick}>
            Chỉnh sửa
          </Menu.Item>
          <Menu.Item key="1" onClick={handleDeleteClick}>
            Xóa
          </Menu.Item>
        </Fragment>
      )}
    </Menu>
  )

  return (
    <div className="col l-2-4 m-3 c-4 mb-30">
      <div className="row__item item--playlist" onClick={handleItemClick}>
        <div className="row__item-container flex--top-left">
          <div className="row__item-display br-5">
            <div
              className="row__item-img img--square bg-song"
              style={{
                background: `url('${imageURL}'), url('${fallbackImage}')`,
              }}
            ></div>
            <div className="row__item-actions">
              {
                <div className="action-btn btn--heart" onClick={handleHeartClick}>
                  <i
                    className={classNames('btn--icon icon--heart bi', {
                      'bi-heart': !isFavorite,
                      'bi-heart-fill primary': isFavorite,
                    })}
                  ></i>
                </div>
              }
              <div className="btn--play-playlist" onClick={handlePlayClick}>
                <div className="control-btn btn-toggle-play">
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <Dropdown overlay={menuPlaylist}>
                  <div className="action-btn">
                    <i className="btn--icon bi bi-three-dots"></i>
                  </div>
                </Dropdown>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="row__item-info">
            <a href="#" className="row__info-name is-twoline">
              {name}
            </a>
            <h3 className="row__info-creator">{renderArtistFromList(data.artistList || data.artist)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

Playlist.propTypes = {}

export default Playlist

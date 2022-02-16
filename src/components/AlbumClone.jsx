import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Dropdown, Menu, message, Modal } from 'antd'
import collectionAPI from 'api/collectionAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import classNames from 'classnames'
import { pushToSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React, { Fragment, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { renderArtistFromList } from 'utils'

function Album({ data = {} }) {
  const user = useSelector((state) => state.user.current)


  const isAlbum = data.songList
  const isPlaylist = data.songList && !data.artistId
  const isSong = data.mediaURL
  
  const idList = useSelector(
    (state) =>
      state.user[`${isAlbum ? 'favoriteAlbumIdList' : isPlaylist ? 'favoritePlaylistIdList' : 'favoriteSongIdList'}`]
  )

  const [isFavorite, setIsFavorite] = useState(false)

  const history = useHistory()
  const dispatch = useDispatch()


  const { imageURL, name, _id, userId } = data

  const queryClient = useQueryClient()



  useEffect(() => {
    if (idList.some((item) => item[`${isAlbum ? 'albumId' : isPlaylist ? 'playlistId' : 'songId'}`] === _id))
      setIsFavorite(true)
    else setIsFavorite(false)
  }, [idList])

  const { mutate, isLoading: updateLoading } = useMutation(
    (values) => {
      if (isAlbum) {
        if (isFavorite) return collectionAPI.deleteAlbumFromFavorite(_id)
        else return collectionAPI.addAlbumToFavorite({ albumId: _id })
      } else if (isPlaylist) {
        if (isFavorite) return collectionAPI.deletePlaylistFromFavorite(_id)
        else return collectionAPI.addPlaylistToFavorite({ playlistId: _id })
      } else {
        if (isFavorite) return collectionAPI.deleteSongFromFavorite(_id)
        else return collectionAPI.addSongToFavorite({ songId: _id })
      }
    },
    {
      onSuccess: () => {
        message.success('Cập nhật thành công')
        setIsFavorite(!isFavorite)
        queryClient.invalidateQueries('favorite')
      },

      onError: () => {
        message.error('Cập nhật thất bại')
      },
    }
  )

  const handleItemClick = () => {
    if (isAlbum) {
      history.push({
        pathname: `/albums/${_id}`,
      })
    }

    if (isPlaylist) {
      history.push({
        pathname: `/playlists/${_id}`,
      })
    }
  }

  function confirm() {
    Modal.confirm({
      title: (
        <span>
          Bạn có chắc chắn xóa playlist "<strong>{name}</strong>"
        </span>
      ),
      icon: <ExclamationCircleOutlined />,

      okText: 'Đồng ý',
      cancelText: 'Hủy bỏ',
    })
  }

  const handleHeartClick = async (e) => {
    e.stopPropagation()
    if(updateLoading) {
      return
    }
    mutate()
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    if (isAlbum) {
      return
    }

    dispatch(pushToSongList(data))
  }

  const menuPlaylist = (
    <Menu>
      {user._id === userId && (
        <Fragment>
          <Menu.Item key="0" onClick={() => null}>
            Chỉnh sửa
          </Menu.Item>
          <Menu.Item key="1" onClick={confirm}>
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
                {isPlaylist && (
                  <Dropdown overlay={menuPlaylist}>
                    <div className="action-btn">
                      <i className="btn--icon bi bi-three-dots"></i>
                    </div>
                  </Dropdown>
                )}
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

Album.propTypes = {}

export default Album

import { Dropdown, Menu, message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import classNames from 'classnames'
import { changeValueCommon } from 'features/Common/commonSlice'
import { addASong, addASongPriority } from 'features/MusicPlayer/musicPlayerSlice'
import React, { Fragment, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { renderArtistFromList } from 'utils'

const defaultImageUrl = 'https://photo-zmp3.zadn.vn/audio_default.png'
function SongItem({
  index,
  data,
  showRank,
  showCheck,
  hiddenAll,
  onPlayPauseClick,
  active,
  playing,
  playlistId,
  showDelete,
  handleUpdateClick,
  handleDeleteClick,
}) {
  const { imageURL, name, artistList, _id } = data || {}
  const [isFavorite, setIsFavorite] = useState(false)
  const songIdList = useSelector((state) => state.user.favoriteSongIdList)

  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  useEffect(() => {
    if (songIdList.some((item) => item.songId === _id)) setIsFavorite(true)
    else setIsFavorite(false)
  }, [songIdList])

  const handlePlayPauseClick = () => {
    onPlayPauseClick(data)
  }

  const { mutate, isLoading } = useMutation(
    () => {
      if (isFavorite) return collectionAPI.deleteSongFromFavorite(data._id)
      else return collectionAPI.addSongToFavorite({ songId: data._id })
    },
    {
      onSuccess: () => {
        message.success('Cập nhật thành công')
        setIsFavorite(!isFavorite)
        queryClient.invalidateQueries('favorite-song-id-list')
      },

      onError: () => {
        message.error('Cập nhật thất bại')
      },
    }
  )

  const { mutate: mutateDeleteSongPlaylist, isDeleteSongPlaylist } = useMutation(
    ({ playlistId, songId }) => collectionAPI.deleteSongFromPlaylist(playlistId, songId),
    {
      onSuccess: () => {
        message.success(`Xóa bài hát ${data.name} khỏi playlist thành công`)
        queryClient.invalidateQueries('playlist')
      },

      onError: () => {
        message.error(`Xóa bài hát ${data.name} khỏi playlist thất bại`)
      },
    }
  )

  const handleHeartClick = (e) => {
    e.stopPropagation()
    if (isLoading) return
    mutate()
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    handleDeleteClick(data)
  }

  const handleUpdate = (e) => {
    e.stopPropagation()
    handleUpdateClick(data)
  }

  const handleDownload = () => {}

  const handleAddToList = () => {
    dispatch(addASong(data))
  }

  const handleAddToListPriority = () => {
    dispatch(addASongPriority(data))
  }

  const handleAddToPlaylist = () => {
    dispatch(
      changeValueCommon({
        name: 'addToPlaylistOpen',
        value: true,
      })
    )

    dispatch(
      changeValueCommon({
        name: 'addToPlaylistData',
        value: data,
      })
    )
  }

  const handleDeleteFromPlaylist = () => {
    if(playlistId) mutateDeleteSongPlaylist({ playlistId, songId: data._id })
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={handleDownload}>
        <div className="menu__item">
          <i className="bi bi-download"></i>
          <span>Tải xuống</span>
        </div>
      </Menu.Item>

      <Menu.Item key="1" onClick={handleAddToList}>
        <div className="menu__item">
          <i className="bi bi-skip-start-fill"></i>
          <span>Thêm vào danh sách phát</span>
        </div>
      </Menu.Item>

      <Menu.Item key="2" onClick={handleAddToListPriority}>
        <div className="menu__item">
          <i className="bi bi-tv"></i> <span>Phát tiếp theo</span>
        </div>
      </Menu.Item>

      <Menu.Item key="3" onClick={handleAddToPlaylist}>
        <div className="menu__item">
          <i className="bi bi-plus-square"></i>
          <span>Thêm vào playlist</span>
        </div>
      </Menu.Item>

      <Menu.Item key="3" onClick={handleDeleteFromPlaylist}>
        <div className="menu__item">
          <i className="bi bi-trash"></i> <span>Xóa khỏi playlist này</span>
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <div
      data-index="0"
      className={classNames('playlist__list-song media', { active: active, playing: playing && active })}
      onClick={handlePlayPauseClick}
    >
      <div className="playlist__song-info media__left">
        {showRank && (
          <div className="playlist__song-rank">
            <div
              className={classNames('playlist__rank-number is-outline--text', {
                'is-outline--blue': index === 0,
                'is-outline--green': index === 1,
                'is-outline--red': index === 2,
              })}
            >
              {index + 1}
            </div>
            <div className="playlist__rank-icon">
              <i className="bi bi-dash-lg"></i>
            </div>
          </div>
        )}

        {showCheck && (
          <Fragment>
            <div className="playlist__song-check">
              <input type="checkbox" name="" id="playlist__check-0" className="mr-10" style={{ display: 'none' }} />
              <label htmlFor="playlist__check-0"></label>
            </div>
            <i className="bi bi-music-note-beamed mr-10"></i>
          </Fragment>
        )}

        <div
          className="playlist__song-thumb media__thumb mr-10"
          style={{
            background: `url('${imageURL}'), url('${defaultImageUrl}') no-repeat center center / cover`,
          }}
        >
          <div className="thumb--animate">
            <div
              className="thumb--animate-img"
              style={{
                background:
                  "url('https://vikdang.github.io/Code_web_music_player/assets/img/SongActiveAnimation/icon-playing.gif') no-repeat center center / cover",
              }}
            ></div>
          </div>
          <div className="play-song--actions">
            <div className="control-btn btn-toggle-play btn--play-song">
              <i className="bi bi-play-fill"></i>
            </div>
          </div>
        </div>
        <div className="playlist__song-body media__info">
          <span className="playlist__song-title info__title">{name}</span>
          <p className="playlist__song-author info__author" onClick={(e) => e.stopPropagation()}>
            {renderArtistFromList(artistList)}
          </p>
        </div>
      </div>
      {!hiddenAll && <span className="playlist__song-time media__content">04:30</span>}
      <div className="playlist__song-option song--tab media__right">
        {showDelete && (
          <div className="playlist__song-btn btn--mic option-btn hide-on-mobile" onClick={handleDelete}>
            <i className="btn--icon song__icon bi bi-trash"></i>
          </div>
        )}

        {showDelete && (
          <div className="playlist__song-btn btn--mic option-btn hide-on-mobile" onClick={handleUpdate}>
            <i className="btn--icon song__icon bi-pencil-square"></i>
          </div>
        )}

        {/* {!hiddenAll && (
          <div className="playlist__song-btn btn--mic option-btn hide-on-mobile">
            <i className="btn--icon song__icon bi bi-mic-fill"></i>
          </div>
        )} */}
        <div className="playlist__song-btn song-btn--heart option-btn hide-on-mobile" onClick={handleHeartClick}>
          <i
            className={classNames('btn--icon icon--heart bi', {
              'bi-heart': !isFavorite,
              'bi-heart-fill primary': isFavorite,
            })}
          ></i>
        </div>
        {!hiddenAll && (
          <div onClick={(e) => e.stopPropagation()} title="Khác">
            <Dropdown overlay={menu}>
              <div className="action-btn">
                <i className="btn--icon bi bi-three-dots"></i>
              </div>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  )
}

SongItem.propTypes = {}

export default SongItem

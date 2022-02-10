import { message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import classNames from 'classnames'
import { pushToSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { renderArtistFromList } from 'utils'

function Album({ data = {}, playlist }) {
  const { imageURL, name, _id } = data
  const isAlbum = data.songList
  const isPlaylist = data.songList && !data.artistId
  const [isFavorite, setIsFavorite] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleItemClick = () => {
    if (isAlbum) {
      history.push({
        pathname: `/list/${_id}`,
      })
      return
    }
  }

  const handleHeartClick = async (e) => {
    e.stopPropagation()
    try {
      if (isAlbum) {
        if (isFavorite) await collectionAPI.deleteAlbumFromFavorite(_id)
        else await collectionAPI.addAlbumToFavorite({ albumId: _id })
      } else if (isPlaylist) {
        if (isFavorite) await collectionAPI.deletePlaylistFromFavorite(_id)
        else await collectionAPI.addPlaylistToFavorite({ playlistId: _id })
      } else {
        if (isFavorite) await collectionAPI.deleteFavoriteSong(_id)
        else await collectionAPI.addFavoriteSong({ songId: _id })
      }

      message.success('Cập nhật thành công')
      setIsFavorite(!isFavorite)
    } catch (error) {
      message.success('Cập nhật thất bại')
    }
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    if (isAlbum) {
      return
    }

    dispatch(pushToSongList(data))
  }

  return (
    <div className="col l-2-4 m-3 c-4 mb-30">
      <div className="row__item item--playlist" onClick={handleItemClick}>
        <div className="row__item-container flex--top-left">
          <div className="row__item-display br-5">
            <div
              className="row__item-img img--square"
              style={{
                background: `url('${imageURL}'), url('${fallbackImage}') no-repeat center center / cover`,
              }}
            ></div>
            <div className="row__item-actions">
              <div className="action-btn btn--heart" onClick={handleHeartClick}>
                <i
                  className={classNames('btn--icon icon--heart bi', {
                    'bi-heart': !isFavorite,
                    'bi-heart-fill primary': isFavorite,
                  })}
                ></i>
              </div>
              <div className="btn--play-playlist" onClick={handlePlayClick}>
                <div className="control-btn btn-toggle-play">
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
              <div className="action-btn-delete">{/* <i className="btn--icon bi bi-three-dots"></i> */}</div>
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

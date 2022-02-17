import { Dropdown, Menu, message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import classNames from 'classnames'
import React, { Fragment, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { renderArtistFromList } from 'utils'

function Album({ data }) {
  const idList = useSelector((state) => state.user.favoriteAlbumIdList)

  const [isFavorite, setIsFavorite] = useState(false)

  const history = useHistory()

  const { imageURL, name, _id } = data

  const queryClient = useQueryClient()

  useEffect(() => {
    if (idList.some((item) => item.albumId === _id)) setIsFavorite(true)
    else setIsFavorite(false)
  }, [idList])

  const { mutate, isLoading: updateLoading } = useMutation(
    () => {
      if (isFavorite) return collectionAPI.deleteAlbumFromFavorite(_id)
      else return collectionAPI.addAlbumToFavorite({ albumId: _id })
    },
    {
      onSuccess: () => {
        message.success('Cập nhật thành công')
        setIsFavorite(!isFavorite)
        queryClient.invalidateQueries('favorite-album-id-list')
      },

      onError: () => {
        message.error('Cập nhật thất bại')
      },  
    }
  )

  const handleItemClick = () => {
    history.push({
      pathname: `/albums/${_id}`,
    })
  }

  const handleHeartClick = async (e) => {
    e.stopPropagation()
    if (updateLoading) {
      return  
    }
    mutate()
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    history.push({
      pathname: `/albums/${_id}`,
      search: '?play=true'
    })
  }

  const menu = (
    <Menu>
      <Fragment>
        <Menu.Item key="0" onClick={() => null}>
          Thêm vào danh sách phát
        </Menu.Item>
      </Fragment>
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
                <Dropdown overlay={menu}>
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
            <h3 className="row__info-creator">{renderArtistFromList(data.artist)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

Album.propTypes = {}

export default Album

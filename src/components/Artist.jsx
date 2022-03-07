import { message, Spin } from 'antd'
import artistAPI from 'api/artistAPI'
import collectionAPI from 'api/collectionAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import { changeSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React, { Fragment, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Artist({ data = {} }) {
  const { _id, fullName, favoriteNumber, avatarURL } = data
  const queryClient = useQueryClient()
  const isLogin = Boolean(useSelector((state) => state.user.current?._id))


  const history = useHistory()
  const dispatch = useDispatch()

  const handleNavigationClick = () => {
    history.push({
      pathname: `/artists/${_id}`,
    })
  }

  const [isFavorite, setIsFavorite] = useState(false)
  const artistIdList = useSelector((state) => state.user.favoriteArtistIdList)

  useEffect(() => {
    if (artistIdList.some((item) => item.artistId === _id)) setIsFavorite(true)
    else setIsFavorite(false)
  }, [artistIdList])

  const { mutate, isLoading: updateLoading } = useMutation(
    (values) => {
      if (isFavorite) return collectionAPI.deleteArtistFromFavorite(values.artistId)
      else return collectionAPI.addArtistToFavorite(values)
    },
    {
      onSuccess: () => {
        message.success('Cập nhật thành công')
        queryClient.invalidateQueries('favorite-artist-id-list')
        setIsFavorite(!isFavorite)
      },

      onError: () => {
        message.error('Cập nhật thất bại')
      },
    }
  )

  const { mutate: getArtistMutate, isLoading: getArtistLoading } = useMutation(() => artistAPI.getDetail(_id), {
    onSuccess: ({ data }) => {
      if (data.songList.length > 0) {
        dispatch(changeSongList(data.songList))
      } else {
        message.warning('Ca sỹ này không có bài hát nào')
      }
    },
    onError: () => {
      message.error('Bị lỗi hệ thống vui lòng thử lại')
    },
  })

  const handleFavoriteClick = () => {
    if (!isLogin) {
      message.warn('Vui lòng đăng nhập để thực hiện chức năng')
      return
    }
    
    if (updateLoading) return
    mutate({ artistId: _id })
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    getArtistMutate()
  }

  return (
    <div className="col l-2-4 m-3 c-6 mb-30">
      <div className="row__item item--artist">
        <div className="row__item-container flex--top-left">
          <div className="row__item-display is-rounded">
            <div
              className="row__item-img img--square is-rounded"
              style={{
                background: `url('${avatarURL}'), url('${fallbackImage}') no-repeat center center / contain`,
              }}
            ></div>
            <div className="row__item-actions" onClick={handleNavigationClick}>
              <div className="btn--play-playlist">
                {!getArtistLoading && (
                  <div className="control-btn btn-toggle-play" onClick={handlePlayClick}>
                    <i className="bi bi-play-fill icon-play"></i>
                  </div>
                )}
                {getArtistLoading && (
                  <div className="d-f-c-c">
                    <Spin size="large" />
                  </div>
                )}
              </div>
            </div>
            <div className="overlay" onClick={handleNavigationClick}></div>
          </div>
          <div className="row__item-info media artist--info">
            <div className="media__left">
              <div href="#" className="row__info-name is-ghost mt-15 lh-19 text-center">
                <span onClick={handleNavigationClick}>
                  {fullName}
                  <i className="bi bi-star-fill row__info-icon">
                    <div className="icon-overlay"></div>
                  </i>
                </span>
              </div>
              <h3 className="row__info-creator text-center">{favoriteNumber || 0} quan tâm</h3>
            </div>
          </div>
          <div className="row__item-btn">
            <button className="button is-small button-primary" onClick={handleFavoriteClick}>
              {isFavorite ? (
                <Fragment>
                  <i className="bi bi-check2"></i>
                  <span>&nbsp;Đã quan tâm</span>
                </Fragment>
              ) : (
                <Fragment>
                  <i className="bi bi-person-plus"></i>
                  <span>&nbsp;&nbsp;Quan tâm</span>
                </Fragment>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Artist.propTypes = {}

export default Artist

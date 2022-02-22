import { message } from 'antd'
import artistAPI from 'api/artistAPI'
import collectionAPI from 'api/collectionAPI'
import avatar from 'assets/images/avatar.jpg'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import HomeTab from './components/HomeTab'

function ArtistFeature(props) {
  const {
    params: { id },
  } = useRouteMatch()

  const [isFavorite, setIsFavorite] = useState(false)
  const artistIdList = useSelector((state) => state.user.favoriteArtistIdList)
  const isLogin = Boolean(useSelector((state) => state.user.current?._id))


  useEffect(() => {
    if (artistIdList.some((item) => item.artistId === id)) setIsFavorite(true)
    else setIsFavorite(false)
  }, [artistIdList])

  const queryClient = useQueryClient()

  const containerRef = useRef(null)

  const {
    data = {},
    isLoading: getLoading,
    isError,
  } = useQuery(['artist-detail', id], () => artistAPI.getDetail(id), {
    select: (value) => value?.data,
  })

  useEffect(() => {
    containerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [id])

  const { mutate, isLoading: updateLoading } = useMutation(
    (values) => {
      if (isFavorite) return collectionAPI.deleteArtistFromFavorite(values.artistId)
      else return collectionAPI.addArtistToFavorite(values)
    },
    {
      onSuccess: () => {
        message.success('Cập nhật thành công')
        setIsFavorite(!isFavorite)
      },

      onError: () => {
        message.error('Cập nhật thất bại')
      },

      onSettled: () => {
        queryClient.invalidateQueries('favorite-artist-id-list')
      },
    }
  )

  const handleFavoriteClick = () => {
    if (!isLogin) {
      message.warn('Vui lòng đăng nhập để thực hiện chức năng')
      return
    }
    
    if (updateLoading) return
    mutate({ artistId: id })
  }

  return (
    <div className="app__container tab--personal active artist-feature-custom" ref={containerRef}>
      <div className="app__header">
        {/* <div className="app__header-bg"></div> */}
        {/* <div className="app__header-overlay"></div> */}
        <div className="app__header-container">
          <div
            className="app__header-user"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.bannerURL}') no-repeat center center / cover`,
              justifyContent: 'center',
            }}
          >
            <div className="app__user-avatar" >
              <img src={data.avatarURL || avatar} alt="avatar" className="app__user-img" />
            </div>
            <span className="app__user-name">{data.fullName || 'Unknown'}</span>
            <h3 className="row__info-creator text-center">{data.favoriteNumber} quan tâm</h3>
            <div className="mt-5">
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

      <div className="content">
        <div className="content__container">
          <HomeTab data={data} />
        </div>
      </div>
    </div>
  )
}

export default ArtistFeature

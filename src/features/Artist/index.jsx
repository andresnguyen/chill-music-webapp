import artistAPI from 'api/artistAPI'
import avatar from 'assets/images/avatar.jpg'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import HomeTab from './components/HomeTab'

function ArtistFeature(props) {
  const {
    params: { id },
  } = useRouteMatch()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await artistAPI.getDetail(id)
        setData(data)
        setLoading(false)
      })()
    } catch (error) {
      setLoading(false)
    }
  }, [id])

  return (
    <div className="app__container tab--personal active artist-feature-custom">
      <div className="app__header">
        <div className="app__header-bg"></div>
        <div className="app__header-overlay"></div>
        <div className="app__header-container">
          <div
            className="app__header-user"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.bannerURL}') no-repeat center center / cover`,
              justifyContent: 'center',
            }}
          >
            <div className="app__user-avatar">
              <img src={data.avatarURL || avatar} alt="avatar" className="app__user-img" />
            </div>
            <span className="app__user-name">{data.fullName || 'Unknown'}</span>
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

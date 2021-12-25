import React from 'react'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import AlbumTab from './components/AlbumTab'
import ArtistTab from './components/ArtistTab'
import HomeTab from './components/HomeTab'
import MVTab from './components/MVTab'
import NotFound from './components/NotFound'
import PlaylistTab from './components/PlaylistTab'
import SongTab from './components/SongTab'
import UploadTab from './components/UploadTab'
import avatar from 'assets/images/avatar.jpg'


function PersonalFeature(props) {
  const match = useRouteMatch()
  return (
    <div className="app__container tab--personal active">
      <div className="app__header">
        <div
          className="app__header-bg"
          style={{
            background:
              "url('https://vikdang.github.io/Code_web_music_player/assets/img/avatars/avatar.jpg') no-repeat center center / cover",
          }}
        ></div>
        <div className="app__header-overlay"></div>
        <div className="app__header-container">
          <div className="app__header-user">
            <div className="app__user-avatar">
              <img
                src={avatar}
                alt=""
                className="app__user-img"
              />
            </div>
            <span className="app__user-name">Thường Nguyễn</span>
          </div>
          <div className="app__header-actions">
            <a href="#" className="vip-btn is-small button button-gold hide-on-mobile">
              Mua vip ngay
            </a>
            <a href="#" className="vip-code-btn is-small button hide-on-tablet-mobile">
              Nhập code vip
            </a>
            <a className="app__header-options options--log-out hide-on-mobile">
              <i className="bi bi-three-dots"></i>
              <div className="option__log-out">
                <i className="bi bi-box-arrow-right log-out__icon"></i>
                <span>Đăng xuất</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content__navbar">
          <div className="content__navbar-container">
            <div className="content__navbar-menu">
              <NavLink
                to="/mymusic"
                className="content__navbar-item"
                isActive={(match, location) => {
                  if(location.pathname === "/mymusic") {
                    return true
                  }
                }}
              >
                <span>Tổng quan</span>
              </NavLink>
              <NavLink to="/mymusic/library/song" className="content__navbar-item">
                <span>Bài hát</span>
              </NavLink>
              <NavLink to="/mymusic/library/playlist" className="content__navbar-item">
                <span>Playlist</span>
              </NavLink>
              <NavLink to="/mymusic/library/album" className="content__navbar-item hide-on-mobile">
                <span>Album</span>
              </NavLink>
              <NavLink to="/mymusic/library/video" className="content__navbar-item">
                <span>MV</span>
              </NavLink>
              <NavLink to="/mymusic/library/artist" className="content__navbar-item hide-on-mobile">
                <span>Nghệ sĩ</span>
              </NavLink>
              <NavLink to="/mymusic/upload" className="content__navbar-item hide-on-tablet-mobile">
                <span>Tải lên</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="content__container">
          <Switch>
            <Route path={match.url} exact component={HomeTab} />
            <Route path={`${match.url}/library/song`} exact component={SongTab} />
            <Route path={`${match.url}/library/playlist`} exact component={PlaylistTab} />
            <Route path={`${match.url}/library/album`} exact component={AlbumTab} />
            <Route path={`${match.url}/library/video`} exact component={MVTab} />
            <Route path={`${match.url}/library/artist`} exact component={ArtistTab} />
            <Route path={`${match.url}/upload`} exact component={UploadTab} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default PersonalFeature

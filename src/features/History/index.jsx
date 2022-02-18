import React from 'react'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import AlbumTab from './components/AlbumTab'
import PlaylistTab from './components/PlaylistTab'
import SongTab from './components/SongTab'

function HistoryFeature(props) {
  const match = useRouteMatch()

  return (
    <div className="app__container tab--personal active">
      <div className="app__header"></div>

      <div className="content" style={{ paddingTop: 50 }}>
        <div className="content__navbar">
          <div className="content__navbar-container">
            <div className="content__navbar-menu">
              <NavLink
                to="/history"
                className="content__navbar-item"
                isActive={(match, location) => {
                  if (location.pathname === '/history') {
                    return true
                  }
                }}
              >
                <span>Bài hát</span>
              </NavLink>
              <NavLink to="/history/playlist" className="content__navbar-item">
                <span>Playlist</span>
              </NavLink>
              <NavLink to="/history/album" className="content__navbar-item hide-on-mobile">
                <span>Album</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="content__container">
          <Switch>
            <Route path={match.url} exact component={SongTab} />
            <Route path={`${match.url}/playlist`} exact component={PlaylistTab} />
            <Route path={`${match.url}/album`} exact component={AlbumTab} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default HistoryFeature

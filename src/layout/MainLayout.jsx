import Header from 'components/Header'
import NotFound from 'components/NotFound'
import { PrivateRoute } from 'components/PrivateRoute'
import Sidebar from 'components/Sidebar'
import AuthFeature from 'features/Auth'
import DetailPage from 'features/Auth/pages/UserDetail'
import ChangePasswordPage from 'features/Auth/pages/ChangePassword'
import ChartFeature from 'features/Chart'
import ExploreFeature from 'features/Explore'
import FollowingFeature from 'features/Following'
import MusicPlayer from 'features/MusicPlayer'
import PersonalFeature from 'features/Personal'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function MainLayout() {
  return (
    <div
      className="app grid"
      style={{
        backgroundImage: `url('https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme1/theme1.svg')`,
      }}
    >
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={ExploreFeature} />
        <Route path="/auth" component={AuthFeature} />
        <PrivateRoute path="/my-account" component={DetailPage} />
        <PrivateRoute path="/change-pw" component={ChangePasswordPage} />
        <PrivateRoute path="/mymusic" component={PersonalFeature} />
        <Route path="/following" exact component={FollowingFeature} />
        <Route path="/explore" exact component={ExploreFeature} />
        <Route path="/charts" exact component={ChartFeature} />
        <Route exact component={NotFound} />
      </Switch>
      <MusicPlayer />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
